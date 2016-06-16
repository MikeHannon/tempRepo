# Model Validations Intro
Django has some awesome prebuilt validations which we are going to use, as well as some different ways to custom validate.  We are going to start off with making validations a lot like we did in Flask (but with some tweaks, without using the prebuilt ones -- although we will mention them and use them too, shortly).

Here's a list of things we've told said that we will use "shortly" -- just so you all are aware that we haven't forgotten:
```python
# named routes e.g
url(r('^users', views.index, name="index"))
# the admin app
# the prebuilt auth model
# and now prebuilt model validations
# and I am going to add on class based views and forms to that list!
```

Back on track:  We are going to start off with the flask like validations instead of the prebuilt validations because prebuilt validations are super easy with django.forms  -- but we haven't gotten there yet!

Let's checkout a user model and then start making some validations for login and registration!

`In our apps.project.models.py`
```python
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
```

This User comes prebuilt with a property (objects) to reference the ORM, so that we can do things like User.objects.all(), but what if we wanted to do something like User.userManager.login(email, password) and return a response a lot like we did when we tried to go to a route '/login' in flask?

https://docs.djangoproject.com/en/1.9/topics/db/managers/

To do this we are going to have to make a new property for our User class, and have that property be a reference to our awesome manager for that we build!

We are going to tweak the above file:

```python
from __future__ import unicode_literals

from django.db import models
# our manager(s)!
class UserManager(models.Manager):
    def login(self, email, password):
        print ("login logic here!")
        print ("if successful login occurs pass back a tuple with (True, user))")
        print ("if not successful return a tuple with (False, 'Login unsuccessful')")
        pass

    def register(self, **kwargs):
        # yes I am going to force you guys to parse through some kwargs and pass
        # **kwargs (maybe the argument **request.POST)???
        print ("register login here")
        print ("if successful login occurs pass back a tuple with (True, user))")
        print ("if not successful return a tuple with (False, 'Login unsuccessful')")
        pass

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # this is new too!
    userManager = UserManager()
```

Now in our (controller) views.py we can use User.userManager.login and .register!
Maybe something like this:

```python
from django.shortcuts import render, HttpResponse, redirect
from .models import User

def index(request):
    print("hello, I am your first request")
    User.userManager.login("speros@codingdojo.com","Speros")
    return HttpResponse('hello')

```

<iframe width="420" height="315" src="https://www.youtube.com/embed/ShtXYurK_rA" frameborder="0" allowfullscreen></iframe>

#### Note - hopefully you are noticing that we are sending you to the primary literature a bit more and more in this second chapter?  This is an important skill to learn, even though its tedious - figuring out all that documentation!
