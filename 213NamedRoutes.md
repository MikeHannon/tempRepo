# Named routes - Finally!

Named routes make referencing django app routes easy!  Let's take a look at a few examples:

` Our apps urls.py file `
```python
from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.toindex, name = 'my_index'),
    url(r'^this_app/new$', views.new, name = 'my_new'),
    url(r'^this_app/(?P<id>[0-9]+)/edit$', views.edit, name = 'my_edit'),
    url(r'^this_app/(?P<id>[0-9]+)/delete$', views.delete, name = 'my_delete'),
    url(r'^this_app/(?P<id>[0-9]+)$', views.show, name = 'my_show'),
]
```

` our_apps/templates/our_app/index.html`
(just the body tag) NOTE: target/ is what gets caught by our main project's urls.py
```html
<a href="/target/this_app/new"></a>
<!-- is the equivalent of:  -->
<a href="{% url 'my_new' %}"></a>

<form class="" action="/target/this_app/5/delete" method="post">
<input type="submit" value="Submit">
</form>

<!-- is the equivalent of: -->
<form class="" action="{%url 'my_delete', id=5 %}" method="post">
<input type="submit" value="Submit">
</form>

```

NOTE the argument being passed will replace the named variable in the URL - so cool right?

This is going to allow us to properly route things all the time... but what about redirects you might ask???

What if we wanted to do this in our views we need to grab this:
```python
from django.core.urlresolvers import reverse
```
so our views.py might look like this!

`Our apps views.py`
```python
from django.shortcuts import render, HttpResponse, redirect
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    print("hello, I am your first request")
    return redirect('/target/this_app/new')  
# The Above Becomes:
def index(request):
    print("hello, I am your first request")
    return redirect(reverse('my_new'))  
```
