from django.urls import path
from dashboard.views import dashboardDefaultView, dashboardView

urlpatterns = [
    path("", dashboardDefaultView, name="dashboard"),
    path("<str:page>", dashboardView, name="dashboard"),
]
