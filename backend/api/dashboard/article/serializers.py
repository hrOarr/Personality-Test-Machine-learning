from rest_framework import serializers

from Articles.models import Article


class ArticleCreateSerializer(serializers.ModelSerializer):
    """Serializer For Creating A Article For Logged In Users"""

    class Meta:
        model = Article
        fields = ['title', 'body', 'short_description', 'author']


class ArticleListSerializer(serializers.ModelSerializer):
    """Serializer For Listing Only Relevant Information
    Of Articles Of A Particular User"""

    class Meta:
        model = Article
        fields = ['title', 'is_published', 'slug', 'created_on']

class ArticleUpdateSerializer(serializers.ModelSerializer):
    """Serializer For Creating A Article For Logged In Users"""

    class Meta:
        model = Article
        fields = ['title', 'body', 'short_description']