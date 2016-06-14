# Routing and Controllers!



<iframe width="420" height="315" src="https://www.youtube.com/embed/6wDux8ueSIA" frameborder="0" allowfullscreen></iframe>

As discussed in the big picture tab, once an HTTP request is made, the routing file (urls.py) decides which controller and controller methods run.

In a django app that interaction looks like: urls.py (the routes file) --> views.py (the controller file)

For two files to communicate in Python, we have to do some importing!   Yay OOP and Python modules.

<iframe width="420" height="315" src="https://www.youtube.com/embed/hdDa35ATofo" frameborder="0" allowfullscreen></iframe>

As we mentioned before -- we are going to be doing most all of our work in our first_app app (or whatever app we've currently added to our main/settings.py file)

<iframe width="420" height="315" src="https://www.youtube.com/embed/hdDa35ATofo" frameborder="0" allowfullscreen></iframe>
Here's an example of our
`first_app/urls.py`
``` python
WAS:
print ("I will be your future routes, http requests will be captured by me")
NOW:
from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name = "index")
]
```
Breaking this down:
`from django.conf.urls import url` -- this gives us access to the variable url.
`from . import views` -- this gives us access to views file!
The `url(r'^$', views.index, name = 'index')` line is very similar in functionality to the `@app.route` + method in flask.  The r after the ( identifies the following string to match as a regular expression pattern.  So in this case it will match an empty string, exactly.  (So if you were to go to localhost:8000/) <-- then Django (after removing the '/' automatically for us) will try to see if anything matches - and guess what! "" matches the regex pattern of r('^$') and runs the views.index method.  We will get into named urls in a bit here, but not yet!  One thing to note, is that unlike a flask route where there is an http method(e.g. "GET" and or "POST"), Django doesn't care --  we (the developer) figure that out in the method (try printing `request.method`) when you hit the same route using "GET" or "POST".

```python
from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    print("hello, I am your first request")
    return HttpResponse('hello')
```
