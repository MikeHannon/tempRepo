# Assignment: Login and Registration
Many websites have login and registration components.

Django makes this easy for us with its prebuilt `auth` model (sort of), but this is still a topic that we're going to postpone; the `auth` model is easy to use out of the box but a bit more challenging to modify for our own ends. So we're going to make our own for now.

We've learned how to integrate models, validations, and controllers to our projects. Our next goal is to create a fully functional login and registration app! This will combine your knowledge of MVC patterns, validations, and password encryption.

###Build the following:
![login_reg](/login-reg.png "login")

+ Show validation error messages if validations fail the following tests
  + First Name - Required; No fewer than 2 characters; letters only
  + Last Name - Required; No fewer than 2 characters; letters only
  + Email - Required; Valid Format
  + Password - Required; No fewer than 8 characters in length; matches Password Confirmation
+ Use `Bcrypt` to encrypt your users' passwords
+ **Bonus**: Birthday Field - Before today, or go creative and do it in an age range
+ **Bonus**: Implement [Flash Messages](https://docs.djangoproject.com/en/1.9/ref/contrib/messages/)
