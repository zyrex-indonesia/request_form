from rest_framework import serializers
from .models import User, FormRequest

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'batch_id', 'email']

class FormRequestSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = FormRequest
        fields = ['id', 'title', 'content', 'status', 'user']
