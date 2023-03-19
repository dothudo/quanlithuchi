from django.urls import path
from . import views
app_name = "bieu_do_thu"
urlpatterns = [
    path("", views.index, name = 'index'),
]