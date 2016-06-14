#Form Data
As you've already seen, getting information from a user via forms is an extremely important part of web development. When we were using Flask, we used the `form` property of the `request` object to access input values.

Django behaves very similarly, except the property is `request.POST` if the method that hits the route is a post and `request.GET` if the method that hits the route is a get.

<iframe width="420" height="315" src="https://www.youtube.com/embed/KRanyK02uO8" frameborder="0" allowfullscreen></iframe>

###Key Terms
+ `request.POST`
  + Data from POST request
+ `request.GET`
  + Data from GET request
+ `request.method`
  + Returns the method/HTTP verb associated with the request
+ `{% csrf_token %}`
  + Prevents cross-site request forgery (place it in a form on the html side of your project)

###Session
Now let's set up to use session!

In our terminal, head to the directory where `manage.py` resides and run the following commands:

```bash
# Need to be in same directory as manage.py file
> python manage.py makemigrations
> python manage.py migrate
```

Excellent. Not only does that annoying warning you've been suffering disappear, but now `session` is now available to us (as seen in that last line: `Applying sessions.0001_initial... OK`).

Now we can restart our server and use session:

```python
request.session # It's a dictionary, so you can attach key/value pairs
```

*Errata note: In the video we (I, MH) say `session` behaves the same as it does in Flask. This is not true! Session in Django gets saved even if you leave the browser!*

<iframe width="420" height="315" src="https://www.youtube.com/embed/8ZTVGCoEyFs" frameborder="0" allowfullscreen></iframe>

###Useful session methods:

+ `request.session['key']`
  + This will retrieve (get) the value stored in `key`
+ `request.session['key'] = 'value'`
  + Set the value that will be stored by `key`
+ `del request.session['key']`
  + Deletes a session key if it exists, throws a `keyError` if it doesn't. Use along with `try` and `except` since it's better to ask for forgiveness than permission
+ `'key' in request.session`
  + Returns a `boolean` of whether a `key` is in `session` or not
