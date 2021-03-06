# Generated by Django 3.0.7 on 2020-06-13 13:40

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Articles', '0008_auto_20200613_1859'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='body',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='short_description',
            field=ckeditor.fields.RichTextField(max_length=255, null=True),
        ),
    ]
