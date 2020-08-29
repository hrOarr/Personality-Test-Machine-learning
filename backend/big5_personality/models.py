from django.db import models

class Big5(models.Model):
    body = models.CharField(max_length=200)