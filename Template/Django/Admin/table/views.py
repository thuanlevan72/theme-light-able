from django.shortcuts import render
from django.views import View
from utils import themeVar
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def tablesView(request, page):
    greeting = themeVar[page]
    return render(request, "table/" + page + ".html", greeting)
