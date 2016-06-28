# Integrating Forms for Authorization

Django admin has its own set of awesome forms and everything (as we might expect, it is a FULLY functional application, and at this point we'd package forms with our app -- right?)  

In the documentation below there are a list of cool prebuilt forms!
https://docs.djangoproject.com/en/1.9/topics/auth/default/#built-in-auth-forms

We'll just get started looking at two of them:
`UserCreationForm` <-- It creates users!
`AuthenticationForm` <-- It logs in users!


In our views.py we might want to generate something like this and render our views accordingly:

```python

from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
# Create your views here.

def login(request):
    form = AuthenticationForm(request.POST)
    form2 = UserCreationForm
    print form.is_valid()
    print form.errors
    return render(request, "testUser/index.html", {"form":form, "form2":form2()})

def register(request):
    form = AuthenticationForm
    form2 = UserCreationForm(request.POST)
    print form2.is_valid()
    print form2.errors
    return render(request, "testUser/index.html", {"form":form(), "form2":form2})

def index(request):
    form = AuthenticationForm
    form2 = UserCreationForm
    return render(request, "testUser/index.html", {"form":form(), "form2":form2()})

```

Basically we can grab our two pre-generated forms and print them out with validations and all!     
