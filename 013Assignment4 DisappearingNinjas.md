# Disappearing Ninjas
This exercise will help you practice URL routing, using views, and rendering static content. Start by creating a new project and name it as disappearing_ninjas

![alt text](tmnt.png "Turtles Yo!")


These are the routes that you need to set up:

- On the default page ('localhost:8888'), it should display a view that says "No ninjas here"
- When user visits /ninja, it should display all four Ninja Turtles (Leonardo, Michelangelo, Raphael, and Donatello)
- /ninja/[ninja_color], should display the corresponding Ninja Turtle (used named groups to grab the color parameter out of the requested URL)
- If user visits /ninja/blue, it should only display the Ninja Turtle Leonardo.
- /ninja/orange - Ninja Turtle Michelangelo.
- /ninja/red - Ninja Turtle Raphael
- /ninja/purple - Ninja Turtle Donatello
- If a user tries to hack into your web app by specifying a color or string combination other than the colors (Blue, Orange, Red, and Purple), example: /ninja/black or /ninja/123, then display Megan Fox.

All of the ninja/ninja_colors, should just be one route, with a route parameter not 5 routes
___

#### Oh... Did we forget to mention static files?

Ok, then: Here's the deal: make a static folder that is at the same level as template's in your app and put an identifier folder inside of that, just like we did with the templates!
` e.g. first_app/static/first_app `

Place your static files inside it (you can make 3 folders if you want, e.g. css and js and images)
To go and retrieve one of these files try something like this:

```html
{% load staticfiles %}
<link rel="stylesheet" href="{% static 'first_app/css/style.css' %}">
```

Wait... you probably knew all this because of that video in tab above this one! (in case you missed it)
<iframe width="420" height="315" src="https://www.youtube.com/embed/dH-Xxclnv1g" frameborder="0" allowfullscreen></iframe>
___
