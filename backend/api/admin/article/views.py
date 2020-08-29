from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .serializers import AdminArticleDetailSerializer, AdminArticleListSerializer
from Articles.models import Article


class AdminArticleListView(generics.ListCreateAPIView):
    queryset = Article.objects.all().order_by('-created_on')
    serializer_class = AdminArticleListSerializer
    permission_classes = (IsAdminUser,)
    lookup_field = 'slug'


class AdminArticleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = AdminArticleDetailSerializer
    permission_classes = (IsAdminUser,)
    lookup_field = 'slug'