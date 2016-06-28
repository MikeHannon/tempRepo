#Connecting Ajax

If you came up with something like the following code, nice job!

```js
$('form').submit(function(e){
  e.preventDefault()
  $.ajax({
    url: '/posts/',
    method: 'post',
    data: $(this).serialize(),
    success: function(serverResponse){
      console.log("Received this from server: ", serverResponse)
      console.log("I should probably put that in the DOM...")
    }
  })
})
```

Pause for a moment to really think about the following: You just added some JavaScript to take care of an HTTP request/response on the front-end; at this point *you haven't changed a single line of code on the server-side*. Remember: The server **doesn't care** whether a request is initiated via your browser's address bar, an HTML `<form>` submission or an Ajax request.

This is probably as good a time as any to mention what Ajax stands for: **Asynchronous Javascript And Xml**. That's a bit of a mouthful; the important thing to remember about this technique is that we're running code *asynchronously*, i.e. the `function` we attached to the `success` key only runs when the server responds.

Back to business. If you logged the server's response, you'll notice we're responding with the HTML that our server derives from rendering the template. The problem with the current state of things is that we don't need the entire html file! All we really care about is the section with the posts. One strategy to deal with this is to make another template that holds only that code:

```html
<!-- Inside a new template that we'll call posts_index.html -->
<div class="posts">
  {% for post in posts %}
  <div class="post">
    <p>{{post.description}}</p>
  </div>
  {% endfor %}
</div>
```

Now let's refactor our `views` so that a GET request to `/posts` renders the new template. Let's also make a root route that will render the full `index.html` page.

Here are our views:

```python
class Welcome(View):
    def get(self, request):
        """
        Fetch all posts and render full index page
        """
        context = {
            'posts': Post.objects.all(),
            'new_post_form' : PostForm()
        }

        return render(request, 'ajax_posts_app/index.html', context)

class Posts(View):
    def get(self, request):
        """
        Fetch all posts and display posts_index page
        """
        context = {
            'posts': Post.objects.all()
        }

        return render(request, 'ajax_posts_app/posts_index.html', context)

    def post(self, request):
        """
        Create new post and redirect to index route
        """
        bound_form = PostForm(request.POST)

        """
        Check valid description
        """
        if bound_form.is_valid():
            Post.objects.create(description=request.POST['description'])

        return redirect('posts')
```

And here are our urls:

###App-level urls
```python
# Inside the app's urls.py file
urlpatterns = [
    url(r'^$', Welcome.as_view(), name='welcome'),
    url(r'^posts$', Posts.as_view(), name='posts')
]
```

###Project-level urls
```python
# Inside the app's urls.py file
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('apps.ajax_posts_app.urls')),
]
```

The only thing left to do is have our JavaScript put the actual response into the DOM:

```js
// Inside the $.ajax() call
success: function(serverResponse){
          // Replace the html inside a div with the class "posts" with the server response
          $('.posts').html(serverResponse)
        }
```

That's all it takes! Hopefully you can see the power of using Ajax requests to give your app a sleeker feel. Checked out `with-ajax` branch of the [reference repo](https://github.com/meadch/django-ajax-posts/tree/with-ajax) if you want to review the full code.
