from django.urls import path

from .article import views as article_views
from .user_profile import views as user_profile_views

urlpatterns = [
    path('create-new-article/', article_views.article_create_view),
    path('article-list/', article_views.ArticleListView.as_view()),
    path('profile/', user_profile_views.UserProfileView.as_view()),
    path('update-article/', article_views.article_update_view),
    path('delete-article/', article_views.article_delete_view),
    path('user-status/', user_profile_views.UserStatusView.as_view()),
]