# Generated from Rome.g4 by ANTLR 4.7.2
# encoding: utf-8
from antlr4 import *
from io import StringIO
from typing.io import TextIO
import sys


def serializedATN():
    with StringIO() as buf:
        buf.write("\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\34")
        buf.write("S\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\3\2\3\2\3\2\3\2\3\2")
        buf.write("\3\2\5\2\21\n\2\3\3\3\3\3\3\7\3\26\n\3\f\3\16\3\31\13")
        buf.write("\3\3\3\3\3\5\3\35\n\3\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5")
        buf.write("\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5\62\n")
        buf.write("\5\3\5\3\5\3\5\3\5\7\58\n\5\f\5\16\5;\13\5\3\5\3\5\3\5")
        buf.write("\3\5\6\5A\n\5\r\5\16\5B\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3")
        buf.write("\5\3\5\5\5N\n\5\3\5\5\5Q\n\5\3\5\2\2\6\2\4\6\b\2\6\3\2")
        buf.write("\6\7\3\2\23\24\3\2\r\16\3\2\17\21\2[\2\20\3\2\2\2\4\22")
        buf.write("\3\2\2\2\6\36\3\2\2\2\bP\3\2\2\2\n\21\7\32\2\2\13\f\7")
        buf.write("\t\2\2\f\r\7\25\2\2\r\16\5\2\2\2\16\17\7\26\2\2\17\21")
        buf.write("\3\2\2\2\20\n\3\2\2\2\20\13\3\2\2\2\21\3\3\2\2\2\22\23")
        buf.write("\7\3\2\2\23\27\7\31\2\2\24\26\5\6\4\2\25\24\3\2\2\2\26")
        buf.write("\31\3\2\2\2\27\25\3\2\2\2\27\30\3\2\2\2\30\32\3\2\2\2")
        buf.write("\31\27\3\2\2\2\32\34\7\4\2\2\33\35\7\31\2\2\34\33\3\2")
        buf.write("\2\2\34\35\3\2\2\2\35\5\3\2\2\2\36\37\5\b\5\2\37 \7\31")
        buf.write("\2\2 \7\3\2\2\2!\"\7\5\2\2\"#\7\25\2\2#$\t\2\2\2$Q\7\26")
        buf.write("\2\2%Q\7\b\2\2&Q\7\n\2\2\'(\7\22\2\2()\7\25\2\2)*\t\3")
        buf.write("\2\2*Q\7\26\2\2+,\7\f\2\2,-\7\25\2\2-.\t\4\2\2.\61\t\5")
        buf.write("\2\2/\62\5\2\2\2\60\62\7\33\2\2\61/\3\2\2\2\61\60\3\2")
        buf.write("\2\2\62\63\3\2\2\2\63\64\7\26\2\2\64\65\7\27\2\2\659\7")
        buf.write("\31\2\2\668\5\6\4\2\67\66\3\2\2\28;\3\2\2\29\67\3\2\2")
        buf.write("\29:\3\2\2\2:<\3\2\2\2;9\3\2\2\2<Q\7\30\2\2=>\7\27\2\2")
        buf.write(">@\7\31\2\2?A\5\6\4\2@?\3\2\2\2AB\3\2\2\2B@\3\2\2\2BC")
        buf.write("\3\2\2\2CD\3\2\2\2DE\7\30\2\2EF\7\27\2\2FG\5\2\2\2GH\7")
        buf.write("\30\2\2HQ\3\2\2\2IJ\7\13\2\2JM\7\25\2\2KN\5\2\2\2LN\7")
        buf.write("\33\2\2MK\3\2\2\2ML\3\2\2\2NO\3\2\2\2OQ\7\26\2\2P!\3\2")
        buf.write("\2\2P%\3\2\2\2P&\3\2\2\2P\'\3\2\2\2P+\3\2\2\2P=\3\2\2")
        buf.write("\2PI\3\2\2\2Q\t\3\2\2\2\n\20\27\34\619BMP")
        return buf.getvalue()


class RomeParser ( Parser ):

    grammarFileName = "Rome.g4"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ "<INVALID>", "'start'", "'end'", "'set'", "'numbers'", 
                     "'letters'", "'free'", "'memory'", "'read'", "'write'", 
                     "'if'", "'is'", "'not'", "'equal'", "'less'", "'greater'", 
                     "'move'", "'right'", "'left'", "'('", "')'", "'['", 
                     "']'", "'\n'" ]

    symbolicNames = [ "<INVALID>", "START", "END", "SET", "NUM", "LET", 
                      "FREE", "MEM", "READ", "WRITE", "IF", "IS", "NOT", 
                      "EQL", "LESS", "GRE", "MOVE", "RIGHT", "LEFT", "LPAR", 
                      "RPAR", "LSQ", "RSQ", "NEWLINE", "NUMBER", "STRLIT", 
                      "IDENTIFIER" ]

    RULE_intargs = 0
    RULE_r = 1
    RULE_expressions = 2
    RULE_expression = 3

    ruleNames =  [ "intargs", "r", "expressions", "expression" ]

    EOF = Token.EOF
    START=1
    END=2
    SET=3
    NUM=4
    LET=5
    FREE=6
    MEM=7
    READ=8
    WRITE=9
    IF=10
    IS=11
    NOT=12
    EQL=13
    LESS=14
    GRE=15
    MOVE=16
    RIGHT=17
    LEFT=18
    LPAR=19
    RPAR=20
    LSQ=21
    RSQ=22
    NEWLINE=23
    NUMBER=24
    STRLIT=25
    IDENTIFIER=26

    def __init__(self, input:TokenStream, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.7.2")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None




    class IntargsContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def NUMBER(self):
            return self.getToken(RomeParser.NUMBER, 0)

        def MEM(self):
            return self.getToken(RomeParser.MEM, 0)

        def LPAR(self):
            return self.getToken(RomeParser.LPAR, 0)

        def intargs(self):
            return self.getTypedRuleContext(RomeParser.IntargsContext,0)


        def RPAR(self):
            return self.getToken(RomeParser.RPAR, 0)

        def getRuleIndex(self):
            return RomeParser.RULE_intargs

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterIntargs" ):
                listener.enterIntargs(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitIntargs" ):
                listener.exitIntargs(self)




    def intargs(self):

        localctx = RomeParser.IntargsContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_intargs)
        try:
            self.state = 14
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [RomeParser.NUMBER]:
                self.enterOuterAlt(localctx, 1)
                self.state = 8
                self.match(RomeParser.NUMBER)
                pass
            elif token in [RomeParser.MEM]:
                self.enterOuterAlt(localctx, 2)
                self.state = 9
                self.match(RomeParser.MEM)
                self.state = 10
                self.match(RomeParser.LPAR)
                self.state = 11
                self.intargs()
                self.state = 12
                self.match(RomeParser.RPAR)
                pass
            else:
                raise NoViableAltException(self)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class RContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def START(self):
            return self.getToken(RomeParser.START, 0)

        def NEWLINE(self, i:int=None):
            if i is None:
                return self.getTokens(RomeParser.NEWLINE)
            else:
                return self.getToken(RomeParser.NEWLINE, i)

        def END(self):
            return self.getToken(RomeParser.END, 0)

        def expressions(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(RomeParser.ExpressionsContext)
            else:
                return self.getTypedRuleContext(RomeParser.ExpressionsContext,i)


        def getRuleIndex(self):
            return RomeParser.RULE_r

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterR" ):
                listener.enterR(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitR" ):
                listener.exitR(self)




    def r(self):

        localctx = RomeParser.RContext(self, self._ctx, self.state)
        self.enterRule(localctx, 2, self.RULE_r)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 16
            self.match(RomeParser.START)
            self.state = 17
            self.match(RomeParser.NEWLINE)
            self.state = 21
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while (((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.READ) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.MOVE) | (1 << RomeParser.LSQ))) != 0):
                self.state = 18
                self.expressions()
                self.state = 23
                self._errHandler.sync(self)
                _la = self._input.LA(1)

            self.state = 24
            self.match(RomeParser.END)
            self.state = 26
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            if _la==RomeParser.NEWLINE:
                self.state = 25
                self.match(RomeParser.NEWLINE)


        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ExpressionsContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def expression(self):
            return self.getTypedRuleContext(RomeParser.ExpressionContext,0)


        def NEWLINE(self):
            return self.getToken(RomeParser.NEWLINE, 0)

        def getRuleIndex(self):
            return RomeParser.RULE_expressions

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterExpressions" ):
                listener.enterExpressions(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitExpressions" ):
                listener.exitExpressions(self)




    def expressions(self):

        localctx = RomeParser.ExpressionsContext(self, self._ctx, self.state)
        self.enterRule(localctx, 4, self.RULE_expressions)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 28
            self.expression()
            self.state = 29
            self.match(RomeParser.NEWLINE)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ExpressionContext(ParserRuleContext):

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return RomeParser.RULE_expression

     
        def copyFrom(self, ctx:ParserRuleContext):
            super().copyFrom(ctx)



    class ReadContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a RomeParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def READ(self):
            return self.getToken(RomeParser.READ, 0)

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterRead" ):
                listener.enterRead(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitRead" ):
                listener.exitRead(self)


    class LoopContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a RomeParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def LSQ(self, i:int=None):
            if i is None:
                return self.getTokens(RomeParser.LSQ)
            else:
                return self.getToken(RomeParser.LSQ, i)
        def NEWLINE(self):
            return self.getToken(RomeParser.NEWLINE, 0)
        def RSQ(self, i:int=None):
            if i is None:
                return self.getTokens(RomeParser.RSQ)
            else:
                return self.getToken(RomeParser.RSQ, i)
        def intargs(self):
            return self.getTypedRuleContext(RomeParser.IntargsContext,0)

        def expressions(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(RomeParser.ExpressionsContext)
            else:
                return self.getTypedRuleContext(RomeParser.ExpressionsContext,i)


        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterLoop" ):
                listener.enterLoop(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitLoop" ):
                listener.exitLoop(self)


    class WriteContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a RomeParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def WRITE(self):
            return self.getToken(RomeParser.WRITE, 0)
        def LPAR(self):
            return self.getToken(RomeParser.LPAR, 0)
        def RPAR(self):
            return self.getToken(RomeParser.RPAR, 0)
        def intargs(self):
            return self.getTypedRuleContext(RomeParser.IntargsContext,0)

        def STRLIT(self):
            return self.getToken(RomeParser.STRLIT, 0)

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterWrite" ):
                listener.enterWrite(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitWrite" ):
                listener.exitWrite(self)


    class SetContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a RomeParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def SET(self):
            return self.getToken(RomeParser.SET, 0)
        def LPAR(self):
            return self.getToken(RomeParser.LPAR, 0)
        def RPAR(self):
            return self.getToken(RomeParser.RPAR, 0)
        def NUM(self):
            return self.getToken(RomeParser.NUM, 0)
        def LET(self):
            return self.getToken(RomeParser.LET, 0)

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterSet" ):
                listener.enterSet(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitSet" ):
                listener.exitSet(self)


    class MoveContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a RomeParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def MOVE(self):
            return self.getToken(RomeParser.MOVE, 0)
        def LPAR(self):
            return self.getToken(RomeParser.LPAR, 0)
        def RPAR(self):
            return self.getToken(RomeParser.RPAR, 0)
        def RIGHT(self):
            return self.getToken(RomeParser.RIGHT, 0)
        def LEFT(self):
            return self.getToken(RomeParser.LEFT, 0)

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterMove" ):
                listener.enterMove(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitMove" ):
                listener.exitMove(self)


    class FreeContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a RomeParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def FREE(self):
            return self.getToken(RomeParser.FREE, 0)

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterFree" ):
                listener.enterFree(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitFree" ):
                listener.exitFree(self)


    class IfContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a RomeParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def IF(self):
            return self.getToken(RomeParser.IF, 0)
        def LPAR(self):
            return self.getToken(RomeParser.LPAR, 0)
        def RPAR(self):
            return self.getToken(RomeParser.RPAR, 0)
        def LSQ(self):
            return self.getToken(RomeParser.LSQ, 0)
        def NEWLINE(self):
            return self.getToken(RomeParser.NEWLINE, 0)
        def RSQ(self):
            return self.getToken(RomeParser.RSQ, 0)
        def IS(self):
            return self.getToken(RomeParser.IS, 0)
        def NOT(self):
            return self.getToken(RomeParser.NOT, 0)
        def LESS(self):
            return self.getToken(RomeParser.LESS, 0)
        def GRE(self):
            return self.getToken(RomeParser.GRE, 0)
        def EQL(self):
            return self.getToken(RomeParser.EQL, 0)
        def intargs(self):
            return self.getTypedRuleContext(RomeParser.IntargsContext,0)

        def STRLIT(self):
            return self.getToken(RomeParser.STRLIT, 0)
        def expressions(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(RomeParser.ExpressionsContext)
            else:
                return self.getTypedRuleContext(RomeParser.ExpressionsContext,i)


        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterIf" ):
                listener.enterIf(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitIf" ):
                listener.exitIf(self)



    def expression(self):

        localctx = RomeParser.ExpressionContext(self, self._ctx, self.state)
        self.enterRule(localctx, 6, self.RULE_expression)
        self._la = 0 # Token type
        try:
            self.state = 78
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [RomeParser.SET]:
                localctx = RomeParser.SetContext(self, localctx)
                self.enterOuterAlt(localctx, 1)
                self.state = 31
                self.match(RomeParser.SET)
                self.state = 32
                self.match(RomeParser.LPAR)
                self.state = 33
                _la = self._input.LA(1)
                if not(_la==RomeParser.NUM or _la==RomeParser.LET):
                    self._errHandler.recoverInline(self)
                else:
                    self._errHandler.reportMatch(self)
                    self.consume()
                self.state = 34
                self.match(RomeParser.RPAR)
                pass
            elif token in [RomeParser.FREE]:
                localctx = RomeParser.FreeContext(self, localctx)
                self.enterOuterAlt(localctx, 2)
                self.state = 35
                self.match(RomeParser.FREE)
                pass
            elif token in [RomeParser.READ]:
                localctx = RomeParser.ReadContext(self, localctx)
                self.enterOuterAlt(localctx, 3)
                self.state = 36
                self.match(RomeParser.READ)
                pass
            elif token in [RomeParser.MOVE]:
                localctx = RomeParser.MoveContext(self, localctx)
                self.enterOuterAlt(localctx, 4)
                self.state = 37
                self.match(RomeParser.MOVE)
                self.state = 38
                self.match(RomeParser.LPAR)
                self.state = 39
                _la = self._input.LA(1)
                if not(_la==RomeParser.RIGHT or _la==RomeParser.LEFT):
                    self._errHandler.recoverInline(self)
                else:
                    self._errHandler.reportMatch(self)
                    self.consume()
                self.state = 40
                self.match(RomeParser.RPAR)
                pass
            elif token in [RomeParser.IF]:
                localctx = RomeParser.IfContext(self, localctx)
                self.enterOuterAlt(localctx, 5)
                self.state = 41
                self.match(RomeParser.IF)
                self.state = 42
                self.match(RomeParser.LPAR)
                self.state = 43
                _la = self._input.LA(1)
                if not(_la==RomeParser.IS or _la==RomeParser.NOT):
                    self._errHandler.recoverInline(self)
                else:
                    self._errHandler.reportMatch(self)
                    self.consume()
                self.state = 44
                _la = self._input.LA(1)
                if not((((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << RomeParser.EQL) | (1 << RomeParser.LESS) | (1 << RomeParser.GRE))) != 0)):
                    self._errHandler.recoverInline(self)
                else:
                    self._errHandler.reportMatch(self)
                    self.consume()
                self.state = 47
                self._errHandler.sync(self)
                token = self._input.LA(1)
                if token in [RomeParser.MEM, RomeParser.NUMBER]:
                    self.state = 45
                    self.intargs()
                    pass
                elif token in [RomeParser.STRLIT]:
                    self.state = 46
                    self.match(RomeParser.STRLIT)
                    pass
                else:
                    raise NoViableAltException(self)

                self.state = 49
                self.match(RomeParser.RPAR)
                self.state = 50
                self.match(RomeParser.LSQ)
                self.state = 51
                self.match(RomeParser.NEWLINE)
                self.state = 55
                self._errHandler.sync(self)
                _la = self._input.LA(1)
                while (((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.READ) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.MOVE) | (1 << RomeParser.LSQ))) != 0):
                    self.state = 52
                    self.expressions()
                    self.state = 57
                    self._errHandler.sync(self)
                    _la = self._input.LA(1)

                self.state = 58
                self.match(RomeParser.RSQ)
                pass
            elif token in [RomeParser.LSQ]:
                localctx = RomeParser.LoopContext(self, localctx)
                self.enterOuterAlt(localctx, 6)
                self.state = 59
                self.match(RomeParser.LSQ)
                self.state = 60
                self.match(RomeParser.NEWLINE)
                self.state = 62 
                self._errHandler.sync(self)
                _la = self._input.LA(1)
                while True:
                    self.state = 61
                    self.expressions()
                    self.state = 64 
                    self._errHandler.sync(self)
                    _la = self._input.LA(1)
                    if not ((((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.READ) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.MOVE) | (1 << RomeParser.LSQ))) != 0)):
                        break

                self.state = 66
                self.match(RomeParser.RSQ)
                self.state = 67
                self.match(RomeParser.LSQ)
                self.state = 68
                self.intargs()
                self.state = 69
                self.match(RomeParser.RSQ)
                pass
            elif token in [RomeParser.WRITE]:
                localctx = RomeParser.WriteContext(self, localctx)
                self.enterOuterAlt(localctx, 7)
                self.state = 71
                self.match(RomeParser.WRITE)
                self.state = 72
                self.match(RomeParser.LPAR)
                self.state = 75
                self._errHandler.sync(self)
                token = self._input.LA(1)
                if token in [RomeParser.MEM, RomeParser.NUMBER]:
                    self.state = 73
                    self.intargs()
                    pass
                elif token in [RomeParser.STRLIT]:
                    self.state = 74
                    self.match(RomeParser.STRLIT)
                    pass
                else:
                    raise NoViableAltException(self)

                self.state = 77
                self.match(RomeParser.RPAR)
                pass
            else:
                raise NoViableAltException(self)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx





