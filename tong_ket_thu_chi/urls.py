from django.urls import path
from . import views
app_name = "tong_ket_thu_chi"
urlpatterns = [
    path("", views.index, name = 'index'),
]