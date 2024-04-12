from django.shortcuts import render
from django.views import View
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def widgetView(request, page):
    greeting = {}
    greeting["heading"] = "Widget | Light Able Dashboards"
    greeting["pageview"] = "Dashboards"
    greeting["breadcrumb_item"] = "Widget"
    greeting["breadcrumb_item_active"] = page.capitalize()
    greeting["pc_dark_layout"] = "default"
    return render(request, "widget/" + page + ".html", greeting)
