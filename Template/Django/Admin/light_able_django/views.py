from django.http import request
from django.shortcuts import redirect, render
from django.views import View
from utils import themeVar
from django.contrib.auth.decorators import login_required


@login_required
def index1(request):
    greeting = themeVar["dashboard"]
    return render(request, "index.html", greeting)


@login_required
def index2(request):
    greeting = themeVar["dashboard"]
    return render(request, "index-2.html", greeting)
