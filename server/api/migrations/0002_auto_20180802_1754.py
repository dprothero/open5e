# Generated by Django 2.1 on 2018-08-02 17:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='monster',
            old_name='consitution',
            new_name='constitution',
        ),
    ]