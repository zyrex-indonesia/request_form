from django.contrib.auth.backends import BaseBackend
from .models import User

class CustomAuthBackend(BaseBackend):
    def authenticate(self, request, username=None, batch_id=None):
        try:
            user = User.objects.get(username=username)
            if user.profile.batch_id == batch_id:  # Assuming batch_id is stored in a Profile model
                return user
        except User.DoesNotExist:
            return None
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
