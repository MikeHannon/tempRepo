# Multiple Apps!
Raise your hand if rewritting an awesome module that you've already written 10 times is annoying, wouldn't it be great to just copy that code into your project as whole app and reference it?

You can!!! its quite easy (but only if you use named routes (and you can get even more specific with namespaces))!

The description of this can be found here:

https://docs.djangoproject.com/en/1.9/topics/http/urls/ (towards the bottom of the screen)


Let's say we wanted to have a single project with all of our awesome mini-apps we've built so far, then we need some way to access them.

In our main project urls.py instead of this:

```python
urlpatterns = [
  url(r(r'^', include('apps.current_project')))
]
```

You'd have this!

```python
urlpatterns = [
    url(r'^', include('apps.first_app.urls')),
    url(r'^time-display/', include('apps.time_display.urls')),
    url(r'^rand_word/', include('apps.random_word.urls')),
    url(r'^ninjas/', include('apps.disappearing_ninja.urls')),
    url(r'^ninja-gold/', include('apps.ninja_gold.urls')),
    url(r'^courses/', include('apps.courses.urls'))
]
```

Things to note: all of the routes except the first one have a match with '/' at the end.

To go to that project initially you'd have to type in to localhost:8000/ninjas/  and that would send over an empty string to ninjas and maybe load all of your ninjas!

### LET"S NOT FORGET TO ADD ALL OF THESE apps to your settings.py file for this project and put them in the apps folder!

The last thing to note: you can pull in an app and use a model from that app in another app!

Let's awesome I added a mh_user app which is my fully customized login and registration, in my quotes app I could go into my model(or anywhere in my project for that matter and add)

```python
from apps.mh_user.models import User
```
This name became accessible to use when we added it to our main projects settings.py file!
`apps.mh_user.models`
