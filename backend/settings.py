INSTALLED_APPS = [
    ...,
    'rest_framework',
]

AUTHENTICATION_BACKENDS = [
    'your_app_name.auth_backend.BatchIDBackend',
    'django.contrib.auth.backends.ModelBackend',
]
