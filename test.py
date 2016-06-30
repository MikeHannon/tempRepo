
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
