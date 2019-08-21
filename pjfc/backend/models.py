from django.db import models

from .constant import command

from .lang.RomeListener import RomeListener

# Create your models here.

rome = RomeListener()
print("="*20)
print("ROME: ", rome)


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
