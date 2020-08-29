from django.contrib.auth import get_user_model
from rest_framework import serializers

from Articles.models import Article 
User = get_user_model()

class AdminArticleDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'

class AdminArticleListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['title', 'author_full_name', 'slug',
         'is_published']