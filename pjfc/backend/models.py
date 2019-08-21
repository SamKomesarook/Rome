from django.db import models

from .constant import command

from .lang.RomeListener import *

# Create your models here.

#
# ONLY FOR TESTING PURPPOSE
#
print("="*100)

rome = RomeListener()
print("ROME: ", rome)

expListener = ExpressionListener()
print("EXP: ", expListener)

setListener = SetListener()
print("SET: ", setListener)

freeListener = FreeListener()
print("FREE: ", freeListener)

readListener = ReadListener()
print("READ: ", readListener)

moveListener = MoveListener()
print("MOVE: ", moveListener)

ifListener = IfListener()
print("IF: ", ifListener)

loopListener = LoopListener()
print("LOOP: ", loopListener)

writeListener = WriteListener()
print("WRITE: ", writeListener)

print("="*100)
#
# ONLY FOR TESTING PURPPOSE
#


def getCommand():
    print(command)


def checkMatch(str):
    return str in command


class Interpreter():

    tree = None

    def __init__(self, tree):
        self.tree = tree

    def interpret(self, tree):
        nodeType = tree[0]
        if not checkMatch(nodeType):
            return None
        else:
            if self.tree == None:
                pass
            else:
                if nodeType in command:
                    cmd = command.get(nodeType)
                    print(cmd)
                    return cmd
                else:
                    return Interpreter(nodeType)
