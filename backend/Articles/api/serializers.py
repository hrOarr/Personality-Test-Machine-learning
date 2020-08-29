from rest_framework import serializers

from Articles.models import Article


class ArticleListSerializer(serializers.ModelSerializer):
    """DRF Serializer Listing All The Blog Articles"""

    author_full_name = serializers.CharField()

    class Meta:
        model = Article
        fields = ['slug', 'title', 'img1', 'short_description',
                  'author_full_name', 'published_on']


class ArticleDetailSerializer(serializers.ModelSerializer):
    """DRF Serializer For Details Of The Blog Article"""

    author_full_name = serializers.CharField()

    class Meta:
        model = Article
        fields = ['slug', 'title', 'img1', 'body', 'author_full_name','published_on',
                   'short_description']