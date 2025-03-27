from django.http import HttpResponse
from django.utils.encoding import filepath_to_uri
from django.conf import settings
from os import listdir
from re import search

from bookstore.models import Book


def list_htmls(root_dir):
    if root_dir[-1] != '/': root_dir += '/';
    paths = listdir(settings.TEMPLATE_DIR + '/' + root_dir)
    r = []
    for p in paths:
        x = search(r'\.html?$', p)
        if x is not None: r.append(root_dir + p)
    return r


def collect_htmls(dirs):
    paths = []
    for dir in dirs:
        paths.extend( list_htmls(dir) )
    return paths


def hardcoded_urls():
    urls_dir = settings.BASE_DIR + '/bookstore/'
    paths = listdir( urls_dir )
    r = []
    for p in paths:
        x = search(r'^urls_.*\.py$', p)
        if x is not None:
            with open(urls_dir + p, "r", encoding="UTF-8") as f:
                for line in f:
                    x = search(r"path\s*\(\s*'(.*?/)'\s*,", line)
                    if x is not None: r.append(x.group(1))
    return r


def sitemap(request):

    # page_view_dirs
    book_list = Book.objects.filter(page_view="page-view")
    page_view_dirs = []
    for b in book_list:
        page_view_dirs.append(b.root_dir)
        
    paths = collect_htmls(page_view_dirs)
    # print("\n*** page-view paths count = ", len(paths))

    # other views
    paths.extend(hardcoded_urls())

    # print("*** total paths count = ", len(paths), "\n")

    changefreq = "weekly"
    host = 'https://' if request.is_secure() else 'http://'
    host += request.get_host() + "/"
    d = '<?xml version="1.0" encoding="UTF-8"?>\r\n'
    d += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\r\n'
    d += '<url><loc>' + host + '</loc><changefreq>' + changefreq + '</changefreq></url>\r\n'
    for p in paths:
        d += '<url><loc>' + host + filepath_to_uri(p) + '</loc><changefreq>' + changefreq + '</changefreq></url>\r\n'
    d += '</urlset>\r\n'

    return HttpResponse(d, content_type='text/xml')
