#Routing and Controllers

The following video reviews steps from previous tabs.

<iframe width="420" height="315" src="https://www.youtube.com/embed/hdDa35ATofo" frameborder="0" allowfullscreen></iframe>

As discussed in the [Big Picture](003Big_Picture.md) tab, once an HTTP request is made, the routing file (`urls.py`) decides which controller/method runs.

Instead of just printing text from inside `apps/first_app/urls.py`, let's change the contents to something similar to the code that lives in `main/urls.py`:

```py
#  From inside apps/first_app/urls.py
from django.conf.urls import url

def method_to_run(request):
    print "Whatever route that was hit by an HTTP request (by the wayt) decided to invoke me!"
    print "By the way, here's the request object that Django automatically passes us:", request
    print "By the by, we still aren't delivering anything to the browser, so you should see 'ValueError at /'"

urlpatterns = [
    url(r'^$', method_to_run)
]
```

Technically, the above code isn't a **method** (it's not attached to an object). But we want it to be, and we want it to live in another file. (We know that for files to communiate in Python, we use `import`.)

<iframe width="420" height="315" src="https://www.youtube.com/embed/hdDa35ATofo" frameborder="0" allowfullscreen></iframe>

Here's an example of the `first_app/urls.py` file that's now modularized (meaning the function/method we invoke from routes no longer lives in `urls.py`).

``` python
#  From inside apps/first_app/urls.py
from django.conf.urls import url
from . import views # This line is new!
urlpatterns = [
  url(r'^$', views.index, name = "index") # This line has changed!
]
```

Let's break our `urls.py` file down:

+ `from django.conf.urls import url`
  + This gives us access to the variable `url` (which points to a function)
+ `from . import views`
  + This gives us access to everything in a `views.py` file that Django automatically created for us when we built our `first_app`
+ `url(r'^$', views.index, name = 'index')`
  + Uses the `url` method in a way that's very similar to the `@app.route` method in `flask`. The `r` after the `(` identifies the following string to match as a *regular expression* pattern.
  + In this case, it will exactly match an empty string. That means if you were to go to `localhost:8000/`, Django (after removing the `'/'` automatically) will check if anything matches.
  + In this case it does! An empty string is what `r'^$'` looks for. Since the pattern matches, we run the `views.index` method.
  + That leaves `name = 'index'` as the only thing we haven't yet discussed. At this point *don't worry about this piece* -- we will get into **named urls** in a bit.
+ Note that, unlike a `flask` route where there is an HTTP method (e.g. "GET" and/or "POST"), Django doesn't care. We (the developer) figure that out in the method by accessing `request.method` in our function.

Let's build an `index` method inside `apps/first_app/views.py`:

```python
#  Inside apps/first_app/views.py
from django.shortcuts import render, HttpResponse
# While Django will automatically create the request object for us that's passed into our method, HttpResponse objects are our responsibility to create and return to the browser.
#  Note that 'render' is a shortcut method that combines a given template with a given context dictionary and returns an HttpResponse object with that rendered text.

# Create your views here.
def index(request):
  response = "Hello, I am your first request!"
  return HttpResponse(response)
  # Not using render because we haven't created any templates yet!
```

###MVC Overview
This video walks through the process to render a template (which belong in a `templates` directory).

<iframe width="420" height="315" src="https://www.youtube.com/embed/6wDux8ueSIA" frameborder="0" allowfullscreen></iframe>
