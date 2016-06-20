# One of the goals of Django is to let developers focus on development and less about setting things up.

At this point in our Django journey, we should be feeling pretty good about using the MVC architecture in our apps, and be able to start integrating multiple apps. That is: **The basics**.

Let's talk about forms.  For your reference here a Django Doc link:

https://docs.djangoproject.com/en/1.9/topics/forms/

But ignore that for now, let's just get started.

Forms basically auto-generate your html for your form for you, based on a variable's models.fieldType.  You can then pass an instance of this class (which is the HTML) to your views.py (controller) file and through context pass the form to your page!

So in brief:
- forms.py -> set form here (a new file)
- views.py -> include the class from forms.py and invoke it as a value in the context dictionary.
- templates -> access the context key with {{}}.

Here's some mostly functional (you'll have to adjust this for your specific app and routes) code - forms.py
```python
from django import forms

class RegisterForm(forms.Form):
    first_name = forms.CharField(max_length=45)
    last_name = forms.CharField(max_length=45)
    email = forms.EmailField()
    password = forms.CharField(max_length=100, widget=forms.PasswordInput)
    confirm_password = forms.CharField(max_length=100,widget=forms.PasswordInput)
```
That widget flag on the passwords... that thing just adjusts the default type of input field!  

Learn more? Search for django widgets!

In our views (controller) file

views.py

```python
from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from .forms import RegisterForm

def index(request):
  form = RegisterForm()
  context = {"regForm":form}
  return render(request("this_app.index.html", context))
```
In our index page!
index.html
```html
<body>
  <form class="" action="/register" method="post">
    {% csrf_token %}
    {{regForm.as_p}}
    <!--  as_p , as_table, as_ul are a few option-->
    <input type="submit" name="name" value="register">
  </form>
</body>
```

Pretty neat right?  Here's a quick (if you play it at 2x speed) video of doing this for a new project (just using things we've learned so far!)

Forms I

<iframe width="420" height="315" src="https://www.youtube.com/embed/xygziT5WOgg" frameborder="0" allowfullscreen></iframe>
