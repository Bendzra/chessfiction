from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=64)
    eng = models.CharField(max_length=64, default="chess")

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Series(models.Model):
    name = models.CharField(max_length=128, unique=True)
    litres_url = models.URLField(max_length=256, null=True, blank=True, unique=True)

    class Meta:
        verbose_name_plural = 'Series'

    def __str__(self):
        return self.name


class Author(models.Model):
    first_name = models.CharField(max_length=64, null=True, blank=True)
    second_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=64, null=True, blank=True)
    about = models.TextField(max_length=1024, null=True, blank=True)
    litres_url = models.URLField(max_length=256, null=True, blank=True, unique=True)
    
    def __str__(self):
        return '{0} {1} {2}'.format(self.last_name, self.first_name, self.second_name)


class Book(models.Model):
    LANGS = (
        ('ru', 'ru'),
        ('en', 'en'),
    )

    authors = models.ManyToManyField(Author, blank=True)
    title = models.CharField(max_length=128, null=True, blank=True)
    year = models.SlugField(max_length=16, null=True, blank=True)
    categories = models.ManyToManyField(Category, blank=True)
    root_dir = models.CharField(max_length=256, null=True, blank=True, unique=True) # templates folder
    slug = models.SlugField(max_length=64, null=True, blank=True, unique=True)      # images folder
    page_view = models.SlugField(max_length=64, null=True, blank=True)              # page-view to use
    restricted = models.BooleanField(default=False)                                 # authorized reading
    language = models.SlugField(max_length=8, null=True, blank=True, default="ru", choices=LANGS)
    litres_url = models.URLField(max_length=256, null=True, blank=True)
    series = models.ForeignKey(Series, on_delete=models.CASCADE, null=True, blank=True)
    annotation = models.TextField(max_length=1024, null=True, blank=True)
    description = models.TextField(max_length=1024, null=True, blank=True)

    def __str__(self):
        return self.title


class Page(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=256, null=True, blank=True)
    template = models.CharField(max_length=256, null=True, blank=True)
    path = models.CharField(max_length=256, null=True, blank=True)
    
    def __str__(self):
        return self.template
