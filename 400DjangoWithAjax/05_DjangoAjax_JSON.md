#Returning JSON

Up to this point, we've cut off a default browser action (i.e. stop a `<form>` from shooting off an HTTP request and page-reload) with JavaScript and used it (via `jQuery`) to manage the request/response with an Ajax request.

Besides adding a new template and refactoring our `urls.py` files, we didn't touch our server-side code. That means it's returning the same thing to the browser that it always has: A **string** that our browser understands can be interpreted as HTML tags and content.

Basically, we're sending HTML back to the JavaScript that's handling the response, and that can be annoying in certain situations:

1. We're expecting other applications to send our server HTTP requests to get information
2. We want to generate the HTML on the front-end, perhaps using client-side frameworks like Angular or React

Returning a string of HTML code is annoying because it's hard to parse, unlike, say a JavaScript object.

Go ahead and paste the following url into your browser's address bar:

+ https://api.github.com/users/MikeHannon/repos

We just hit one of Github's servers with a `GET` request. How'd we know the correct pattern to use when asking for Mike Hannon's repositories? By [reading the docs](https://developer.github.com/v3/repos/)! Github *could have* chosen to respond with HTML tags that our browser could read, but they -- thankfully -- instead gave us something that our JavaScript can parse as an object!

```js
// Response from https://api.github.com/users/MikeHannon/repos
[
  {
    id: 56562824,
    name: "4.PHP_MVP",
    full_name: "MikeHannon/4.PHP_MVP",
    owner: {
    login: "MikeHannon",
    id: 7180431,
    avatar_url: "https://avatars.githubusercontent.com/u/7180431?v=3",
    // ...More stuff...
  },
// ...More stuff...
]
```

The name for this type of data formatting is called **JSON** (JavaScript Object Notation), and it easily allows us to iterate through a server response (notice we received an `array` from Github) and pick and choose the key/value pairs that we want to access.

There are plenty of free public APIs that you can reach out to via Ajax requests to enhance your own applications. While every URL pattern will be different -- requiring you to read documentation to figure out how to get the information you want -- adhering to a RESTful URL pattern is super helpful.

Take some time to explore the following external APIs:

+ [Open Weather Map](http://openweathermap.org/api)
+ [GitHub API](https://developer.github.com/v3/)
+ [Google Maps Directions API](https://developers.google.com/maps/documentation/directions/)
+ [Twitter API](https://dev.twitter.com/rest/public)
+ [Flickr API](https://www.flickr.com/services/api/)

The benefits of pulling an external API into your app are enormous. You can stand on the shoulders of giants to leverage what's already been built to make your app even better.

It's up to you to decide which type of data you'd like your server to respond with.

In general:

+ Respond with HTML templates when there aren't too many pieces of data to track and no other domains will be querying your server.
+ Respond with JSON if you'll be accepting HTTP requests from other domains or if you're using a front-end framework like Angular or React.

Most importantly: Experiment with different strategies!
