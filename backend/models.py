from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    batch_id = models.CharField(max_length=100, unique=True)

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
