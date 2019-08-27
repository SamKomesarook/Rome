# Generated from Rome.g4 by ANTLR 4.7.2
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .RomeParser import RomeParser
else:
    from RomeParser import RomeParser

# This class defines a complete listener for a parse tree produced by RomeParser.
class RomeListener(ParseTreeListener):

    # Enter a parse tree produced by RomeParser#intargs.
    def enterIntargs(self, ctx:RomeParser.IntargsContext):
        pass

    # Exit a parse tree produced by RomeParser#intargs.
    def exitIntargs(self, ctx:RomeParser.IntargsContext):
        pass


    # Enter a parse tree produced by RomeParser#r.
    def enterR(self, ctx:RomeParser.RContext):
        pass

    # Exit a parse tree produced by RomeParser#r.
    def exitR(self, ctx:RomeParser.RContext):
        pass


    # Enter a parse tree produced by RomeParser#expressions.
    def enterExpressions(self, ctx:RomeParser.ExpressionsContext):
        pass

    # Exit a parse tree produced by RomeParser#expressions.
    def exitExpressions(self, ctx:RomeParser.ExpressionsContext):
        pass


    # Enter a parse tree produced by RomeParser#Set.
    def enterSet(self, ctx:RomeParser.SetContext):
        pass

    # Exit a parse tree produced by RomeParser#Set.
    def exitSet(self, ctx:RomeParser.SetContext):
        pass


    # Enter a parse tree produced by RomeParser#Free.
    def enterFree(self, ctx:RomeParser.FreeContext):
        pass

    # Exit a parse tree produced by RomeParser#Free.
    def exitFree(self, ctx:RomeParser.FreeContext):
        pass


    # Enter a parse tree produced by RomeParser#Read.
    def enterRead(self, ctx:RomeParser.ReadContext):
        pass

    # Exit a parse tree produced by RomeParser#Read.
    def exitRead(self, ctx:RomeParser.ReadContext):
        pass


    # Enter a parse tree produced by RomeParser#Move.
    def enterMove(self, ctx:RomeParser.MoveContext):
        pass

    # Exit a parse tree produced by RomeParser#Move.
    def exitMove(self, ctx:RomeParser.MoveContext):
        pass


    # Enter a parse tree produced by RomeParser#If.
    def enterIf(self, ctx:RomeParser.IfContext):
        pass

    # Exit a parse tree produced by RomeParser#If.
    def exitIf(self, ctx:RomeParser.IfContext):
        pass


    # Enter a parse tree produced by RomeParser#Loop.
    def enterLoop(self, ctx:RomeParser.LoopContext):
        pass

    # Exit a parse tree produced by RomeParser#Loop.
    def exitLoop(self, ctx:RomeParser.LoopContext):
        pass


    # Enter a parse tree produced by RomeParser#Write.
    def enterWrite(self, ctx:RomeParser.WriteContext):
        pass

    # Exit a parse tree produced by RomeParser#Write.
    def exitWrite(self, ctx:RomeParser.WriteContext):
        pass


class ExpressionListener(RomeListener):
    def enterExpressions(self, ctx):
        print("This is an expressions")
    
    def exitExpressions(self, ctx):
        pass

class SetListener(RomeListener):
    def enterSet(self, ctx):
        print("This is a set")
    
    def exitSet(self, ctx):
        pass

class FreeListener(RomeListener):
    def enterFree(self, ctx):
        print("This is a free")

    def exitFree(self, ctx):
        pass

class ReadListener(RomeListener):
    def enterRead(self, ctx):
        print("This is a read")

    def exitRead(self, ctx):
        pass

class MoveListener(RomeListener):
    def enterMove(self, ctx):
        print("This is a move")

    def exitMove(self, ctx):
        pass

class IfListener(RomeListener):
    def enterIf(self, ctx):
        print("This is a if")

    def exitIf(self, ctx):
        pass

class LoopListener(RomeListener):
    def enterLoop(self, ctx):
        print("This is loop")

    def exitLoop(self, ctx):
        pass

class WriteListener(RomeListener):
    def enterWrite(self, ctx):
        print("This is a write")

    def exitWrite(self, ctx):
        pass
