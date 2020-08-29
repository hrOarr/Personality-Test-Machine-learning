from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import submit_personality_test

urlpatterns = [
     path('submit_personality_test/', submit_personality_test.as_view()),
]

