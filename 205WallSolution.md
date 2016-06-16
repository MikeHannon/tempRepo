``` python

class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField()
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Message(models.Model):
    message = models.TextField()
    user = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(User)
    message = models.ForeignKey(Message)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

```

Hopefully by now this is pretty straight forward. We have a User model that has a first_name, last_name that are CharField's email which is the EmailField, password which is another CharField, lastly created_at and updated at are created for us. Next we have a Message model who has a message that is a TextField but we also have to link this message to the user who created said message so we add the user linked through the Foreign Key. The same concepts applies to the Comments model, we create a comment field that is TextField, and we link to the user who created said comment and the message that comment is attached to.
