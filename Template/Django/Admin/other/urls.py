from django.urls import path
from other.views import otherView

urlpatterns = [
    path("<str:page>", otherView, name="ohter"),
]
