from django.urls import path
from elements.views import elementsView

urlpatterns = [
    path("<str:page>", elementsView, name="elements"),
]
