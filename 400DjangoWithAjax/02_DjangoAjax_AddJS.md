#Introducing JavaScript

In the previous tab, you built (probably pretty quickly!) an app to create and view posts. That activity was meant to get you to notice a problem we've already mentioned:

> Every time we add a post, the page refreshes in order to display the most up-to-date posts.

That's generally considered poor user experience, so let's step in with some JavaScript.

We'll use `jQuery`/`$` for its super easy syntax -- either download a local copy or link to CDN -- and stop our `<form>` from issuing an HTTP request when submitted.

All we really need to do is update the code in our `template` file:

```html
# Inside your app's index.html template
{% load staticfiles %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ajax Posts</title>
    <!-- GRAB jQUERY -->
    <script src="LOCAL JQUERY FILE OR CDN LINK"></script>
    <!-- ******************* -->

    <link rel="stylesheet" href="{% static 'css/styles.css' %}">
  </head>
  <body>
    <h1>Posts</h1>
    <div class="posts">
      <!-- posts is fed to the template via a context dictionary (see app's views.py file for details) -->
      {% for post in posts %}
      <div class="post">
        <p>{{post.description}}</p>
      </div>
      {% endfor %}
    </div>
    <form action="{%url 'posts' %}" method="post">
      {% csrf_token %}
      {{new_post_form.as_p}}
    <input type="submit" name="name" value="Add New Post">
  </form>
  </body>
  <!-- NOW LET'S ADD SOME JAVASCRIPT TO STOP FORM SUBMISSION! -->
  <script>
    // You could also put this code in another JavaScript file... Remember to user $(document).ready() if the script tag is included before the DOM nodes you care about...
    $('form').submit(function(e){
      // preventDefault stops the default action of the event (e) from being triggered.
      e.preventDefault();
      console.log("Form submitted but no HTTP request sent to server!");
    });
  </script>
  <!-- ********************************* -->
</html>
```

OK, we've severed the default tie between HTML `<form>` and our server. Just one problem: How do we get our JavaScript code to send off the request instead?

###Enter **Ajax**

One of the most important techniques for building modern web apps, Ajax requests allow us to communicate with the server *in the background* of other activity. That means our users can submit a form, for example, and still be able to do things like scroll up and down the page and interact with other parts of our website.

We could create these requests with [vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), but it's relatively tedious compared to a build-in `ajax` method that jQuery gives us:

Let's invoke that method (attached to the `$` object) and pass it an object describing the type of request we'd like it to initialize.

Take a look at the incomplete code below and see if you can fill in the missing pieces before moving to the next tab. This [documentation](http://api.jquery.com/jquery.ajax/) might be helpful.

```js
$('form').submit(function(e){
  e.preventDefault()
  $.ajax({
    url: /* Where should this go? */,
    method: /* Which HTTP verb? */,
    data: /* Any data to send along? */,
    success: /* What code should we run when the server responds? */
  })
})
```
