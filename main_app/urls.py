from django.urls import path
from .views import *

urlpatterns = [
    path('', MainPageView.as_view(), name='main_page'),
    path('elysium-idea/', IdeaView.as_view(), name='idea'),
    path('elysium-services/', ServicesView.as_view(), name='services'),
    path('elysium-career/', CareerView.as_view(), name='career'),
    path('elysium-projects/', ProjectsView.as_view(), name="projects"),
    path('main-page-form-complete/', main_ajax, name='main_page_ajax'),
    path('services-form-complete/', services_ajax, name='services_ajax'),
    path('career-form-complete/', career_ajax, name='career_ajax'),
]