from django.urls import path
from widget.views import widgetView

urlpatterns = [
    path("<str:page>", widgetView, name="widget"),
]
