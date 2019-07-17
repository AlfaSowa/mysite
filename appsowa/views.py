from django.shortcuts import render

def index(request):
    return render(request, 'index.html', {})

def myworks(request):
    return render(request, 'pages/myworks.html', {})