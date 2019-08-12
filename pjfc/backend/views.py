from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


class Test():
    def test(self):
        response = {
            "glossary": {
                "title": "example glossary",
                "GlossDiv": {
                    "title": "S",
                    "GlossList": {
                        "GlossEntry": {
                            "ID": "SGML",
                            "SortAs": "SGML",
                            "GlossTerm": "Standard Generalized Markup Language",
                            "Acronym": "SGML",
                            "Abbrev": "ISO 8879:1986",
                            "GlossDef": {
                                "para": "A meta-markup language, used to create markup languages such as DocBook.",
                                "GlossSeeAlso": ["GML", "XML"]
                            },
                            "GlossSee": "markup"
                        }
                    }
                }
            }
        }

        print(response)
        return JsonResponse(response)

def test(request):
    print(request.headers)
    print(request.body.decode('utf-8'))
    return JsonResponse({'foo': 'bar'})
