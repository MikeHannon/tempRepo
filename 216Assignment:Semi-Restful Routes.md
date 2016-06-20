# Assignment: Semi-Restful Routes

We've touched on the idea of RESTful routes before, but in case you forgot here's a quick recap:

In many applications, we typically want to give users a way to create, read/retrieve, update, or destroy specific "resources".

For example, in an application such as Twitter, "tweets" would be a resource, and you would definitely want to be able to perform all the **CRUD** (Create-Read-Update-Delete) operations on tweets. We could choose *any number of routes* to perform those operations, but that would create madness in the development community -- countless hours would be spent trying to understand a particular developer's particular route structure.

Enter RESTful routes to save the day with a set of conventions that most web developers try to follow. It's up to you to decide whether you also follow these rules/conventions; much of the industry chooses to.

Follow the instructions below to build the following Django application:
![restful](/restfulRoutes.png "restful route assignment")

+ Name controllers/views in plural form (i.e. 'Products')
+ Name each model singular (i.e. 'Product')
+ Create 7 methods in your view/controller; refer to the routes in the wireframe for guidance
  + `index`: Display all products
  + `show`: Display a particular product
  + `new`: Display a form to create a new product
  + `edit`: Display a form to update a product
  + `create`: Process information to create a new product
  + `update`: Process information from the edit form and update the particular product
  + `destroy`: Remove a product

Feel free to reference the following table (in this case **pets** are the resource) to build RESTful routes. Note that this assignment only asks that you build a *semi*-RESTful application. That's because we only expect you to use `GET` and `POST` verbs (not `PUT`, `PATCH` or `DELETE`), so you can't reuse URLs to the same extent.

###RESTful Routes:
Using **pets** as an example resource:

Action | HTTP Verb | Route Path | Function
 --- | --- | --- | --- | ---
Retrieve all pets | GET | `/pets `| `index`
Display form to create a new pet | GET | `/pets/new` | `new`
Create a new pet | POST | `/pets` | `create`
Display specific pet | GET | `/pets/<id>` | `show`
Display form to update a specific pet | GET | `/pets/<id>/edit` | `edit`
Update a specific pet | PUT *or* PATCH | `/pets/<id>` | `update`
Delete a specific pet | DELETE | `/pets/<id>` | `destroy`

For *semi*-RESTful architecture, you can append a `/destroy` to the `destroy` route.
