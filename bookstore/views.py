from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.core.paginator import Paginator
from django.conf import settings
from os import listdir
from .models import Book, Category
import re


def isNaN(num):
    return num != num


def home(request):

    book_list = Book.objects.all()
    if not request.user.is_authenticated:
        book_list = book_list.exclude(restricted=True, language='en')
    
    category_list = Category.objects.all()

    categories_get = ""
    categories_checked = []
    if request.method == "GET" and 'category' in request.GET:
        categories_checked = request.GET.getlist('category')
        if categories_checked:
            categories_get = '&category=' + '&category='.join(categories_checked)
            categories_checked = list(map(int, categories_checked))
            book_list = Book.objects.filter(categories__in=categories_checked).distinct()

    q_get = ""
    q_query = ''
    if request.method == "GET" and 'q' in request.GET:
        Q = request.GET['q'].strip().split()
        words = []
        for w in Q:
            w = re.sub(r"\W+", "", w)
            if w: words.append(w)

        if words:
            q_get = '&q=' + '+'.join(words)
            q_query = ' '.join(words)
            L = \
                book_list.filter(title__icontains=words[0]) | \
                book_list.filter(annotation__icontains=words[0]) | \
                book_list.filter(description__icontains=words[0]) | \
                book_list.filter(year__icontains=words[0]) | \
                book_list.filter(series__name__icontains=words[0]) | \
                book_list.filter(authors__last_name__icontains=words[0]) | \
                book_list.filter(authors__first_name__icontains=words[0]) | \
                book_list.filter(authors__second_name__icontains=words[0])
            L = L.distinct()
            for i in range(1, len(words)):
                T = \
                    book_list.filter(title__icontains=words[i]) | \
                    book_list.filter(annotation__icontains=words[i]) | \
                    book_list.filter(description__icontains=words[i]) | \
                    book_list.filter(year__icontains=words[i]) | \
                    book_list.filter(series__name__icontains=words[i]) | \
                    book_list.filter(authors__last_name__icontains=words[i]) | \
                    book_list.filter(authors__first_name__icontains=words[i]) | \
                    book_list.filter(authors__second_name__icontains=words[i])
                L = L | T.distinct()
                L = L.distinct()
            book_list = L

    author_get = ""
    if request.method == "GET" and 'author' in request.GET:
        a = request.GET['author']
        if not isNaN(a):
            author_get = "&author=" + str(a)
            book_list = Book.objects.filter(authors__id=a)

    series_get = ""
    if request.method == "GET" and 'series' in request.GET:
        s = request.GET['series']
        if not isNaN(s):
            author_get = "&series=" + str(s)
            book_list = Book.objects.filter(series__id=s)

    book_list = book_list.order_by('-id')

    paginator = Paginator(book_list, 28) # Show 28 books per page.
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'page_obj': page_obj,
        'category_list': category_list,
        'categories_checked': categories_checked,
        'categories_get': categories_get,
        'q_get': q_get,
        'q_query': q_query,
        'author_get': author_get,
        'series_get': series_get,
        'title': "Книги",
        'base': "books-root",
        'prev': "",
        'home': "",
        'next': ""
    }
    return render(request, "home.htm", context)


def thanks(request):
    context = {
        'title': "Спасибо",
        'base': "Спасибо!",
        'prev': "",
        'home': "",
        'next': ""
    }
    return render(request, "thanks.htm", context)


def donate(request):
    context = {
        'title': "Расщедриться",
        'base': "donate",
        'prev': "",
        'home': "",
        'next': ""
    }
    return render(request, "donate.htm", context)


def page(request, htm):
    template_name = htm
    regex = r'^(.+?)/([^/\\\\]+?\.html?)$'
    t = re.search(regex, template_name)
    book_dir = t.group(1)
    page_htm = t.group(2)
    book = Book.objects.get(root_dir=book_dir)

    if book_dir[-1] != '/': book_dir += '/';
    paths = listdir(settings.TEMPLATE_DIR + '/' + book_dir)
    htmls = []
    for p in paths:
        x = re.search(r'\.html?$', p)
        if x is not None: htmls.append(p)
    htmls.sort()
    idx = htmls.index(page_htm)
    
    context = {
        'base': "page",
        'title': template_name,
        'book': book,
        'prev': "" if len(htmls) == 0 else book_dir + htmls[idx - 1],
        'home': "" if len(htmls) == 0 else book_dir + htmls[-1],
        'next': "" if len(htmls) == 0 else book_dir + htmls[(idx + 1) % len(htmls)],
    }
    if book.restricted and not request.user.is_authenticated:
        return redirect('user-inform')

    return render(request, template_name, context)
