# Login and Registration Round 1:

Let's start with our login using the prebuilt Django Auth model.

When we made our own validation for login, how we did it was basically retrieve a user based on the unique identifier (email) and then check the hashed password versus the password that was already in the database.  If this was successful, then we told our controller to set the proper session variables and off we went!  

Well... Django's auth model does the same thing - in your views.py:

```python
from django.contrib.auth import authenticate, login
```
The authenticate method: Pass it username and password as parameters:

```python
 testuser=authenticate(username=request.POST['username'], password='request.POST['password']')
```

and it return a user object(if there is one) that matches those parameters.

To clarify: it returns either a user object or none... So you can make an conditional logic statement based on this (e.g. if ...)

The login function takes a user object, extracts the id and sets a request variable named request.user (this is set in session).

```python
from django.contrib.auth import login
def doStuff(request):
  ... code that works ...
  login(request,testuser)
  print request.user.first_name
```

One of the neat things is that user is usable as an element on the templates with request prefixing it.


What about registering a new login?

```python
def register(request):
    form = AuthenticationForm
    form2 = UserCreationForm(request.POST)
    print form2.is_valid()
    if form2.is_valid():
      user = form2.save(commit=False) # commit = False creates a new user object that isn't yet in the database.
      user.save() # if we didn't have anything else we needed to do with the user.

    print form2.errors
    return render(request, "testUser/index.html", {"form":form(), "form2":form2})

```
Not only that, but we can extend our creation form if you wanted to, just like we extended the models.Manager and other classes before now!  Yay OOP.
(in our `forms.py`)
```python

from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserCreateForm(UserCreationForm):
    email = forms.EmailField(required=True)
    # you can set extra validations here to prevent is_valid from succeeding f you don't want it to.
    first_name = forms.CharField(max_length=30,required=True)
    last_name = forms.CharField(max_length=30,required=True)

    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")

    def save(self, commit=True):
        user = super(UserCreateForm, self).save(commit=False)
        # let's say we wanted to make our data all caps, we could do that here!
        user.email = self.cleaned_data["email"]
        user.first_name = self.cleaned_data["first_name"]
        user.last_name = self.cleaned_data["last_name"]
        if commit:
            user.save()
        return user

```

Search for cleaned_data in the documentation below to understand what is going on here:
https://docs.djangoproject.com/en/1.9/topics/forms/
