# Let's do this Django thing!

We are going to start out with making our core project!

<iframe width="420" height="315" src="https://www.youtube.com/embed/loA4A525cpI" frameborder="0" allowfullscreen></iframe>


```bash
> source djangoEnv/bin/activate
# or
> call djangoEnv/scripts/activate
```

Now navigate to a location to start your project. We need to do a little set-up work to get our Django project up and running:

```bash
> django-admin startproject main
```

This is going to create a main project for us, from which we're going to have to a few small set-up things before we can really get going:

```bash
# Navigate into the main directory that you just created. At this point you could run "python manage.py runserver" and take a look at what your development server delivers to the browser.
> cd main
# Make a new apps directory
> mkdir apps
# Navigate into apps
> cd apps
# Create an __init__.py file. This just let's Python know that this folder is viewable by Python so that other Python modules can look in here and access the code!
> touch __init__.py
# Notice that when you started a project a manage.py file was automatically created. That file can be run with terminal commands passed in. Let's do that from within the apps directory to start a new app.
> python ../manage.py startapp first_app
```

<iframe width="420" height="315" src="https://www.youtube.com/embed/qxd74bPBv3o" frameborder="0" allowfullscreen></iframe>


You've created a new app in our `apps` folder -- let's hook it up!

In `settings.py` (which lives inside the `main` directory alongside `apps`) we are going to have to add our application to the project. That means adding `apps.first_app` to our `INSTALLED_APPS` list:

``` python
# Inside main/settings.py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# BECOMES:

 INSTALLED_APPS = [
     'apps.first_app', ### added this line!
     'django.contrib.admin',
     'django.contrib.auth',
     'django.contrib.contenttypes',
     'django.contrib.sessions',
     'django.contrib.messages',
     'django.contrib.staticfiles',
 ]

```
Go to your `main` folder and run `python manage.py runserver` from the terminal. Then proceed to `localhost:8000`. (You should see a simple page congratulating you on a Django-powered page but reminding you that work is still left to be done...)

Now turn to `main/urls.py` in your text editor and tell it to get the routes from our `first_app`:

The file should look like this when first opened:

``` python
# Inside main/urls.py
from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
]
```
Update to the following:
```python
from django.conf.urls import url, include # Notice we added include
from django.contrib import admin

urlpatterns = [
    url(r'^', include('apps.first_app.urls')) # And now we use include to pull in our first_app.urls...
]
```

This set-up feels like a lot, but you're just about ready to kick things up a notch!

One of the the last thing left is to *create* that `urls.py` file in `first_app`.

```python
# Now from within your newly created apps/first_app/urls.py file...
print "I will be your future routes; HTTP requests will be captured by me."
```

If you run the server now and refresh your browser you'll get an `ImproperlyConfigured at /` error. Let's fix that by adding some routes!
