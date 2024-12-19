import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

INSTALLED_APPS = [
    ...,
    'rest_framework',
]

AUTHENTICATION_BACKENDS = [
    'your_app_name.auth_backend.BatchIDBackend',
    'django.contrib.auth.backends.ModelBackend',
]
