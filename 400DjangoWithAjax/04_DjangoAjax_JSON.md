#Returning JSON

Up to this point, we've cut off a default browser action (i.e. stop a `<form>` from shooting off an HTTP request and page-reload) with JavaScript and used it (via `jQuery`) to manage the request/response with an Ajax request.

Besides adding a new template and refactoring our `urls.py` files, we didn't touch our server-side code. That means it's returning the same thing to the browser that it always has: A **string** that our browser understands can be interpreted as HTML tags and content.

Basically, we're sending HTML back to the JavaScript that's handling the response.
