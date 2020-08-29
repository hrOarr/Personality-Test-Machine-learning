from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
import json
from .predict import Predictor

P = Predictor()

class submit_personality_test(APIView):
    """ Personality test submit zone """
    def post(self, request):
        print("..............request.data..............")
        print(request.data)
        predictions = P.predict([json.dumps(request.data)])
        print("--------------- Data --------")
        print(predictions)
        return Response(predictions)
