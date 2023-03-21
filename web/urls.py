from django.contrib import admin
from django.urls import path
from . import views
app_name = "web"
urlpatterns = [
    path("",views.home,name="home"),
    path('sign_up',views.sign_up, name='sign_up'),
    path('sign_in',views.sign_in, name='sign_in'),
    path('meun',views.meun, name='meun'),
    path('tien_thu', views.tien_thu,name='tien_thu'),
    path('tien_chi',views.tien_chi, name='tien_chi'),
    path('tong_ket_thu_chi',views.tong_ket_thu_chi, name='tong_ket_thu_chi'),
    path('bieu_do_thu',views.bieu_do_thu, name='bieu_do_thu'),
    path('bieu_do_chi',views.bieu_do_chi, name='bieu_do_chi'),
    path('nang_cap_vip',views.nang_cap_vip, name='nang_cap_vip'),
]