#Wall ERD

You already know how to design an ERD for the following wireframe (go ahead and reference your code for **The Wall** if you need a refresher):

![Wall Wireframe](/wall.png 'Wall')

Leads to:

![Wall DB](/wall-db.png 'WALLE')

How would we go about generating a similar structure in Django?

+ We have a user who has messages
+ Each message can have many comments
+ Each comments is associated with a user

*Remember:* `ForeignKey` fields are like grabbing the trident-shaped relationship handle in MySQLWorkbench. The `ForeignKey` goes in the *many side* of the relationship. If that's not clear, don't be afraid to grab a colleague, post a slack question (after 20 minutes, of course), or even review the last tab.
