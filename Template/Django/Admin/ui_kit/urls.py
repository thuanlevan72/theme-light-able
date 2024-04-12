from django.urls import path
from ui_kit.views import uiView

urlpatterns = [
    path("<str:page>", uiView, name="ui_kit"),
]
