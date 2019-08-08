#!/usr/bin/env python3

from PyQt5.QtWidgets import (QWidget, QGridLayout, QPushButton, QApplication, QLabel, QLineEdit, QTextEdit, QGroupBox, QVBoxLayout, QHBoxLayout, QSlider)
from PyQt5.QtCore import Qt
from PyQt5 import QtTest
import sys
import ply.yacc as yacc
import ply.lex as lex
from collections.abc import Iterable

memoryDepth = 4
memoryLength = 6
index = 0
maxTextLen = 40
errs = False
starts = 0
ends = 0
paren_count = 0
instructions = []
version = "1.0.1"

reserved={
        "Move" : "MOVE",
        "right" : "RIGHT",
        "left" : "LEFT",
        "Read" : "READ",
        "Write" : "WRITE",
        "Print" : "PRINT",
        "Memory" : "MEM",
        "Start" : "ST",
        "End" : "EN",
        "Free" : "FREE",
        "If" : "IF",
        "is" : "IS",
        "not" : "NOT",
        "equal" : "EQL",
        "less" : "LESS",
        "greater" : "GRE",
        }

tokens = [
          'RPAR',
          'PLUS',
          'MINUS',
          'MULT',
          'DIV',
          'LPAR',
          'RSQ',
          'LSQ',
          'NUMBER',
          'STRING',
          'WS',
          'NEWLINE',
          'QUOTE',
          ] + list(reserved.values())

# TODO FIX THE DAMN WHITESPACE RULES
# TODO Error messages are not printing specific word error

def Exception(message):
    global errs
    global outputBar
    outputBar.append(message)
    errs = True

def t_comment(t):
    #r"[ ]*\043[^\n]*"
    r'\#.*\n'
    pass

def t_STRING(t):
    r'("[^"]*")|(\'[^\']*\')'
    return t

def t_NUMBER(t):
    r"""(\d+(\.\d*)?|\.\d+)([eE][-+]? \d+)?"""
    t.value = int(t.value)
    return t

def t_RPAR(t):
    r'\)'
    global paren_count
    paren_count-=1
    return t

def t_LPAR(t):
    r'\('
    global paren_count
    paren_count+=1
    return t

def t_LSQ(t):
    r'\['
    global paren_count
    paren_count+=1
    return t

def t_RSQ(t):
    r'\]'
    global paren_count
    paren_count-=1
    return t

def t_ID(t):
    r'[a-zA-Z_][a-zA-Z_0-9]*'
    t.type = reserved.get(t.value,'ID')
    if(t.type != "ID"):
        return t
    else:
        Exception("ERROR: Incorrect command '%s'" % t.value)
        pass

def t_NEWLINE(t):
    r'\n+'
    t.lexer.lineno += len(t.value)
    return t

t_WS=r' [ ]+ '
t_PLUS = r'\+'
t_MINUS = r'-'
t_MULT = r'\*'
t_DIV = r'/'
t_QUOTE = r'\"'

def t_error(t):
    Exception("ERROR: Illegal character '%s'" % t.value[0])
    t.lexer.skip(1)

def p_expressions(p):
    '''expressions : expressions expression
        | expression'''
    if (len(p) == 2):
        p[0] = node("expressions", p[1])
    else:
        p[0] = node("expressions", [p[1], p[2]])

def p_expression(p):
    '''expression : statement NEWLINE
        | loop NEWLINE'''
    p[0] =  node("expression", p[1])

def p_loop(p):
    '''loop : LSQ expressions RSQ LPAR intargs RPAR'''
    p[0] = node("loop", p[2], p[5])

def p_statement(p):
    '''statement : READ
        | move
        | PRINT
        | ST
        | WRITE LPAR stringargs RPAR
        | WRITE LPAR mem RPAR
        | EN
        | FREE
        | cond
        '''
    global starts
    global ends
    if (p[1] == 'Read'):
        p[0] = node("read")
    elif (p[1] == 'Print'):
        p[0] = node("print")
    elif (p[1] == 'Start'):
        if ends > 0:
            Exception("ERROR: End command before Start command.")
        starts=starts+1
        p[0] = node("start")
    elif (p[1] == 'End'):
        ends=ends+1
        p[0] = node("end")
    elif (p[1] == 'Write'):
        p[0] = node("write", p[3])
    elif (p[1] == 'Free'):
        p[0] = node("free")
    else:
        p[0] = p[1]

def p_cond(p):
    '''cond : IF LPAR peram RPAR LSQ NEWLINE expressions RSQ
        '''
    p[0] = node("cond", p[7], p[3])

def p_peram(p):
    '''peram : setexpr WS condexpr WS intargs
    | setexpr WS condexpr WS stringargs
    '''
    p[0] = [p[1],p[3],p[5]]

def p_setexpr(p):
    '''setexpr : IS
        | NOT'''
    p[0] = p[1]

def p_condexpr(p):
    '''condexpr : EQL
    | LESS
    | GRE'''
    p[0] = p[1]

def p_move(p):
    '''move : MOVE WS RIGHT
        | MOVE WS LEFT'''
    if (p[3] == "right"):
        p[0] = node("right")
    else:
        p[0] = node("left")

def p_intargs(p):
    '''intargs : NUMBER
        | mem
        | binop'''
    p[0] = p[1]

def p_binop(p):
    '''binop : intargs PLUS intargs
    | intargs MINUS intargs
    | intargs MULT intargs
    | intargs DIV intargs'''
    p[0] = node("binop", p[2], [p[3], p[1]])

def p_stringargs(p):
    '''stringargs : STRING
        | mem'''
    p[0] = p[1]

def p_mem(p):
    '''mem : MEM LPAR intargs RPAR'''
    p[0] = node("mem", p[3])

def p_error(p):
    global outputBar
    if p is not None:
        if p.value is ' ':
            Exception("ERROR: line %s, extra space." % p.lineno)
        else: #TODO Incorrect command is reading newlines for some reason, but not the error.
            pass
            #Exception("ERROR: line %s, incorrect command '%s'." % (p.lineno, p.value))
    else:
        Exception("ERROR: seperator (newline) needed.")

class node(object):
    def __init__(self, typen, children=None, value=None):
        self.typen = typen
        if children:
            self.children = children
        else:
            self.children = []
        if value:
            self.value = value
        else:
            self.value = 0
    def __repr__(self):
        return self.typen

class writeL():
    global index
    global memoryCells
    global maxTextLen
    def __init__(self, string):
        self.string = string
    def process(self):
        if(memoryCells[index].text() is ""):
            if type(self.string) is memoryM:
                self.string = self.string.process()
            if len(self.string) > maxTextLen:
                Exception("Error: write argument too long.")
            else:
                self.string = self.string.replace("\"", "").replace("\'", "")
                memoryCells[index].setText(self.string)
        else:
            Exception("ERROR: memory cell is not empty")

class freeM():
    global index
    global memoryCells
    def __init__(self):
        pass
    def process(self):
        memoryCells[index].setText("")

class printL():
    global index
    global outputBar
    global memoryCells
    def __init__(self):
        pass
    def process(self):
        outputBar.setText(outputBar.toPlainText() + memoryCells[index].text().replace(">NewLine<", "\n").replace("\"", ""))

class moveM():
    global index
    global memoryDepth
    global memoryLength
    def __init__(self, place):
        self.place = place
    def process(self):
        if (self.place == "right"):
            print(index)
            if(index >= memoryDepth*memoryLength-1):
                Exception("ERROR: No more memory cells to view.")
            else:
                updateView(1)
        else:
            if(index <= 0):
                Exception("ERROR: No more memory cells to view.")
            else:
                updateView(-1)

class memoryM():
    global index
    def __init__(self, index):
        self.index = index
    def process(self):
        if type(self.index) is not int:
            return memoryCells[int(self.index.process())-1].text()
        return memoryCells[self.index-1].text()

def updateView(place):
    global index
    global memoryCells
    memoryCells[index+place].setStyleSheet("border: 2px solid black")
    memoryCells[index].setStyleSheet("border: 1px solid black")
    index += place

class readL():
    global textBox
    global inputBar
    def __init__(self):
        pass
    def process(self):
        inputBar.setDisabled(False)
        return False

def fin():
    global inputBar
    writeL(inputBar.text().replace("\n", "")).process()
    inputBar.setText("")
    inputBar.setDisabled(True)
    processInstr()

def run():
    global errs
    global textBox
    global unixW
    global starts
    global ends
    global count
    global instructions
    instructions = []
    starts = 0
    ends = 0
    errs = False
    data = textBox.toPlainText()
    runB.setDisabled(True)
    textBox.setDisabled(True)
    slider.setDisabled(True)
    lex.lex()
    a = lex.input(data)
    parser = yacc.yacc()
    unixW.show()
    gui.raise_()
    gui.show()
    gui.activateWindow()
    b = parser.parse(a)
    if b is not None:
        instructions = interpret(b)
    else:
        Exception("ERROR: no commands.")
    if starts != 1 or ends!=1:
        Exception("ERROR: wrong number of \"Start\" or \"End\" commands.")
    if errs:
        return
    instructions = list(flatten(instructions))
    count = 0
    processInstr()

def processInstr():
    global instructions
    global count
    while count < len(instructions):
        instr = instructions[count]
        if type(instr) is list: #TODO::Instructions appended by loop is list?
            instr = instr[0]
        sleep()
        count+=1
        if instr is not None and type(instr) is not bool:
            if instr.process() is False:
                return

def sleep():
    global slider
    if slider.value() is not 0:
        QtTest.QTest.qWait(slider.value() * 100)

class loopS():
    def __init__(self, coms, num):
        self.coms = list(flatten(coms))
        self.num = num
    def process(self):
        global count
        global instructions
        if type(self.num) is int:
            for x in range(0, self.num):
                instructions.insert(count, self.coms)
        else:
            try:
                for x in range(0, int(self.num.process())):
                    instructions.insert(count, self.coms)
            except:
                Exception("ERROR: loop argument incorrect")
        instructions.pop(count-1)
        count-=1
        instructions = list(flatten(instructions))

def flatten(items):
    for x in items:
        if isinstance(x, Iterable) and not isinstance(x, (str, bytes)):
            yield from flatten(x)
        else:
            yield x

class binopS():
    def __init__(self, op, args):
        self.op = op
        self.args = args
    def process(self):
        if type(self.args[0]) is int and type(self.args[1]) is int:
            return self.op(self.args[0], self.args[1])
        elif type(self.args[0]) is int and type(self.args[1]) is not int:
            return self.op(self.args[0], int(self.args[1].process()))
        elif type(self.args[0]) is not int and type(self.args[1]) is int:
            return self.op(int(self.args[0].process()), self.args[1])
        elif type(self.args[0]) is not int and type(self.args[1]) is not int:
            return self.op(int(self.args[0].process()), int(self.args[1].process()))

def plus(x,y):
    return x + y

def minus(x,y):
    return x - y

def mult(x,y):
    return x*y

def div(x,y):
    return x/y

binopMap = {'+':plus, '-':minus, '*':mult, '/':div}

class condS():
    def __init__(self, expr, cond):
        self.expr = expr
        self.cond = cond
    def process(self):
        global count
        global instructions
        if(type(self.cond[2]) is int):
            try:
                val = int(memoryCells[index].text())
            except ValueError:
                Exception("ERROR: wrong conditional type.")
            if(self.cond[0] == 'is'):
                if(self.cond[1] == 'equal'):
                    if(val == self.cond[2]):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                elif(self.cond[1] == 'less'):
                    if(val < self.cond[2]):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                else:
                    if(val > self.cond[2]):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
            else:
                if(self.cond[1] == 'equal'):
                    if(val != self.cond[2]):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                elif(self.cond[1] == 'less'):
                    if(val >= self.cond[2]):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                else:
                    if(val <= self.cond[2]):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
        elif(isinstance(self.cond[2], str)):
            val = memoryCells[index].text()
            if(self.cond[0] == 'is'):
                if(self.cond[1] == 'equal'):
                    if(val == self.cond[2].replace("\"", "")):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                elif(self.cond[1] == 'less'):
                    if(val < self.cond[2].replace("\"", "")):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                else:
                    if(val > self.cond[2].replace("\"", "")):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
            else:
                if(self.cond[1] == 'equal'):
                    if(val != self.cond[2]):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                elif(self.cond[1] == 'less'):
                    if(val >= self.cond[2]):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                else:
                    if(val <= self.cond[2]):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
        else:
            var = self.cond[2].process()
            val = memoryCells[index].text()
            if(self.cond[0] == 'is'):
                if(self.cond[1] == 'equal'):
                    if(val == var):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                elif(self.cond[1] == 'less'):
                    if(val < var):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                else:
                    if(val > var):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
            else:
                if(self.cond[1] == 'equal'):
                    if(val != var):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                elif(self.cond[1] == 'less'):
                    if(val >= var):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
                else:
                    if(val <= var):
                        instructions.insert(count, self.expr)
                        instructions.pop(count-1)
                        count-=1
        instructions = list(flatten(instructions))



def interpret(p):
    global instructions
    global starts
    global ends
    if(type(p) is list):
            return [interpret(instance) for instance in p]
    elif p.typen == 'expressions':
        if p.children == 'expressions':
            return [interpret(p.children[y]) for y in range(0,2)]
        else:
            return [interpret(p.children)]
    elif p.typen == 'expression':
        return [interpret(p.children)]
    elif p.typen == 'loop':
        if type(p.value) is int or type(p.value) is None:
            return loopS(interpret(p.children), p.value)
        else:
            return loopS(interpret(p.children), interpret(p.value))
    elif p.typen == 'read':
        return readL()
    elif p.typen == 'mem':
        if type(p.children) is int:
            return memoryM(p.children)
        return memoryM(interpret(p.children))
    elif p.typen == 'print':
        return printL()
    elif p.typen == 'write':
        if isinstance(p.children, str) or isinstance(p.children, int):
            return writeL(p.children)
        else:
            return writeL(interpret(p.children))
    elif p.typen == 'right':
        return moveM('right')
    elif p.typen == 'free':
        return freeM()
    elif p.typen == 'left':
        return moveM('left')
    elif p.typen == 'comment':
        pass
    elif p.typen == 'binop':
        if type(p.value[0]) is not int and type(p.value[1]) is not int:
            return binopS(binopMap[p.children], [interpret(val) for val in p.value])
        elif type(p.value[0]) is not int and type(p.value[1]) is int:
            return binopS(binopMap[p.children], [interpret(p.value[0]), p.value[1]])
        elif type(p.value[0]) is int and type(p.value[1]) is not int:
            return binopS(binopMap[p.children], [p.value[0], interpret(p.value[1])])
        else:
            return binopS(binopMap[p.children], [p.value[0], p.value[1]])
    elif p.typen == 'start':
        pass
    elif p.typen == 'stop':
        pass
    elif p.typen == 'cond':
        if type(p.value[2]) is str or type(p.value[2]) is int:
            return condS(interpret(p.children), p.value)
        else:
            return condS(interpret(p.children), [p.value[0], p.value[1], interpret(p.value[2])])

def stop():
    global index
    global memoryCells
    global inputBar
    global outputBar
    global unixW
    global runB
    global slider
    global textBox
    for cell in memoryCells:
        cell.setStyleSheet("border: 1px solid black")
        cell.setText("")
    memoryCells[0].setStyleSheet("border: 2px solid black")
    inputBar.setText("")
    outputBar.setText("")
    unixW.hide()
    gui.activateWindow()
    index = 0
    runB.setDisabled(False)
    slider.setDisabled(False)
    textBox.setDisabled(False)

app = QApplication(sys.argv)
gui = QWidget()
gui.__init__()
gui.setWindowTitle('Mario version ' + version)
width = memoryLength * 100
left = 0
top = 0
height = (memoryDepth * 100) + 100
overallLayout = QVBoxLayout()
gui.setLayout(overallLayout)
gui.setGeometry(left, top, width, height)
memoryLayout = QGridLayout()
overallLayout.addLayout(memoryLayout)
#Memory
memoryCells = []
for x in range(0, memoryDepth):
    for y in range(0, memoryLength):
        label = QLabel()
        memoryLayout.addWidget(label, x, y)
        memoryCells.append(label)
        label.setStyleSheet("border: 1px solid black")
memoryCells[0].setStyleSheet("border: 2px solid black")
#Buttons
buttonsLayout = QHBoxLayout()
runB = QPushButton()
runB.setText("Run")
runB.clicked.connect(run)
buttonsLayout.addWidget(runB)
stopB = QPushButton()
stopB.setText("Stop")
stopB.clicked.connect(stop)
buttonsLayout.addWidget(stopB)
#Slider
slider = QSlider(Qt.Horizontal)
slider.setRange(0, 5)
slider.setTickInterval(1)
buttonsLayout.addWidget(slider)
overallLayout.addLayout(buttonsLayout)
#Textbox
textBoxLayout = QHBoxLayout()
textBox = QTextEdit()
textBoxLayout.addWidget(textBox)
overallLayout.addLayout(textBoxLayout)
#Unix window
unixW = QWidget()
unixLayout = QVBoxLayout()
unixW.setLayout(unixLayout)
outputBar = QTextEdit()
outputBar.setReadOnly(True)
unixLayout.addWidget(outputBar)
inputBar = QLineEdit()
inputBar.setDisabled(True)
inputBar.setMaxLength(maxTextLen)
unixLayout.addWidget(inputBar)
inputBar.returnPressed.connect(fin)
unixW.setGeometry(1000,10,600,300)
gui.show()
sys.exit(app.exec_())
