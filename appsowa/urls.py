from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pages/myworks.html', views.myworks, name='myworks'),
]