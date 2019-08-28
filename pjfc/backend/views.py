from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from urllib.parse import parse_qs
import json

# Create your views here.


def run(request):
    data = json.loads(request.body)
    print("DATA: ", data)

    return JsonResponse(data)


def test(request):
    if request.method == "GET":
        print("=======================")
        print(request.headers)
        print(request.content_type)
        print(request.body.decode('utf-8'))

        response = request.GET.dict()  # dict format
        # print(type(response))
        # print(response)

        resJson = json.dumps(response)  # json str format
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

        response = parse_qs(body)  # dict format
        # print(type(response))

        resJson = json.dumps(response)  # json str format

        print("=======================")
        # return JsonResponse(resJson, safe=False)
        return JsonResponse({"foo": "bar"})
