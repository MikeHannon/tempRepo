# Passing variables to templates

At this point, we're able to hit our routes, determine whether the method was a `GET` or a `POST`, run a method from our controller/view, and then render a template. We're still missing something: passing data back to our template via something other than `request.session`.

<iframe width="420" height="315" src="https://www.youtube.com/embed/YBDzLZdfcXY" frameborder="0" allowfullscreen></iframe>

We should always minimize our use of `request.session`, limiting it to just a few reference pieces such as the name and ID of a logged-in user.

Not leaning on `session` demands the ability to use what are called **contextual variables**.

```python
from django.shortcuts import render, HttpResponse, redirect
# The render method that we are importing has two required arguments (request and the template to render), as well as some optional arguments, one of which is context
```

What is **context**? It's just a dictionary that gets unpacked in the template, making all the keys variables that equal the corresponding value.

### For example:
```python
from django.shortcuts import render, HttpResponse, redirect

def show_ninja(request, ninja):
  #ninja got passed in through the url parameter!
  context = {'myninja' = ninja}
  return render(request, '/myproject/showmyninja.html', context)
```

In ` showmyninja.html ` the `context` dictionary gets unpacked, and we have access to `myninja`!

```html
<!-- From inside /myproject/showmyninja.html -->
{{myninja}}
```
