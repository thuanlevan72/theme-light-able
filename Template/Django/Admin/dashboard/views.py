from django.shortcuts import render
from django.views import View
from utils import themeVar
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def dashboardDefaultView(request):
    greeting = themeVar["dashboard"]
    return render(request, "dashboard/index.html", greeting)


@login_required
def dashboardView(request, page):
    greeting = themeVar[page]
    return render(request, "dashboard/" + page + ".html", greeting)
