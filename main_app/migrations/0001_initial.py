# Generated by Django 4.2.7 on 2024-02-27 09:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(verbose_name='Категория')),
            ],
            options={
                'verbose_name_plural': 'Категории',
                'ordering': ('category_name',),
            },
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(verbose_name='Ссылка на фотографию')),
            ],
            options={
                'verbose_name_plural': 'Ссылки на фотографии',
            },
        ),
        migrations.CreateModel(
            name='QuestionModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=20, verbose_name='Имя')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='Почта')),
                ('message', models.CharField(max_length=2000, verbose_name='Сообщение')),
            ],
            options={
                'verbose_name': 'Лида',
                'verbose_name_plural': 'Лиды',
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(verbose_name='Название проекта')),
                ('client_description', models.CharField(verbose_name='Описание клиента')),
                ('project_bounds', models.CharField(verbose_name='Цели проекта')),
                ('project_description', models.CharField(verbose_name='Описание проекта')),
                ('milestones', models.CharField(verbose_name='Этапы работы')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='project_category', to='main_app.category')),
                ('image', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_image', to='main_app.image')),
            ],
            options={
                'verbose_name': 'Проект',
                'verbose_name_plural': 'Проекты',
            },
        ),
    ]
