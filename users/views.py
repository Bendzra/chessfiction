from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from .forms import UserRegisterForm


def inform_user(request):
    context = {}
    return render(request, 'users/info.htm', context)


def register_user(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
        #     form.save()
            username = form.cleaned_data.get("username")
            messages.success(request, f'{username}, к сожалению, регистрация на сайте в данный момент отключена.')
            return redirect('user-login')
    else:
        form = UserRegisterForm()
    context = {
        'form': form,
        'base': 'donate',
    }
    return render(request, 'users/register.htm', context)


def login_user(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request, username=cd['username'], password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    messages.info(request, 'Привет! Вход выполнен успешно!')
                    return redirect('books-home')
                else:
                    messages.info(request, 'Пользователь недействителен.')
            else:
                messages.info(request, 'Данные указаны неверно: проверьте имя пользователя или пароль.')
    else:
        form = AuthenticationForm()
    context = {
        'form': form,
        'base': 'donate',
    }
    return render(request, 'users/login.htm', context)


def logout_user(request):
    logout(request)
    context = {'base':'donate',}
    return render(request, 'users/logout.htm', context)


