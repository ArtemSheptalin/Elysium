from django.db import models


class BaseModel(models.Model):
    first_name = models.CharField(max_length=20, verbose_name='Имя')
    email = models.EmailField(verbose_name='Почта', unique=True)
    message = models.CharField(max_length=2000, verbose_name='Сообщение')

    class Meta:
        abstract = True


class QuestionModel(BaseModel):

    def __str__(self):
        return f"Лид: {self.email}"
    
    class Meta:
        verbose_name = "Лида" 
        verbose_name_plural = "Лиды"



class Category(models.Model):

    category_name = models.CharField(verbose_name='Категория')

    class Meta:
        ordering = ('category_name',)
        verbose_name_plural = 'Категории'
    
    def __str__(self):
        return f"{self.category_name}"


class Image(models.Model):

    image = models.CharField(verbose_name='Ссылка на фотографию')

    class Meta:
        verbose_name_plural = 'Ссылки на фотографии'

    def __str__(self):
        return self.image


class Project(models.Model):

    category = models.ForeignKey(Category, related_name='project_category', on_delete=models.PROTECT)
    image = models.ForeignKey(Image, related_name='project_image', on_delete=models.CASCADE)
    title = models.CharField(verbose_name='Название проекта')
    client_description = models.CharField(verbose_name='Описание клиента')
    project_bounds = models.CharField(verbose_name='Цели проекта')
    project_description = models.CharField(verbose_name='Описание проекта')
    milestones = models.CharField(verbose_name='Этапы работы')

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

    def __str__(self):
        return f"{self.title}"
    




