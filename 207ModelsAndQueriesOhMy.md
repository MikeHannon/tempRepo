# The Object Relational Mapper

Models come pre-equipped to communicate with your controller through a method called objects (which is a n instance of the Django ORM class that does our DB communication).  That's a bit confounding.  But let's break it down!

Let's start with our models.py file (just the users) from a few assignments ago!

```python
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)s
```

And then let's take a look at our controller and checkout a few statements.
```python
from django.shortcuts import render, HttpResponse
from .models import User

def index(request):
    print(User.objects.all()) # a list of objects (or an empty list)
    User.objects.create(first_name="mike",last_name="mike",password="1234asdf")
    # creates a user object
    print(User.objects.all())
    # a list of objects (or an empty list)
    u = User.objects.get(id=1)
    print(u.first_name)
    u.first_name = "Joey"
    u.save()
    j = User.objects.get(id=1)
    print(j.first_name)
    # gets the User with an id of 1
    print(User.objects.get(first_name="mike"))
    # gets the users with a first_name of mike
    print(User.objects.raw("SELECT * from User"))
    # gets a list of all the objects in User (equivalent to User.objects.all())
    return HttpResponse("ok")

```
The references to that Class (User) property objects is actually a reference to the ORM! 

Setting up the ORM
<iframe width="420" height="315" src="https://www.youtube.com/embed/tOC4y-2FBcI" frameborder="0" allowfullscreen></iframe>
https://docs.djangoproject.com/en/1.9/topics/db/queries/
Playing around with ORM
<iframe width="420" height="315" src="https://www.youtube.com/embed/sC6tZzYNQyI" frameborder="0" allowfullscreen></iframe>
All of the above methods go to the model, run a preset query from the model, as defined by the ORM.  We intentionally left some info out about how to use the ORM.  One thing about becoming "self sufficient" is the pain of searching - but not too long!! remember 20 minutes!
A quick Video on Foreign Key Relationships in ORM
<iframe width="420" height="315" src="https://www.youtube.com/embed/Fh7IVu15Ie4" frameborder="0" allowfullscreen></iframe>
Fantastic!!! You can do so much awesome stuff with the ORM.  
