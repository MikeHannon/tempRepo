# Passing variables to views!
At this point we are able to hit our routes, determine whether the method was a get or a post, run a method from our controller when we hit that route, and then render a view.  In other words we have almost leveled up our Django and MVC skillset, but we are still missing that last little experience: passing data back to our view, through something other than request.session.


<iframe width="420" height="315" src="https://www.youtube.com/embed/YBDzLZdfcXY" frameborder="0" allowfullscreen></iframe>

#### We should minimize our use of request.session, limiting it to just a few reference pieces, e.g. who is logged in (But just their name, and perhaps their identifier (e.g. email or unique user name), so that we can get other things from the DB if we need)

So if we shouldn't use session... what should we do?  Use contextual variables! <-- Ok fine, let's clarify this!

```python
from django.shortcuts import render, HttpResponse, redirect
# The render method that we are importing up there... it has 2 required arguments, and a bunch of optional arguments, one of which is context
```

What is context?  It's just a dictionary that gets unpacked and all of the key,value pairs in that dictionary are available to the template (view) being rendered.

### A not uncommon use:
```python

from django.shortcuts import render, HttpResponse, redirect

def show_ninja(request, ninja):
  #ninja got passed in through the url parameter!
  context = {'myninja' = ninja}
  return render(request, '/myproject/showmyninja.html', context)
```

and then in ` showmyninja.html ` the context dictionary gets unpacked, and we have access to myninja!

```html
{{myninja}}
```
