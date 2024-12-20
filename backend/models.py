from django.db import models
from django.contrib.auth.models import AbstractUser

# Custom User Model
class User(AbstractUser):
    username = models.CharField(max_length=100, unique=True)  # Username remains unique
    batch_id = models.CharField(max_length=100, unique=True)  # Batch ID is also unique
    
    def __str__(self):
        return self.username


# Profile Model (Optional, only if additional fields are required)
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  # Link to User
    additional_field = models.CharField(max_length=100, blank=True, null=True)  # Example of extra field
    
    def __str__(self):
        return self.user.username

    
class FormRequest(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Declined', 'Declined'),
    ]
    title = models.CharField(max_length=100)
    content = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='forms')

class IzinJam(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Denied', 'Denied'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="izin_jam_requests")
    department = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    hari = models.DateField()
    pertanggal = models.DateField()
    dari_jam = models.TimeField()
    sampai_jam = models.TimeField()
    izin_terlambat = models.BooleanField(default=False)
    izin_pulang_cepat = models.BooleanField(default=False)
    izin_meninggalkan_kerja = models.BooleanField(default=False)
    keperluan = models.TextField()
    lampiran = models.FileField(upload_to="lampiran/", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.hari}"