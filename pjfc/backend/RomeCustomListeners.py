from .lang.RomeListener import *

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
