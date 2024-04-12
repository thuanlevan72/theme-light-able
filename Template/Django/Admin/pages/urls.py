from django.urls import path
from pages.views import pagesView

urlpatterns = [
    path("<str:page>", pagesView, name="pages"),
]
