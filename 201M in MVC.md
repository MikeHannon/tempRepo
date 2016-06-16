# Models in the MVC Structure

Models in the MVC architecture play are the workhorses of data manipulation.  They control which data are released to the controllers and and what format!  Because of this, the phrase `skinny controllers and fat models` is often used.

This is a good basic design starting point: just like when we call list.reverse() to reverse a list in Python, we don't care what went on in the background so long as it did what we wanted it to do!  The same principle can be applied to the controller/model relationship.  We want our controllers to call what appear to be simple, clearly named methods from our models that enter and return data in an organized way.  This way if another colleague wanted to use one of these model methods, they could do so easily.  (This shouldn't be an excuse to write ugly, overly verbose, unreadable code in your models, but a call to move much of the data logic to the model and return predictable outcomes).

We are going to dive into Django Models from the database side, although they can be used for other types of data manipulation as well.    


In Flask we created our database using mysql-workbench and then we made our validations occur based on the route we hit, e.g. maybe when we went to ('/register') we then checked all of the request.form elements for registration to see if they were valid or not!  In many frameworks (Express (with Mongoose), Rails, and Django) the models file does two things: 1) Provides information on what the SQL table has in it, and 2) provides a location to do those validations.

<iframe width="420" height="315" src="https://www.youtube.com/embed/y0OR3KGy7Uw" frameborder="0" allowfullscreen></iframe>

Here's an example of this in Django (something that could be found in a app/first_app/models.py for example):

```python
from __future__ import unicode_literals
from django.db import models
# Our Super Basic Model.
class People(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```
![People](people.png "People")
This constructs an ERD diagram (see image) AND adds some a basic validation of a max_length.  But it doesn't actually do the equivalent of forward engineer just yet!

To do the equivalent of forward engineer we are going to run a couple of commands from the command line.
```terminal
> python manage.py makemigrations
> python manage.py migrate
```

The first command says: "Let's look and see if there have been any changes to the models files in our apps".

The second command says: Forward engineer those into our database!

For development we are going to be using SQLite - a prepackaged SQL database that has much of the functionality of mySQL (but not all of it) and is stored as local memory.

For deployment we are going to be using postGRES a SQL database that has some added functionality, making it a bit more heavy weight, but a solid deployment option.  (Alternatively, with some fiddling you can also deploy a mySQL database -- which is a little bit faster than postGRES).
