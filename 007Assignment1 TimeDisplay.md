# Time Display

Create a Django project called `main`

Create a new app in the `apps` folder of your main Django project called `timedisplay` (don't forget to add it to your main project's `settings.py` file)

In `timedisplay`'s controller (`views.py`), create a method named `index`.

When you go to the url `localhost:8000` this should run the `index` method in your controller file, (`views.py`). Have that method render a template that displays the current date and time like the wireframe below:

```python

from django.shortcuts import render, HttpResponse

def yourMethodFromUrls(request):
  context = {
  "somekey":"somevalue"
  }
  return render(request,'appname.page.html', context)
```
The keys of your context dictionary are available to be accessed on your page.html.  
```html
{{somekey}}
```
will print out "somevalue" on your html!

![alt text](time.png "Time")
