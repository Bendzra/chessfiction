class AuthorBookConverter:
    # regex = r'(.+)/([^/\\\\]+?\.html?)'
    regex = r'(.+?)/(.+?)(?:\-(\d{4}))?/([^/\\\\]+?\.html?)'

    def to_python(self, value):
        return value

    def to_url(self, value):
        return value
