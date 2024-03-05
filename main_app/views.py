from typing import Any
from django.db.models.query import QuerySet
from django.forms.models import BaseModelForm
from django.http import HttpRequest, HttpResponse
from django.views.generic import *
from .models import *
from .forms import *
from django.http import JsonResponse
from django.db import IntegrityError


class MainPageView(CreateView):
    model = QuestionModel
    form_class = MainForm
    template_name = 'index.html'
    success_url = '/'


def main_ajax(request):
        
    if request.method == 'POST':
        first_name = request.POST.get('first_name')  
        email = request.POST.get('email')
        message = request.POST.get('message')

        try:
            QuestionModel.objects.create(first_name=first_name, email=email, message=message)
            return JsonResponse({'success': True})
        except IntegrityError as e:
            if 'unique constraint' in str(e):
                return JsonResponse({'success': False, 'error': 'Email already exists'})
            else:
                return JsonResponse({'success': False, 'error': 'An error occurred'})  


class IdeaView(CreateView):
    model = QuestionModel
    form_class = MainForm
    template_name = 'idea.html'


def idea_ajax(request):
        
    if request.method == 'POST':
        first_name = request.POST.get('first_name')  
        email = request.POST.get('email')
        message = request.POST.get('message')

        try:
            QuestionModel.objects.create(first_name=first_name, email=email, message=message)
            return JsonResponse({'success': True})
        except IntegrityError as e:
            if 'unique constraint' in str(e):
                return JsonResponse({'success': False, 'error': 'Email already exists'})
            else:
                return JsonResponse({'success': False, 'error': 'An error occurred'})  


class ServicesView(CreateView):
    model = QuestionModel
    form_class = MainForm
    template_name = 'services.html'
    


def services_ajax(request):
        
    if request.method == 'POST':
        first_name = request.POST.get('first_name')  
        email = request.POST.get('email')
        message = request.POST.get('message')

        try:
            QuestionModel.objects.create(first_name=first_name, email=email, message=message)
            return JsonResponse({'success': True})
        except IntegrityError as e:
            if 'unique constraint' in str(e):
                return JsonResponse({'success': False, 'error': 'Email already exists'})
            else:
                return JsonResponse({'success': False, 'error': 'An error occurred'})  


class CareerView(CreateView):
    model = QuestionModel
    form_class = MainForm
    template_name = 'career.html'
    success_url = '/'


def career_ajax(request):
    
    if request.method == 'POST':
        first_name = request.POST.get('first_name')  
        email = request.POST.get('email')
        message = request.POST.get('message')

        try:
            QuestionModel.objects.create(first_name=first_name, email=email, message=message)
            return JsonResponse({'success': True})
        except IntegrityError as e:
            if 'unique constraint' in str(e):
                return JsonResponse({'success': False, 'error': 'Email already exists'})
            else:
                return JsonResponse({'success': False, 'error': 'An error occurred'})  

 


class ProjectsView(ListView):
    model = Project
    template_name = 'projects.html'
    context_object_name = 'projects'
    paginate_by = 3


    def get_queryset(self) -> QuerySet[Any]:

        queryset = super().get_queryset()

        if self.request.method == "GET":

            if self.request.GET.get('development'):
                queryset = queryset.filter(category=1)
                if not queryset.exists():
                    queryset = ''
            
            elif self.request.GET.get('intelligence'):
                queryset = queryset.filter(category=2)
                if not queryset.exists():
                    queryset = ''

            elif self.request.GET.get('analysis'):
                queryset = queryset.filter(category=3)
                if not queryset.exists():
                    queryset = ''

            elif self.request.GET.get('optimization'):
                queryset = queryset.filter(category=4)
                if not queryset.exists():
                    queryset = ''
            
            else:
                queryset = queryset.filter(category=1)
                if not queryset.exists():
                    queryset = ''

            
            return queryset

        
        
            


