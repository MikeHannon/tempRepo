# Assignment: Login and Registration
Many websites have login and registration components.  Django makes this easy for us, with its prebuilt auth model (sort of) but this is still a topic that we are putting off for a bit.  The reason we are putting it off, is that the auth model is easy to use out of the box, a bit more challenging to modify for our own ends, so we are making our own for now!

Now that we've learned how to integrate models, validations, and controllers to our projects, our next goal is to create a fully functional login and registration! The goal is to bring together your knowledge of MVC patterns, validations, and password encryption. Our assignment is to build the following:


![login_reg](/login-reg.png "login")

Validations - show validation error messages if validations fail above the corresponding form

- First Name - Required, No less than 2 characters, letters only
- Last Name - Required, No less than 2 characters, letters only
- Email - Required, Valid Format
- Password - Required, No less than 8 characters in length, matches
- Password Confirmation
Use Bcrypt to encrypt your users' passwords
- Bonus: Birthday Field (before today, or go creative and do it in an age range)
