# Django's Take on MVC... is *MTV*...

Yep, that's right. Django deviates a bit from the typical MVC naming structure.

Do worry too much about the reason -- it'll become more clear as you move through the material. But Django emphasizes the use of *individual apps*, each of which have their own MVC structure. Since MVC's generally describe a whole web project, and Django has further modularized this (although each Django app can be its own site!), they renamed the different pieces.

![Alt text](/django_MVC.jpg)

In Flask, we've been combining everything into one large (potentially monster) file. Using a Model-View-Controller architecture means splitting up different concerns. In general, routes are defined in their own file, usually called `routes.py` or `urls.py`. These get hit by a browser's HTTP request and and define the correct controller method to run.

``` python
# A Flask example of a route leading to a particular function
@app.route('/', methods = ['GET', 'POST'])
# This would be found in one file that POINTS to a method in the controller e.g.
def index():
  # A lot of stuff could happen here! So although it doesn't look complicated now... it can become a mess!
  return render_template('index.html')
```

In Django, a route file might look a bit likes this:
``` python
# This code lives in a urls.py file in your app
from django.conf.urls import url
from . import views
# this urlpatterns list is the key, and Django uses regular expressions to match routes!
# r'^$' -- is the equivalent of '/'. Django is smart and knows that all routes need '/'
urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    # So our root route ('/') is directing our app to a method called index in our views.py files...
]
```

We are already separating concerns! Nice, right?

Much like in Flask, the pages that are going to be rendered are found in the `templates` folder. In general, and as weird as this sounds, we actually put a secondary folder inside the `templates` folder with the name of our app! Putting our pages that get rendered inside a secondary folder helps us organize our code as we use/build more and more apps. (We'll do this after we master making a single app, using an MVC strategy).

So far you've caught a glimpse of how Django separates routing from the controller method that should run. In an MVC (or, to use Django parlance, an MTV) structure, controller methods generally:

+ Redirect to other routes
+ Render specific templates
+ Invoke methods attached to other pieces of of our app that we characterize as *models*

Models will feel the most foreign, so we are going to talk about them a bit later.
