# The Auth Model

We've used the Django Auth model a little bit already, but now we are going to dig into and integrate it into our projects.  We've used it when we've created our superuser, now let's use it for normal user authorization!

Hopefully at this point we are starting to feel how Django might make our development lives easier.

https://docs.djangoproject.com/en/1.9/topics/auth/

Since we haven't done too much to our initial installation (in terms of which apps we are including or not including) we should be ready to use the auth model now!

Think of django.contrib.auth as an app that we are just going to include in our project, much like an app that we built would be included.  So if we want to use a model from one of our apps, we might do something like this:

```python
from ..apps.myOtherApp.models import Blogs, Posts
```

To use Django's prebuilt model for Users in our (controller) views.py, we'd just add this line in our views:

```python
from django.contrib.auth.models import User
```

That model is a bit complex and has its own custom manager, but the primary fields in it are:
```python
username, password, email, first_name, last_name
```

And it is just a model like any other one that we've built, but has a bunch of extra methods that would be tedious to build out ourselves, and these allows improved integration with other aspects of Django.  Eventually we will be playing around and using an abstracted layer to build our own advanced User class that integrates like this prebuilt one.  

Here's a quick video setting it up!

<iframe width="420" height="315" src="https://www.youtube.com/embed/vHQuVgxo8Lw" frameborder="0" allowfullscreen></iframe>
