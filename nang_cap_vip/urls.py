from django.urls import path
from . import views
app_name = "nang_cap_vip"
urlpatterns = [
    path("", views.index, name = 'index'),
]