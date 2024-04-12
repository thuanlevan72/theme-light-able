from django.contrib.messages import constants as messages
import os
from pathlib import Path
import environ

# Initialise environment variables
env = environ.Env()
environ.Env.read_env()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-kbz9gt&-bq!4b4epq29#ghe_a59an=v24250iy-v38eq=-zy@4"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend",
]

MESSAGE_TAGS = {
    messages.DEBUG: "alert-info",
    messages.INFO: "alert-info",
    messages.SUCCESS: "alert-success",
    messages.WARNING: "alert-warning",
    messages.ERROR: "alert-danger",
}

# Application definition
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "dashboard",
    "demo",
    "ui_kit",
    "widget",
    "elements",
    "forms",
    "table",
    "chart",
    "application",
    "pages",
    "other",
    # Crispy Forms
    "crispy_forms",
    "crispy_bootstrap5",
    # All Auth
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    # Google Providers
    "allauth.socialaccount.providers.google",
    "allauth.socialaccount.providers.github",
]

CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
CRISPY_TEMPLATE_PACK = "bootstrap5"

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    # Add the account middleware:
    "allauth.account.middleware.AccountMiddleware",
]

ROOT_URLCONF = "light_able_django.urls"

CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
CRISPY_TEMPLATE_PACK = "bootstrap5"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "light_able_django.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = "/static/"
STATICFILES_DIRS = [os.path.join(BASE_DIR, "public/assets")]
STATIC_ROOT = os.path.join(BASE_DIR, "static")

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

ACCOUNT_FORMS = {
    "login": "light_able_django.forms.UserLoginForm",
    "signup": "light_able_django.forms.UserRegistrationForm",
    "change_password": "light_able_django.forms.PasswordChangeForm",
    "set_password": "light_able_django.forms.PasswordSetForm",
    "reset_password": "light_able_django.forms.PasswordResetForm",
    "reset_password_from_key": "light_able_django.forms.PasswordResetKeyForm",
}

SOCIALACCOUNT_QUERY_EMAIL = True

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = env("EMAIL_HOST")
EMAIL_PORT = env("EMAIL_PORT")
EMAIL_USE_TLS = True
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")


ACCOUNT_AUTHENTICATION_METHOD = "email"
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_SESSION_REMEMBER = True
ACCOUNT_LOGOUT_ON_GET = True
ACCOUNT_LOGOUT_ON_PASSWORD_CHANGE = True
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_EMAIL_VERIFICATION = "optional"


# ACCOUNT_SIGNUP_REDIRECT_URL = "account_logout"
LOGIN_REDIRECT_URL = "/"
LOGOUT_REDIRECT_URL = "/"
ACCOUNT_LOGOUT_REDIRECT = "account_login"
ACCOUNT_SIGNUP_REDIRECT_URL = "account_login"

SITE_ID = 2

SOCIALACCOUNT_PROVIDERS = {
    "google": {
        "APP": {
            "client_id": env("SOCIAL_AUTH_GOOGLE_OAUTH2_CLIENT_ID"),
            "secret": env("SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET"),
            "key": "",
        },
        "SCOPE": [
            "profile",
            "email",
        ],
        "AUTH_PARAMS": {
            "access_type": "online",
            "redirect_uri": "http://127.0.0.1:8000/accounts/google/login/callback/",
        },
    },
    "github": {
        "APP": {
            "client_id": env("SOCIAL_AUTH_GITHUB_CLIENT_ID"),
            "secret": env("SOCIAL_AUTH_GITHUB_SECRET"),
            "key": "",
        },
        "SCOPE": [
            "user",
            "repo",
            "read:org",
        ],
        "AUTH_PARAMS": {
            "access_type": "online",
            "redirect_uri": "http://127.0.0.1:8000/accounts/github/login/callback/",
        },
    },
}
