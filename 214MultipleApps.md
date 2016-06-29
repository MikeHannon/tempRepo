#Multiple Apps
Raise your hand if re-writing code that you've already written stinks.

Thought so. One of the exceptional things about Django is the ability to reference apps that you've already written. This is what people are referring to when they say how nice and `modular` the Django framework is.

That's what we're about to do! (Just remember this works only if you use the **named routes** strategy that we talked about earlier. You can even be more specific with **namespaces**, which we haven't yet talked about, but, since you're on your way to becoming a professional developer, you won't mind a little [documentation](https://docs.djangoproject.com/en/1.9/topics/http/urls/ ) to learn about it.)


Let's say we wanted to have a single project containing *all* of the awesome mini-apps that we've built so far.

First we need to add the relevant apps to your `settings.py` file (and potentially put them in your `apps` folder). *Plenty of people forget this step when they're first starting out!*

Next we need some way to direct HTTP requests from the browser to the correct routing file:

>This is what our main `urls.py` file has looked like up till now

```python
# Inside your main project's urls.py file
urlpatterns = [
  url(r(r'^', include('apps.current_project')))
]
```

> But there's nothing stopping us from transforming our main `urls.py` to something like this:

```python
urlpatterns = [
    url(r'^', include('apps.first_app.urls')),
    url(r'^time-display/', include('apps.time_display.urls')),
    url(r'^rand-word/', include('apps.random_word.urls')),
    url(r'^ninjas/', include('apps.disappearing_ninja.urls')),
    url(r'^ninja-gold/', include('apps.ninja_gold.urls')),
    url(r'^courses/', include('apps.courses.urls'))
]
```

*Some things to note*: **All** of the routes, except the first one, have a match with `'/'` at the end of the pattern.

That means that by traveling to `localhost:8000/ninjas/`, our `disappearing_ninja` app's `urls.py` file would take over (receiving an empty string) and potentially load all of your ninjas!

One last thing to note: You can pull in an app and use a model from that app in another app! This is extremely cool.

Let's say I added a `mh_user` app, which is my fully customized login and registration, to my project. In my `quotes` app, I could go into my model (or anywhere in my project for that matter) and add:

```python
# From inside one of your app's models.py file
from '''Relative Path to mh_users's models.py file''' import User
```
This relative path is often ..**nameofapp**.models.  The .. says go up one folder from where you are currently sitting.

(`User` is accessible because we added it to our main project's `settings.py` file. Told you that step was important!)
