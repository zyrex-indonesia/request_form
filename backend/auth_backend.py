from django.contrib.auth.backends import BaseBackend
from .models import User

class BatchIDBackend(BaseBackend):
    def authenticate(self, request, username=None, batch_id=None, **kwargs):
        try:
            user = User.objects.get(username=username, batch_id=batch_id)
            return user
        except User.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
