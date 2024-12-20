from django.contrib import admin
from .models import IzinJam, User, Profile

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'batch_id', 'is_staff', 'is_active')  # Fields to show in admin
    search_fields = ('username', 'batch_id')  # Add search functionality
    list_filter = ('is_staff', 'is_active')  # Add filters

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'additional_field')  # Example fields
    search_fields = ('user__username', 'additional_field')  # Allow search

@admin.register(IzinJam)
class IzinJamAdmin(admin.ModelAdmin):
    list_display = ('user', 'hari', 'pertanggal', 'izin_terlambat', 'izin_pulang_cepat', 'izin_meninggalkan_kerja', 'created_at')
    list_filter = ('hari', 'pertanggal', 'created_at')
    search_fields = ('user__username', 'keperluan')

