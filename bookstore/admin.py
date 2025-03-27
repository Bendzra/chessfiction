from django.contrib import admin
from . import models


class CategoryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Category._meta.fields]
    list_filter = ["name"]
    search_fields = [field.name for field in models.Category._meta.fields]

    class Meta:
        model = models.Category


class SeriesAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Series._meta.fields]
    list_filter = ["name"]
    search_fields = [field.name for field in models.Series._meta.fields]

    class Meta:
        model = models.Series


class AuthorAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Author._meta.fields]
    list_filter = ["last_name"]
    search_fields = [field.name for field in models.Author._meta.fields]

    class Meta:
        model = models.Author


class BookAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Book._meta.fields]
    list_filter = ["title"]
    search_fields = [field.name for field in models.Book._meta.fields]

    class Meta:
        model = models.Book


class PageAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Page._meta.fields]
    list_filter = ["template"]
    search_fields = [field.name for field in models.Page._meta.fields]

    class Meta:
        model = models.Page

admin.site.register(models.Category, CategoryAdmin)
admin.site.register(models.Series, SeriesAdmin)
admin.site.register(models.Author, AuthorAdmin)
admin.site.register(models.Book, BookAdmin)
admin.site.register(models.Page, PageAdmin)
