# Generated by Django 3.0.7 on 2020-06-30 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Articles', '0014_auto_20200630_1650'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='img1',
            field=models.ImageField(blank=True, upload_to=''),
        ),
    ]