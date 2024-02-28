from django import forms
from .models import *


class MainForm(forms.ModelForm):

    class Meta:
        model = QuestionModel
        fields = ['first_name', 'email', 'message']
        widgets = {
            'first_name': forms.TextInput(attrs={'class': 'form-column', 'placeholder': 'First name', 'id': 'first_name'}),
            'email': forms.TextInput(attrs={'class': 'form-column', 'placeholder': 'Email', 'id': 'email'}),
            'message': forms.TextInput(attrs={'class': 'form-column', 'placeholder': 'What makes you feel restless?', 'rows': 4, 'id': 'message'}),
        }
