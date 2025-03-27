from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView, RedirectView
from django.conf import settings
from . import sitemap_view

urlpatterns = [
    path('KarmaDorje/', admin.site.urls),
    path('', include('bookstore.urls')),
    path('user/', include('users.urls')),
    path('sitemap.xml', sitemap_view.sitemap, name="sitemap" ),
    path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type="text/plain") ),
    path('favicon.ico', RedirectView.as_view(url=settings.STATIC_URL + 'icons/favicon.ico')),
    path('yandex_a2643ee865a4f391.html',
         TemplateView.as_view(template_name="yandex_a2643ee865a4f391.html",
                              content_type="text/html")
        ),
    path('wmail_bd97ee7bd37103ac6450d1daa88a5b34.html',
         TemplateView.as_view(template_name="wmail_bd97ee7bd37103ac6450d1daa88a5b34.html",
                              content_type="text/html")
        )
]
