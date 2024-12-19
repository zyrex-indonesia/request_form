from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import LoginView, FormRequestView, IzinJamListCreateView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('forms/', FormRequestView.as_view(), name='form-request'),
     path('izin-jam/', IzinJamListCreateView.as_view(), name='izin-jam'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
