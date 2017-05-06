#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Fellipe Pinheiro'
AUTHOR_EMAIL = u'pinheiro.llip@gmail.com'
SITENAME = u"DeLeTe's blog"
SITEURL = u'http://delete.github.io/'
FAVICON = SITEURL + u'images/favicon.png'
SITELOGO = SITEURL + u'images/profile.jpg'

PATH = 'content'

TIMEZONE = 'America/Sao_Paulo'

DEFAULT_LANG = u'pt'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
# LINKS = (('Python.org', 'http://python.org/'),
#         ('Jinja2', 'http://jinja.pocoo.org/'),)

# Menu
MENUITEMS = (('Archives', '/archives.html'),
             ('Categories', '/categories.html'),
             ('Tags', '/tags.html'),)

MAIN_MENU = True

# Social widget
SOCIAL = (('twitter', 'https://twitter.com/pinheirofellipe'),
          ('github', 'https://github.com/delete'),
          ('google', 'https://plus.google.com/+fellipepinheiro'),)

DEFAULT_PAGINATION = 10

THEME = 'theme'

PLUGIN_PATHS = [
    'pelican-plugins'
]

PLUGINS = [
    'gravatar'
]

STATIC_PATHS = ['images', 'extras/CNAME']

EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'}, }
# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
