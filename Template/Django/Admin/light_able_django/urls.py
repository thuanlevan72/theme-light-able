from django.contrib import admin
from django.urls import path, include
from light_able_django.views import index1, index2
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path("admin/", admin.site.urls),
    # Preview
    path("", index1, name="dashboard"),
    path("index2", index2, name="index2"),
    # Dashboards
    path("dashboard/", include("dashboard.urls")),
    # Layouts
    path("demo/", include("demo.urls")),
    path("ui-kit/", include("ui_kit.urls")),
    path("widget/", include("widget.urls")),
    path("elements/", include("elements.urls")),
    path("forms/", include("forms.urls")),
    path("table/", include("table.urls")),
    path("chart/", include("chart.urls")),
    path("application/", include("application.urls")),
    path("pages/", include("pages.urls")),
    path("other/", include("other.urls")),
    # all auth
    path("accounts/", include("allauth.urls")),
    path("accounts/", include("allauth.socialaccount.urls")),
]
