from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test),
    # path('test/', views.Test.test)
    path('run/', views.run),
]