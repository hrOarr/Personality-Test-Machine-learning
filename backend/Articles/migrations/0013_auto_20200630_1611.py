# Generated by Django 3.0.7 on 2020-06-30 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Articles', '0012_auto_20200630_1541'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='img1',
            field=models.ImageField(upload_to=''),
        ),
    ]