from django.shortcuts import render
from django.views import View
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def uiView(request, page):
    greeting = {}
    greeting["heading"] = "Live Preview | Light Able Dashboards"
    greeting["pageview"] = "Dashboards"
    greeting["breadcrumb_item"] = "Ui Kit"
    greeting["breadcrumb_item_active"] = page.capitalize()
    greeting["pc_dark_layout"] = "default"
    return render(request, "ui-kit/" + page + ".html", greeting)
