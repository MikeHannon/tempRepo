# Form Data
As you have seen, getting information from a user via forms is an extremely important part of web development. When we were using Flask, we used the form property in the request object to access the values associated with inputs.

Django behaves very similarly, except the property is `request.POST` if the method that hits the route is a post and `request.GET` if the method that hits the route is a get!

<iframe width="420" height="315" src="https://www.youtube.com/embed/KRanyK02uO8" frameborder="0" allowfullscreen></iframe>

key terms!
```python
request.POST # data from a post
{% csrf_token %} # prevents cross-site request forgery (place it in a form on the html side of your project)
request.GET # data from a get
request.method # stores the http method that was sent by the requester, e.g. get, post, put, patch or delete.  (we've just used get and post so far!)
```

Now let's set up to use session!

Going to our terminal and our project where manage.py resides:
Run these commands!

```
> python manage.py makemigrations
> python manage.py migrate
```

Excellent - now that annoying warning will disappear, but ALSO session is now available to us! As seen with that last line!

`Applying sessions.0001_initial... OK`

Now we can restart our server and use session!
### NOTE:  In the video we (I, MH) say session behaves the same as it does in Flask.  This is not true!  Session in Django gets saved even if you leave the browser!

`request.session` <-- it is dictionary-like, so pass it keys!

<iframe width="420" height="315" src="https://www.youtube.com/embed/8ZTVGCoEyFs" frameborder="0" allowfullscreen></iframe>

Some useful session methods:
```python
request.session['key'] #-- this will retrieve (get) the value stored in key.
request.session['key'] = 'value' #-- this will set the value that will be stored by key.  
del request.session['key'] #-- Deletes a key if it exists, throws a keyError if they key does not exist.  Try and except since it is better to ask for forgiveness then ask for permission in Python (in general)
'key' in request.session #-- Returns a boolean of whether a key is in the session or not.
```
