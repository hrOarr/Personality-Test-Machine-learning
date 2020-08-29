from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.views.generic import TemplateView
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.authtoken import views

urlpatterns = [

    path('api-auth/', views.obtain_auth_token),
    path('admin/', admin.site.urls),
    path('admin-panel/',include('api.admin.urls')),
    path('auth/', include('rest_auth.urls')),
    path('api/', include('Articles.api.urls')),
    path('dashboard/', include('api.dashboard.urls')),
    path('ckeditor', include('ckeditor_uploader.urls')),
    path('personality_test/', include('big5_personality.api.urls')),
    path('personality_from_text/', include('big5_personality_from_text.api.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
