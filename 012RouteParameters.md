# Route Parameters

We now have a general idea of how routing works! But what about passing variables through the route?

<iframe width="420" height="315" src="https://www.youtube.com/embed/NWyL-UCeC1U" frameborder="0" allowfullscreen></iframe>

As an exercise in parsing documentation, let's take a look [here](https://docs.djangoproject.com/en/1.9/topics/http/urls/).

Notice that 1.9?  That is (most likely) a variable that can be manipulated, so that we can look at the documentations for various versions of Django, but how do we catch a variable that is in a route like this?

With Flask we might have had something like this:
```python
@app.route('/en/<djangoversion>/topics/http/urls/')
  def showVersion(djangoversion):
  pass
```

In Django it's not that different, but it is a little bit (since we are using Regular Expressions and have separated concerns (meaning we've separated our Model, Views, Controller, and Routes portions of our Django app))


```python
# apps/appname/urls.py might look like this:
from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^/en/(?P<djangoversion>[0-9]\.[0-9])/topics/http/urls/$', views.index, name = "index")
]

```
This tells us that we will pass to our views.py file's index method a keyword argument of djangoversion that will match, exactly a number 0 through 9 then . then another number 0 through 9.  So our views might look something like this for that route:
```python
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request, djangoversion):
    print(djangoversion) # will result in a string e.g. "1.9"
    print("hello, I am your first request")
    return HttpResponse('hello')

```

One of the places that route parameters are very commonly is to pass identifying information to the database and let the user of the website know.  E.g. `localhost:8000/users/1` might let the site user that they are currently looking at user 1, of many!  


Oh and here's some stuff on static!

<iframe width="420" height="315" src="https://www.youtube.com/embed/dH-Xxclnv1g" frameborder="0" allowfullscreen></iframe>


Let's redo disappearing ninjas using Django thinking about these last two lessons: RouteParameters and Passing Variables.
