from django.urls import path
from django.contrib.auth import views as auth_views
from users import views as user_views

urlpatterns = [
    path('', user_views.inform_user, name="user-inform"),
    path('register/', user_views.register_user, name="user-register"),
    # path('login/', auth_views.LoginView.as_view(template_name='users/login.htm'), {"base":"donate"}, name="user-login"),
    # path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.htm'), {"base":"donate"}, name="user-logout"),
    path('login/', user_views.login_user, name="user-login"),
    path('logout/', user_views.logout_user, name="user-logout"),
]
