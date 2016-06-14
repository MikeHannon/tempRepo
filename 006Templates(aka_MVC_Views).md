#The Real Views of Django

###The following can't be emphasized enough:
* Django **Models** is the **MODEL** in MVC (easy enough)
* Django **Templates** (living in `templates` directory) is the **VIEW** in MVC
* Django Views (living in `views.py`) is the **CONTROLLER** in MVC

Traditional MVC | Stands For | Django MTV | Stands For | Role
--- | --- | --- | --- | --- |
**M** | **Model** | **M** | **Model** | Performs heavy logic, queries database
*V* | *View* | *T* | *Template* | Holds HTML (plus any Python code) that will be rendered and sent to browser
**C** | **Controller** | **V** | **View** | Receives an HTTP request from `routes.py` and decides what to do (i.e. redirect, call a model method, render some HTML)

That means if someone -- friend, family member, *potential employer* -- asks you whether you're familiar with MVC architecture, you should be be able to respond with an emphatic **YES** and explain the role of each piece.

###Adding Views to App
Remember, while it's not *required* to put a directory with your app's name inside your `templates` directory, it's good practice.

<iframe width="420" height="315" src="https://www.youtube.com/embed/1-e0YEluJ6M" frameborder="0" allowfullscreen></iframe>
