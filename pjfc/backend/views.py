from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from urllib.parse import parse_qs
import json

# Create your views here.


# class Test():
#     def test(self):

#         # TODO: make url handle POST request
#         request = self
#         print("========================")
#         print(request.headers)
#         print(request.method)
#         print("========================")

        # response = {
        #     "glossary": {
        #         "title": "example glossary",
        #         "GlossDiv": {
        #             "title": "S",
        #             "GlossList": {
        #                 "GlossEntry": {
        #                     "ID": "SGML",
        #                     "SortAs": "SGML",
        #                     "GlossTerm": "Standard Generalized Markup Language",
        #                     "Acronym": "SGML",
        #                     "Abbrev": "ISO 8879:1986",
        #                     "GlossDef": {
        #                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
        #                         "GlossSeeAlso": ["GML", "XML"]
        #                     },
        #                     "GlossSee": "markup"
        #                 }
        #             }
        #         }
        #     }
        # }

#         return JsonResponse(response)


def test(request):
    if request.method == "GET": 
        print("=======================")
        print(request.headers)
        print(request.content_type)
        print(request.body.decode('utf-8'))

        response = request.GET.dict() # dict format
        # print(type(response))
        # print(response)

        resJson = json.dumps(response) # json str format
        # print(type(resJson))
        # print(resJson)

        print("=======================")
        # return JsonResponse(resJson, safe=False)
        return JsonResponse({"foo": "bar"})
    else:
        print("=======================")
        print(request.headers)
        print(request.content_type)
        body = request.body.decode('utf-8')
        print(body)

        response = parse_qs(body) # dict format
        # print(type(response))

        resJson = json.dumps(response) # json str format

        print("=======================")
        # return JsonResponse(resJson, safe=False)
        return JsonResponse({"foo": "bar"})
