## Django Models as ERD's

Django model creations can be confusing as so much is done for us with the lack of visuals that showcase these schemas in a readable format. (At least not till we get to the Admin Portal later on in the platform.) To help ease us into the comfort of the using migrations to generate the Django Models lets look at how we would approach a few different databases and what the ERD would look like.

Lets look at this app:

![Courses](/mvc-courses.png "Courses")

What would our ERD look like?
We might have a name column that is a CharField, a Description that is a TextField and a created_at and updated at.

![Courses DB](/mvc-courses-db.png "Courses DB")

Now how would we transfer this into a Django Model? We might write something like the following:

``` python

from django.db import models
class Courses(models.Model):
   name = models.CharField(max_length=255)
   description = models.TextField()
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)

```

That is pretty straight forward. We created a name column and a description column, one with the Column_Type as a CharField and the other as a TextField. Notice how theres not an ID column or created_at or updated_at as those get created on our behalf.

One cool extension is
https://github.com/django-extensions/django-extensions

(its a Django App itself - so to use it you have to add it to settings after you install it!)

Its not a necessity, but I am going to use it at the end of the video to show the ERD diagram that we generate!

We are going to build the following ERD diagram in Django:
![Blog WireFrame](/blogs.png 'Wall')

Notice the many_to_one relationship (posts are had by many users?).  Here is the equivalent django code!
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

class Post(models.Model):
    title = models.CharField(max_length=45)
    message = models.TextField(max_length=1000)
    user_id = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
```

That ForeignKey statement is the equivalent of the many_to_one relationship shown in the ERD diagram!

<iframe width="420" height="315" src="https://www.youtube.com/embed/UHR9-964YHQ" frameborder="0" allowfullscreen></iframe>
