from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import login_view, FormRequestView, IzinJamListCreateView,  AdminDashboardView, UserDashboardView
from django.shortcuts import redirect
from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", lambda request: redirect("login")),  # Redirect root to login
    path("login", login_view, name="login"),
    path("admin/dashboard/", AdminDashboardView.as_view(), name="admin-dashboard"),
    path("user/dashboard/", UserDashboardView.as_view(), name="user-dashboard"),
    path("admin/dashboard/<int:pk>/", AdminDashboardView.as_view(), name="update-status"),
    path("forms/", FormRequestView.as_view(), name="form-request"),
    path("izin-jam/", IzinJamListCreateView.as_view(), name="izin-jam"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
