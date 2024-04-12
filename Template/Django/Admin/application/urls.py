from django.urls import path
from application.views import applicationView

urlpatterns = [
    path("<str:page>", applicationView, name="application"),
]
