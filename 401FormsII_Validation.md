# Now that we can create forms using prebuilt Django Methods - what else can we do with them?

It turns out that the form instances don't just generate HTML, they also validate the data that come back!

At this point, we are already Level: 2!  So we'll just work through a few things and then you can add forms to your views.py and templates (controllers and views) as you see fit!

Imagine we start with this form
```python
from django import forms

class RegisterForm(forms.Form):
    first_name = forms.CharField(max_length=45)
    last_name = forms.CharField(max_length=45)
    email = forms.EmailField()
    password = forms.CharField(max_length=100, widget=forms.PasswordInput)
    confirm_password = forms.CharField(max_length=100,widget=forms.PasswordInput)
```

In our view, let's say that we just got post data back from inputs into this form.

We can then make a call in out to our form in that controller.

views.py
```python
  def register(request):
    myform = RegistrationForm()
    # this is the method that is running in response to that form submission
    if request.methods == "POST":
      # here we bind our form to the request.POST info!
      myformbound = RegistrationForm(request.POST)
      print myformbound.is_valid() # this prints true or false based on the validations that were set!
      print myformbound.errors # this prints the errors in this form as a dictionary.
```

Now, if only we could connect a form to a model...oh right, we can!

```python
from django import forms
# assumes that we have a model!
from .models import User

class RegisterForm(forms.ModelForm):
  class Meta:
      model = User
      fields = '__all__'
```
The above code generates a RegisterForm for our User model!

https://docs.djangoproject.com/en/1.9/topics/forms/modelforms/#modelform

In the next assignment we are going to write some of our own model validations as well.  Here's a quick example of the setup:

In our app.models.py
```python
from django.core.exceptions import ValidationError
# our validator
def validateLengthGreaterThanTwo(value):
    if len(value)< 3:
        raise ValidationError(
            '{} must be longer than: 2'.format(value)
        )
class User(models.Model):
    first_name = models.CharField(max_length=45, validators = [validateLengthGreaterThanTwo])
    last_name = models.CharField(max_length=45, validators = [validateLengthGreaterThanTwo])
```

So if we had a from for our User class... (intentional ellipses)
