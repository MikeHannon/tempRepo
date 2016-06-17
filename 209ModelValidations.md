#Model Validations Intro
Django has some awesome prebuilt validations, which we are going to use along with some custom validations we'll write ourselves.

We'll start off by making validations a lot like we did in `Flask` (with a few tweaks) so that we're not relying solely on prebuilt methods.

Here's one potential routing structure you can use before we layer on prebuilt models and validations:

```python
# Inside your app's urls.py file
url(r('^users', views.index, name="index"))
```

###Flask-Style Validations

Let's start-off with writing the sort of validations that you're already used to:

First let's make a `User` model.

```python
# Inside your app's models.py file
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

This `User` comes prebuilt with a property (`objects`) to reference the ORM so that we can do things like `User.objects.all()`. But what if we wanted to do something like `User.userManager.login(email, password)` and `return` a response a lot like we did when we tried to go to a route '`/login'` in Flask?

It's time to act like a developer and peruse some [documentation](https://docs.djangoproject.com/en/1.9/topics/db/managers/).

Done? Great! Hopefully you caught the bit about **custom managers** being a strategy to add extra methods to our model classes.

To do this we are going to have to make a new property for our `User` class and have that property be a reference to our awesome manager for that we build! (Remember, this awesome manager is just another class that we're going to instantiate and link to `User` -- thanks OOP!)

Let's call that new class `UserManager` and add it to our previous code.

```python
# Inside your app's models.py file
from __future__ import unicode_literals
from django.db import models
#Our new manager!
class UserManager(models.Manager):
    def login(self, email, password):
        print "Running a login function!"
        print "If successful login occurs, pass back a tuple with (True, user))"
        print "If unsuccessful, return a tuple with (False, 'Login unsuccessful')"
        pass

    def register(self, **kwargs):
        # What the heck is this **kwargs business? That's for you to find out...
        print ("Register a user here")
        print ("If successful pass back a tuple with (True, user))")
        print ("If unsuccessful return a tuple with (False, 'Registration unsuccessful')")
        pass


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    # *************************
    # Connect an instance of UserManager to our User model!
    userManager = UserManager()
    # *************************
```

###Alert: You've just updated your model file.
What should you do now?

...a couple of terminal commands later...

Now in our `views.py` file, we can use `User.userManager.login` and `.register`:

```python
# Inside your app's views.py file
from django.shortcuts import render, HttpResponse, redirect
from .models import User

def index(request):
    print("Running index method, calling out to User.")
    User.userManager.login("speros@codingdojo.com","Speros")
    return HttpResponse("Done running userManager method. Check your terminal console.")
```

Feel free to play around with the `userManager` methods -- any change you make to that class *does not* need to be migrated since it's not a database table.

<iframe width="420" height="315" src="https://www.youtube.com/embed/ShtXYurK_rA" frameborder="0" allowfullscreen></iframe>

####Documentation Note:
You (hopefully) have noticed that we're sending you to the primary literature more frequently. This is intentional and important: an essential skill to hone is the ability to parse official documentation.
