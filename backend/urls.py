from django.urls import path
from .views import LoginView, FormRequestView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('forms/', FormRequestView.as_view(), name='form-request'),
]
