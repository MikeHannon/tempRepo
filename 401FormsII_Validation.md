#Form Validation

We can create forms using prebuilt Django methods. Now let's validate them!

Just a reminder that this is already Level II content, meaning you have more than enough in your tool belt to pass the belt exam. These topics are for you to integrate as you see fit.

Imagine we create the following form:

```python
# Inside your apps forms.py file
from django import forms

class RegisterForm(forms.Form):
    first_name = forms.CharField(max_length=45)
    last_name = forms.CharField(max_length=45)
    email = forms.EmailField()
    password = forms.CharField(max_length=100, widget=forms.PasswordInput)
    confirm_password = forms.CharField(max_length=100,widget=forms.PasswordInput)
```

Now let's imagine a user submitted information into this form that we rendered to the browser (see the previous section if you're unclear on how to do this).

Our `views.py` file now gets hit with the HTTP request and `POST` data, which our `urls.py` directs to the `register` function.

Now the cool part: We can instantiate a form and test the data we received against our validations!

```python
# Inside your app's views.py file
# This is the method that is running in response to that form submission
  def register(request):
    # First instantiate a form based on the class we created in forms.py
    myform = RegistrationForm()

    # Next confirm that the HTTP verb was a POST
    if request.methods == "POST":
      # Bind the POST data to an instance of our RegisterForm
      bound_form = RegistrationForm(request.POST)
      # Now test that bound_form using built-in methods!
      # *************************
      print bound_form.is_valid() # True or False, based on the validations that were set!
      print bound_form.errors # Any errors in this form as a dictionary
      # *************************
```

We can *really* streamline things by connecting the form to a model!

```python
# inside your app's forms.py file
from django import forms

# assumes that we have a model!
from .models import User
# ****************************

class RegisterForm(forms.ModelForm):
  class Meta:
      model = User
      fields = '__all__'
```
The above code generates a `RegisterForm` for our `User` model!


Here's the [documentation](https://docs.djangoproject.com/en/1.9/topics/forms/modelforms/#modelform) to review.

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
