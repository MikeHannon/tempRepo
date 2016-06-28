# Extending the prebuilt user model.
Extending the user model can be a valuable tool to improve user interface.  We've spent a ton of time working on login and registration through this Django section.  It's a great way to really dig into Django and surprisingly we aren't quite done yet!  Almost though...  We'll touch on extending the prebuilt User model in this next section, and then in Level 4 we'll extend an abstract base class to make a fully customized User model as well as third party integration.

Extending the prebuilt user model can be fairly smooth.  It takes a few steps though:

1) We are going to use a one to one model to attach to the django.contrib.auth.models User.  Ok... that's pretty much it...

https://docs.djangoproject.com/en/1.9/topics/auth/customizing/

Create a registration form that includes a date of birth field and administration level using a model that extends the default model.  Validate these fields such that the user must be at least 15 years old.  (Maybe you are making a Driver's ed. site and have some of those awful videos of drunk drivers, so you both want to make sure that the people using your site are of age where they could benefit from you program AND keep kids who are too young from seeing too much gore).  And the other validation is to make sure that the administration level is between 1 and 10.
