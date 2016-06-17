# Assignment: Semi-Restful Routes


We've touched on the idea of Restful Routes before but in case you forgot here is a quick recap...

In many applications, we typically want to give users a way to create, read/retrieve, update, or destroy specific "resources". For example, in an application such as twitter, "tweets" would be a resource! You would definitely want to be able to perform all the CRUD (Create-Read-Update-Delete) operations on tweets. As with all web apps, we could do this in so many ways - could you imagine how crazy this might get if every developer out there followed different conventions?

Enter RESTful Routes to save the day! REST or RESTful routing is basically a list of conventions created for everyone to follow. It's up to you whether you also follow these rules/conventions, but it is strongly encouraged that you get yourself familiar with how RESTful routes work, as a lot of the industry also follows these rules.

![restful](/restfulRoutes.png "restful route assignment")
Follow the instructions in the wireframe below to build this application in Django:

- name controllers in plural form- in this case 'products'
- name each model singular - in this case, 'product'
- have 7 methods in the controller. Refer to the routes in the wireframe for guidance:
- index method - to display all product info [this would need a view file]
- new method - to display a form that allows the user to create a new product [this would need a view file]
- edit method - to display a form that allows the user to update a product info [this would need a view file]
- show method - to display a particular product info [this would need a view file]
- create method - to process the form submitted from /products/new [have this process the POST data and redirect to '/products'
- destroy method - to process the form submitted from index method to remove a particular product [have this process the POST data and redirect back to '/products']
- update method - to process the form submitted from /products/show/[id] to update that particular product name, description or price.

![routes](/RyM1b.png "routes described")
( from http://stackoverflow.com/questions/16717819/what-restful-http-request-for-executing-actions-on-the-server )
