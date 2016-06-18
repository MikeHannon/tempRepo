#Named Routes

**Named routes** make referencing your Django app's routes pretty easy. All we name to do is pass a keyword variable (`name`) to the `url` method we use inside our app's `urls.py` file. For example:

```python
# Inside your app's urls.py file
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

Now we can more easily reference those routes from inside our app's templates:

*NOTE*: `target/` in the examples below is what gets caught by our main project's `urls.py`

```html
<!-- Inside your app's index.html file -->
<a href="/target/this_app/new"></a>
<!-- is the equivalent of:  -->
<a href="{% url 'my_new' %}"></a>

<!-- This form's action attribute -->
<form class="" action="/target/this_app/5/delete" method="post">
  <input type="submit" value="Submit">
</form>

<!-- is the equivalent of: -->
<form class="" action="{%url 'my_delete', id=5 %}" method="post">
  <input type="submit" value="Submit">
</form>
```

Notice that in our form, the argument being passed will replace the named variable in the URL -- pretty nifty. Thanks Django!

This is going to allow us to properly route things... but what about `redirect`s from our `views.py` file? For that we need to pull in some added Django capability:

```python
# Inside your app's views.py file
from django.core.urlresolvers import reverse
```
That gives us access to the `reverse` method, which we can use like so:

```python
# Still inside your app's views.py file
from django.shortcuts import render, HttpResponse, redirect
from django.core.urlresolvers import reverse

# Create your views here.

# Example of an old index method:
def index(request):
    print("hello, I am your first request")
    return redirect('/target/this_app/new')  

# Can be transformed to the following:
def index(request):
    print("hello, I am your first request")
    return redirect(reverse('my_new'))  
```

By this point, you've already completed a few Django assignments. Go back and refactor your code to take advantage of **named routes.**
