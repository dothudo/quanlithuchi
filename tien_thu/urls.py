from django.urls import path
from . import views
app_name = "tien_thu"
urlpatterns = [
    path("", views.index, name = 'index'),
]