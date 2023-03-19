"""quanlithuchi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path("background/", include("background.urls")),
    path("sign_in/", include("sign_in.urls")),
    path("sign_up/", include("sign_up.urls")),
    path("Meun/", include("Meun.urls")),
    path("tien_thu/", include("tien_thu.urls")),
    path("tien_chi/", include("tien_chi.urls")),
    path("tong_ket_thu_chi/", include("tong_ket_thu_chi.urls")),
    path("bieu_do_thu/", include("bieu_do_thu.urls")),
    path("bieu_do_chi/", include("bieu_do_chi.urls")),
    path("nang_cap_vip/", include("nang_cap_vip.urls")),
    path("", include("background.urls")),
]