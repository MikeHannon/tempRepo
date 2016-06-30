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
Let's look at the Comment class.  An instance of the Comment class has two pointers to other objects. The pointers' names are user which points to a User object instance, and message which points to a Message object instance.  So just like in the linked list example, we could say something like: CommentInstance.message.message.  The first message is the pointer to the message object.  The second message is the actual message property of the message object.  (To slightly clarify this )
