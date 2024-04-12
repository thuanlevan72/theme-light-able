from django.urls import path
from table.views import tablesView

urlpatterns = [
    path("<str:page>", tablesView, name="tables"),
]
