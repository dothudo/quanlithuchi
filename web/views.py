from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,"web/home.html")
def sign_in(request):
    return render(request,"web/sign_in.html")
def sign_up(request):
    return render(request,"web/sign_up.html")
def meun(request):
    return render(request,"web/meun.html")
def tien_thu(request):
    return render(request,"web/tien_thu.html")
def tien_chi(request):
    return render(request,"web/tien_chi.html")
def tong_ket_thu_chi(request):
    return render(request,"web/tong_ket_thu_chi.html")
def bieu_do_thu(request):
    return render(request,"web/bieu_do_thu.html")
def bieu_do_chi(request):
    return render(request,"web/bieu_do_chi.html")
def nang_cap_vip(request):
    return render(request,"web/nang_cap_vip.html")

