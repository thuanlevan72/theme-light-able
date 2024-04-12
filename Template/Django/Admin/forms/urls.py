from django.urls import path
from forms.views import formsView

urlpatterns = [
    path("<str:page>", formsView, name="forms"),
]
