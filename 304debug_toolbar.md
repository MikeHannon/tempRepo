#debug_toolbar

Debug toolbar provides a convenient way to look under the hood of your Django application. This toolbar, once installed, provides some detailed information about your application which can be super useful when troubleshooting and debugging your Django application.

Let's install the tool bar and start checking out the information it provides!

### Installation
The reccomended way to install Debug Toolbar is via pip:

```bash
$ pip install django-debug-toolbar
```

Add `'debug_toolbar'` to your `INSTALLED_APPS in your settings.py folder.

```python
INSTALLED_APPS = (
    ...
    'django.contrib.staticfiles',
    'debug_toolbar',
    ...
)   
```

Start up you Django app and you should see a little tab sticking out in your browser labeled `DjDT`, click on that and check out your cool new debugging toolbar.

### Documentation!

Read more about debug toolbar here:
```text
http://django-debug-toolbar.readthedocs.io/en/1.4/index.html
https://github.com/django-debug-toolbar/django-debug-toolbar
```
