from django.shortcuts import render
from django.views import View
from utils import themeVar
from django.contrib.auth.decorators import login_required


@login_required
def chartView(request, page):
    greeting = themeVar[page]
    return render(request, "chart/" + page + ".html", greeting)
