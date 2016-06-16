#Django Models as ERD's

Creating Django models can be confusing because so much is done for us without visual aids like the ERDs in MySQL Workbench. (Though later on we'll get to use something called an **Admin Portal** that will help us with this.)

To help ease us into the comfort of the using migrations to generate the Django Models, let's look at how we would approach a few different databases, and what the ERD would look like.

###Courses Application
![Courses](/mvc-courses.png "Courses")

What would our ERD look like?

We might have a `name` column that is a `CharField`, a `description` that is a `TextField`, and `created_at` and `updated_at` fields that are `DateField`'s:

![Courses DB](/mvc-courses-db.png "Courses DB")

Now how would we transfer this into a Django Model? We might write something like the following:

``` python
# Inside models.py
from django.db import models
class Courses(models.Model):
   name = models.CharField(max_length=255)
   description = models.TextField()
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)
```

Pretty straightforward. To reiterate: We created a `name` column and a `description` column, one with the Column_Type as a `CharField` and the other as a `TextField`. But notice how there aren't `ID`, `created_at` or `updated_at` columns... *Those get created by Django on our behalf.*


*Note: The following extension installation is advanced and not required*
>One cool extension is [Django Extensions](https://github.com/django-extensions/django-extensions), which you can `pip install` and add to your `settings.py` file, since it's a Django App itself.

Let's build the equivalent of the following ERD diagram in Django:
![Blog WireFrame](/blogs.png 'Wall')

Notice the `many_to_one` relationship; *one user can be associated with many posts*. Here's the equivalent Django code:

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
    updated_at = models.DateTimeField(auto_now = True)

class Post(models.Model):
    title = models.CharField(max_length=45)
    message = models.TextField(max_length=1000)
    # Notice the association made with ForeignKey for a one-to-many relationship
    user_id = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
```

**That `ForeignKey` statement is the equivalent of the one-to-many relationship shown in the ERD diagram.**

<iframe width="420" height="315" src="https://www.youtube.com/embed/UHR9-964YHQ" frameborder="0" allowfullscreen></iframe>
