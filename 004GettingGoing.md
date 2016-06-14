# Ok So, let's do this Django thing!

We are going to start out with making our core project!

<iframe width="420" height="315" src="https://www.youtube.com/embed/loA4A525cpI" frameborder="0" allowfullscreen></iframe>




```
> source djangoEnv/bin/activate

or

> call djangoEnv/scripts/activate

Now navigate to a location to start your project
```

We are going to have to do a little bit of set-up work to get a django project up and running:

```
> django-admin startproject main
```

This is going to create a main project for us from which we are going to have to a few small set-up things before we can really get going!

We are now going to navigate into our main project and start our application (great number game as an example)

```
> cd main
> mkdir apps
> cd apps
> touch __init__.py
> python ../manage.py startapp first_app
```
That touch event, can be create that file through sublime/atom or however, touch is just the unixy command.  This __init__.py just let's Python know that this folder is viewable by python so other python modules can look in here!
<iframe width="420" height="315" src="https://www.youtube.com/embed/qxd74bPBv3o" frameborder="0" allowfullscreen></iframe>


This will create a new app in our apps folder <-- and after we get a few quick setup things going will be where we spend most of our time!



In settings.py we are going to have to add our application to the project.  We are going to add apps.first_app to our apps list

` main/settings.py `

``` python

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

BECOMES:

 INSTALLED_APPS = [
     'apps.first_app' ### added this line!
     'django.contrib.admin',
     'django.contrib.auth',
     'django.contrib.contenttypes',
     'django.contrib.sessions',
     'django.contrib.messages',
     'django.contrib.staticfiles',
 ]

```
***
Before this next step -> go to your main folder and run
```
> python manage.py runserver
```
and then go to localhost:8000
***

In main/urls.py we are going to tell it to get our routes from apps.first_app.urls, like this:

`urls.py`

``` python
from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
]
BECOMES:
from django.conf.urls import url,include
from django.contrib import admin

urlpatterns = [
    url(r'^', include('apps.first_app.urls'))
]

```

This set-up feels like a lot, but you are just about ready to run with Django now!

And the last thing left is to create that urls.py file in first_app.

Let's just create it and put a print statement in it!
`apps/first_app/urls.py`
```
print ("I will be your future routes, http requests will be captured by me")
```

***
If you run the server now -- it breaks-- but we will fix that right now!
***
