from django.urls import path, register_converter

from . import converters, views
from . import urls_linder_first_russian_masters
from . import urls_maroczy_morphy
from . import urls_spielmann_sac

register_converter(converters.AuthorBookConverter, 'abc')

urlpatterns = [
    path('', views.home, name='books-home'),
    path('thanks/', views.thanks, name='books-thanks'),
    path('donate/', views.donate, name='books-donate'),
    path('<abc:htm>', views.page, name='page-view'),
] + \
    urls_spielmann_sac.urlpatterns + \
    urls_maroczy_morphy.urlpatterns + \
    urls_linder_first_russian_masters.urlpatterns
