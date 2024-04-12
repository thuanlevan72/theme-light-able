from django.urls import path
from chart.views import chartView

urlpatterns = [
    path("<str:page>", chartView, name="chart"),
]
