#Forms
One of the goals of Django is to let developers focus on development rather than setup.

At this point in our Django journey, we should be feeling pretty good about using the MVC architecture in our apps, as well as starting to integrate multiple apps.

Now let's talk about forms (here's the [documentation](https://docs.djangoproject.com/en/1.9/topics/forms/) for reference).

Django forms will basically auto-generate your HTML for your form for you, based on a variable's `models.fieldType`. You can then pass an instance of this class (which is the HTML) to your `views.py` file and, through your context variable, pass the form to your templates!

In brief:

+ `forms.py` is a new file that we will use to set our forms
+ `views.py` will import the new class from `forms.py`, and invoke it as a value in the `context` dictionary
+ Any **template** that's passed the value from `views.py` can access the value via `{{}}`

For example:

> Inside a newly created `forms.py` file in your app

```python
# Inside your app's forms.py file
from django import forms

class RegisterForm(forms.Form):
    first_name = forms.CharField(max_length=45)
    last_name = forms.CharField(max_length=45)
    email = forms.EmailField()
    password = forms.CharField(max_length=100, widget=forms.PasswordInput)
    confirm_password = forms.CharField(max_length=100,widget=forms.PasswordInput)
```

That `widget` flag on the `password`s? It adjusts the default type of input field! There are plenty of widgets out there that you can search for.

Now, in our controller:

```python
# Inside your app's views.py
from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from .forms import RegisterForm

def index(request):
  form = RegisterForm()
  context = { "regForm": form }
  return render(request, "this_app.index.html", context)
```

And finally, in our template:

```html
<!-- Inside templates/this_app/index.html -->
<body>
  <form class="" action="/register" method="post">
    {% csrf_token %}
    {{regForm.as_p}}
    <!--  ".as_p" is an example of an option you can attach to the form inputs
    "as_table" and "as_ul" are a few others...-->
    <input type="submit" name="name" value="register">
  </form>
</body>
```

Pretty neat, right? Here's a quick (if you play it at 2x speed...) video of doing this for a new project.

<iframe width="420" height="315" src="https://www.youtube.com/embed/xygziT5WOgg" frameborder="0" allowfullscreen></iframe>
