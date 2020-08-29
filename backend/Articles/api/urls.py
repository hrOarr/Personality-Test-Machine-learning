from django.urls import path

from .views import ArticleListView, ArticleDetailView

urlpatterns = [
     path('', ArticleListView.as_view()),
     path('<slug>', ArticleDetailView.as_view()),
]