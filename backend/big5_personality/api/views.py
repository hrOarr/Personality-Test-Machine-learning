from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from urllib import parse
import json
from django.views.decorators.csrf import ensure_csrf_cookie

from .big5 import Big5

class submit_personality_test(APIView):
    """ Personality test submit zone """

    def post(self, request):
        big5_test = Big5()
        print("..............request.data..............")
        scores = big5_test.handle_personality_test(json.loads(json.dumps(request.data)))
        print("--------------- Data --------")
        print(scores)
        return Response(scores)