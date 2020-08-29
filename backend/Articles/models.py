from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.utils import timezone
from ckeditor_uploader.fields import RichTextUploadingField

import datetime

from .utils import unique_slug_generator

User = get_user_model()

class Article(models.Model):
    title = models.CharField(max_length=100)
    body = RichTextUploadingField(blank=True,null=True)
    short_description = RichTextUploadingField(null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    slug = models.SlugField(blank=True, null=True)
    img1 = models.ImageField(blank=True)
    is_published = models.BooleanField(default=False)
    created_on = models.DateTimeField(default=timezone.now)
    published_on = models.DateTimeField(null=True, blank=True)
    last_edited = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
    
    @property
    def author_full_name(self):
        try:
            return f'{self.author.first_name} {self.author.last_name}'
        except:
            return "Name Not Set"

    class Meta:
        indexes = [models.Index(fields=['slug'])]
        ordering = ['-published_on']

@receiver(post_save, sender=Article)
def generate_unique_slug_for_articles(sender, instance, created, *args, **kwargs):
    if created:
        instance.slug = unique_slug_generator(instance)
        instance.save()

@receiver(pre_save, sender=Article)
def update_published_on(sender, instance, **kwargs):
    if instance.id:
        old_value = Article.objects.get(pk=instance.id).published_on
        if not old_value:
            instance.published_on = timezone.now()
