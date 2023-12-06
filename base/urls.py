from django.urls import path
from . views import *
from base import views


urlpatterns = [
    path('',views.index_page, name="index"),
    path('contact/', Contact.as_view(), name='home')
]
