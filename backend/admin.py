from django.contrib import admin
from .models import IzinJam

@admin.register(IzinJam)
class IzinJamAdmin(admin.ModelAdmin):
    list_display = ('user', 'hari', 'pertanggal', 'izin_terlambat', 'izin_pulang_cepat', 'izin_meninggalkan_kerja', 'created_at')
    list_filter = ('hari', 'pertanggal', 'created_at')
    search_fields = ('user__username', 'keperluan')
