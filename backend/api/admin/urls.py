from django.urls import path

from rest_framework.urlpatterns import format_suffix_patterns
from .article import views as article_views
from .user import views as user_views

urlpatterns = [
    path('articles/', article_views.AdminArticleListView.as_view()),
    path('articles/<slug>', article_views.AdminArticleDetailView.as_view()),
    path('users/', user_views.AdminUserListView.as_view()),
    path('users/<int:pk>', user_views.AdminUserDetailView.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)