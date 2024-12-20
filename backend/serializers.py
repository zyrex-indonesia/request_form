from rest_framework import serializers
from .models import User, FormRequest, IzinJam

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    batch_id = serializers.CharField(max_length=20)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'batch_id', 'email']

class FormRequestSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = FormRequest
        fields = ['id', 'title', 'content', 'status', 'user']

class IzinJamSerializer(serializers.ModelSerializer):
    class Meta:
        model = IzinJam
        fields = '__all__'
        read_only_fields = ['user', 'created_at']