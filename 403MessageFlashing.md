# Django and Flash Messages
In our level 3 experience so far we've figured out how to generate forms and set up our models.

Just to recap from the last assignment - If we have a bound form:

```python
from .forms import myForm

def index(request):
  if request.method = "POST":
    showForm = myForm(request.POST)
    print showForm.errors
    return render(request, ".... path to file")
```

Django auto-generates our forms, can test whether the data are valid, and even, if we were to reload the page, passing our bound form can even show us those errors!  Pretty awesome!

What about custom flash messages though?  We can't let Django do all the work for us, right?

Many of you figured out how to do custom messages in the Login and Registration assignment of Level 2.  Let's take a quick look at generating custom message flashing:

https://docs.djangoproject.com/en/1.9/ref/contrib/messages/

Let's take a dictionary (maybe errors) and turn it into some messages in our views and then show the template that might render those messages!

views.py
```python
from django.contrib import messages
... (other normal stuff)

def makeMessages(request):
  errors = {
  "error1": "First error",
  "error2": "Second error",
  "error3": "Third error"
  }
  for key,error in errors.iteritems():
    # The messages object has a number of tags (including error)
    messages.error(request, error)
    # above we add to the error tags
    # the message object will be held until the next rendering event, so you can redirect, just now instead of rendering.
  return render(request, "showErrors.html")
```

showErrors.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
  {% if messages %}
    <ul class="messages">
        {% for message in messages %}
        <li>{{ message }}</li>
        {% endfor %}
    </ul>
  {% endif %}

  </body>
</html>
```

You can additionally add queries on the different tags, or even set extra_tags if you want custom tags (say for login and registration)
