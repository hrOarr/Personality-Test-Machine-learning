from rest_framework import generics 

from .serializers import ArticleListSerializer, ArticleDetailSerializer
from Articles.models import Article

class ArticleListView(generics.ListAPIView):
    """View For List All Published Articles"""

    queryset = Article.objects.filter(is_published=True)
    serializer_class = ArticleListSerializer
    lookup_field = 'slug'


class ArticleDetailView(generics.RetrieveAPIView):
    """View For The Details Of A Single Article"""

    queryset = Article.objects.all()
    serializer_class = ArticleDetailSerializer
    lookup_field = 'slug'