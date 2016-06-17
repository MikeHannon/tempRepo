#The Object Relational Mapper (ORM)

Django **models** come pre-equipped to communicate with your **views** via a method called `objects`. `objects` is an instance of the Django ORM class that does our DB communication -- OOP is everywhere! Let's break that down.

Let's start with our `models.py` file (just the `User` class) from earlier.

```python
# Inside models.py
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

Now let's take a look at our `views.py` file (and in the back of our minds know that this is the **controller** piece of MVC architecture).

*Be aware*:
> The following code will work great the first time you hit a route that calls the `index` function. But if you refresh the page, it crashes! Why? Follow the clues and alter the code below so it no longer breaks the server.

```python
# Inside your app's views.py file
from django.shortcuts import render, HttpResponse
# Pull the User class into the file
from .models import User

def index(request):
    print(User.objects.all())
    # A list of objects (or an empty list)
    User.objects.create(first_name="mike",last_name="mike",password="1234asdf")
    # Creates a user object
    print(User.objects.all())
    # A list of objects (or an empty list)
    u = User.objects.get(id=1)
    print(u.first_name)
    u.first_name = "Joey"
    u.save()
    j = User.objects.get(id=1)
    print(j.first_name)
    # Gets the user with an id of 1, changes name and saves to DB, then retrieves again...
    print(User.objects.get(first_name="mike"))
    # Gets the user with a first_name of 'mike' *** THIS MIGHT NEED TO BE CHANGED ***
    users = User.objects.raw("SELECT * from my_app_name_user")
    # Uses raw SQL query to grab all users (equivalent to User.objects.all()), which we iterate through below
    for user in users:
      print user.first_name
    return HttpResponse("ok")
```

Know that this line:
```python
print(User.objects.raw("SELECT * from my_app_name_user"))
```

Relies on the fact that Django builds our database's tables according to a particular format (`app_name` + `_` + `lowercase_model_name`). If you're ever making a `raw` query and aren't sure what the table name is, you can always find it by `print`ing the following: `User._meta.db_table`

###Setting up the ORM
Check out Django's [documentation for making queries](https://docs.djangoproject.com/en/1.9/topics/db/queries/).
<iframe width="420" height="315" src="https://www.youtube.com/embed/tOC4y-2FBcI" frameborder="0" allowfullscreen></iframe>

###Playing around with ORM
<iframe width="420" height="315" src="https://www.youtube.com/embed/sC6tZzYNQyI" frameborder="0" allowfullscreen></iframe>

All of the above methods go to the model and run a preset query from the model as defined by the ORM. *We intentionally left some info out about how to use the ORM.*

To become a self-sufficient developer, you need to get comfortable searching through the documentation and other resources. No pain (at least 20 minutes worth...), no gain!

###Foreign Key Relationships in ORM
<iframe width="420" height="315" src="https://www.youtube.com/embed/Fh7IVu15Ie4" frameborder="0" allowfullscreen></iframe>
