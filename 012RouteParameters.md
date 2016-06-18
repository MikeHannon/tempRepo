# Route Parameters

We now have a general idea of how routing works! But what about passing variables through the route?

<iframe width="420" height="315" src="https://www.youtube.com/embed/NWyL-UCeC1U" frameborder="0" allowfullscreen></iframe>

As an exercise in parsing documentation, let's take a look [here](https://docs.djangoproject.com/en/1.9/topics/http/urls/).

Notice that 1.9 in the URL that we traveled to? That is (most likely) a variable that can be manipulated, so that we can look at the documentations for various versions of Django. How do we catch a variable that is in a route like this?

With Flask we might have had something like this:
```python
@app.route('/en/<djangoversion>/topics/http/urls/')
  def showVersion(djangoversion):
  pass
```

In Django it's not that different, but we do have to become a bit more familiar with regular expressions:


```python
# Inside apps/appname/urls.py might look like this:
from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^/en/(?P<djangoversion>[0-9]\.[0-9])/topics/http/urls/$', views.index)
]
```
This above pattern tells us that we will pass to our `views.py` file's `index` method a keyword argument of `djangoversion` that will match *exactly* a number 0 through 9, followed by `.`, and then another number 0 through 9. So our views might look something like this for that route pattern:

```python
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request, djangoversion):
    print(djangoversion) # will result in a string e.g. "1.9"
    print("hello, I am your first request")
    return HttpResponse('hello')
```

Route parameters are a very common strategy to pass identifying information from the browser to the database that the user can view in the URL. For example, `localhost:8000/users/1` would allow the site user to infer the he or she is currently looking at user 1 of potentially many!  

###Static content
Much like with Flask, Django will automatically hunt for and deliver static files as long as it's put in the right place. As you've probably guessed already, the right place in this case is a directory called `static` that lives alongside `templates`.

Just like with templates, it's the convention to place another directory inside static with the same name as your app. That's because we could potentially be accessing *multiple* apps from within our own.

Here's an example file structure for our Django project that focuses on the `static` files inside our `first_app`:

+ main
  + apps
    + first_app
      + migrations
      + static
        + css
          + **styles.css**
        + js
          + **main.js**
      + templates
        + first_app
          + **index.html**
      + urls.py
      + views.py
      + ...
  + main

Now, all we need to do to access static files (in this case, `main.js` and `styles.css` from template file `index.html` is to add the following to `index.html`:

```html
<!-- Inside apps/first_app/templates/first_app/index.html -->
{% load staticfiles %}
<link rel="stylesheet" href="{% static 'first_app/css/styles.css' %}">
<script src="{% static 'first_app/js/main.js' %}"></script>
```

<iframe width="420" height="315" src="https://www.youtube.com/embed/dH-Xxclnv1g" frameborder="0" allowfullscreen></iframe>

The next assignment (Disappearing Ninjas) will test your understanding of route parameters.
