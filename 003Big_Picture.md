# Django's Take on MVC, is MTV...

Yep, that's right, they changed some of the names from the typical naming structure.

The reason for this will be more clear in a week. But Django emphasizes the use of individual apps, each of which have their own MVC structure.  Since MVC's generally describe a whole web project, and Django has further modularized this (although each Django app can be its own site!)  They renamed the different pieces.   

![Alt text](/django_MVC.jpg)

In Flask we've been combining everything into one large (potentially monster) file.  The Model View Controller architecture splits up different concerns.  In general -- routes are defined in their own file, usually routes.py or urls.py.  These tell which method in the controller to run.
``` python
@app.route('/', methods = ['GET', 'POST'])
# this would be found in one file that POINTS to a method in the controller e.g.
def index():
  # A lot of stuff could happen here! So although it doesn't look complicated now... it can become a mess!
  return render_template('index.html')
```

In Django a route file might look a bit likes this:
##### (in a urls.py file in your app)
``` python
from django.conf.urls import url
from . import views
# this urlpatterns chunk is the key - Django uses regular expressions to match routes! r'^$' -- is the equivalent of '/' <-- Django is smart and knows that all routes need '/'!
urlpatterns = [
    url(r'^$', views.index, name = 'index'),
]
# that courses index <-- well that is the method that can be found in the views.py file!
```

We are already separating concerns!  Nice, right?

Much like in Flask, the pages that are going to be rendered are found in the templates folder.  In general, as weird as this sounds we actually put a secondary folder inside the templates folder with the name of our app!  In the diagram above, notice how each app has the same thing... putting our pages that get rendered inside a secondary folder helps us organize our code if we are using many apps!  (We'll do this after we master making a single app, using an MVC strategy).

The models will feel the most foreign, so we are going to talk about them a bit later.

Let's get going some more!
