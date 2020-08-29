from django.contrib import admin

from Articles.models import Article

class ArticleAdmin(admin.ModelAdmin):

    list_display = ['title', 'author', 'is_published']

admin.site.register(Article,ArticleAdmin)
