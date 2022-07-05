from django.urls import path

from form_validations.views import UserRegisterView

urlpatterns = [
    path('', UserRegisterView.as_view(), name="register")
]
