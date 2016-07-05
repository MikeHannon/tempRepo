# What is the ORM doing???

For many of us, we are just figuring out SQL so coupling Object Relational Mapping on top creates all sorts of confusion.  First let's talk a bit more about the ORM and objects.

This might not seem germane, but let's start with a linked list with different node types:

```python
class ListNode(object):
  def __init__(self,val):
    self.val = val
    self.next = None

class CustomNode(object):
  def __init__(self,val,*bonus):
    self.val = val
    self.next = None
    self.bonus = bonus

class LinkedList(object):
  def __init__(self):
    self.head = None

  def addNode(self, val, *extras):
    if not self.head:
      if extras:
        self.head = CustomNode(val,extras)
      else:
        self.head = ListNode(val)
      return self
    current = self.head
    while current.next:
      current = current.next
    if extras:
      current.next = CustomNode(val,extras)
    else:
      current.next = ListNode(val)
    return self

myList = LinkedList()
myList.addNode(72,"hello world", "banana").addNode(45).addNode(21, "Yay")
print myList
print myList.head
print myList.head.next
print myList.head.next.next.bonus
```

In this example myList.head is just a pointer.  It starts out pointing to None, and then we set it to point to an object when we add a node.  The object it is pointing at has its own properties.  In this case, all objects have two properties in common: val and next and one of the object types (CustomNode) has an additional property, named bonus.

We can access each of the properties in each node, as we move from node to node!

## Parts of the ORM work in a very similar way!  Let's look!

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
Let's look at the Comment class.  An instance of the Comment class has two pointers to other objects. The pointers' names are user which points to a User object instance, and message which points to a Message object instance.  So just like in the linked list example, we could say something like: CommentInstance.message.message.  The first message is the pointer to the message object.  The second message is the actual message property of the message object.  (To slightly clarify this if we changed the property 'message' in our Message class to "donutflavor" to get the donutflavor associated with a specific comment we'd go CommentInstance.message.donutflavor).  In plainer English, this says we have an instance of a comment, that has a pointer to a message object.  That message object has a number of properties/pointers, one of which is this donutflavor, which we are then accessing.  This logic works great when a pointer is pointing at a specific object (like we discussed above, but what if we want to get all of specific message's comments).  A Messageinstance doesn't have a pointer to all the comments...  ENTER DJANGO!

Django has 3 major relationship types and deals with these things for us!  

### One to one
 This makes an imaginary property IN THE OBJECT THAT THE ONE_TO_ONE relationship is not defined in, in addition to the real property in the object that the relationship IS defined in.  So if we had a one_to_one relationship in an object e.g.

```python
class User(models.Model):
  first_name = models.CharField(max_length=45)

class CustomUserId(models.Model):
  newId = models.IntegerField()
  specificUser = models.OneToOneField(User)

```
Here a userObject has a customUserId as well as a customUserId having a specificuser property.
If we want to change the way we reference that artificially generated key, we could change our model like this:
```python
class User(models.Model):
  first_name = models.CharField(max_length=45)

class CustomUserId(models.Model):
  newId = models.IntegerField()
  specificUser = models.OneToOneField(User, related_name="myId")
```

Now the Userobject would reference the CustomUserId objects by userObject.myId (and then maybe .newId if you wanted to get that integer stored in newId)

### One to many

One side of the one to many behaves just like the one_to_one relationship, and we described it above.  But how does django deal with the opposite direction relationship, e.g. going from a User object to the **set** of messages or comments?  Well Django has provided us a tool: Lower_case class name followed by _set = access to the set of objects of the related key.

```python
Userobject.message_set.all()
```

The above code would retrieve all of the messages associated with that particular user object.  Much like with a OneToOneField, we can set a related name.  If we do, the message_set piece of code would be replaced with related name.

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
    user = models.ForeignKey(User, related_name="messages")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    comment = models.TextField()
    user = models.ForeignKey(User)
    message = models.ForeignKey(Message)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

This is of particular use when you have Class that joins to the same class more than once.  (Since classname_set would not know which of the associations you are talking about!)
Given the above model, note the related_name ('messages') now in our Message class?  Now a user object can reference messages not through message_set, but through that related name: messages.
```python
User.object.messages.all()
```

### Many to many

Our last common relationship in Django: The many to many relationship.  In this relationship both directions of the relationship are sets!  The example that Django uses is Pizzas and Toppings.  Any pizza can have many toppings, and any topping can be on many pizzas.  We strive to place the many to many where it makes the most sense.  In this case we'd set the relationship in pizzas, such that we could do

```python
pizzaObject.toppings.all()
```
versus
```python
pizzaObject.toppings_set.all()
```
but either direction requires the secondary call.

This is one of those topics that can take a bit to wrap our heads around.  Making projects that have these relationships in them can really help!
