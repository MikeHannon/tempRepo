# Now we are about to start using some of the pieces that just make Django AWESOME!

```terminal
> django-admin startproject initialAdmin
> cd initialAdmin
> python manage.py createsuperuser
--> fill in name
--> fill in Email
--> fill in password *2
> python manage.py runserver
```
go to localhost:8000/admin

Enter your data in the site that pops up!

And arrive here! :)
![alt text](manager_image.png "Survey Form")

The admin portal in Django is a fantastic tool to modify and play with database data (for example).  We avoided it up until now, just to prevent confusion with the routing and terminal commands and the whole createsuperuser command.

Pretend we had an app (`apps/awesomeApp`) that had a bunch of models and we want to add those models to the manager.

In our main urls page after you register your urls:

```python
from django.conf.urls import url,include
from django.contrib import admin
#new
from apps.awesomeApp.models import User as U, Fruit, Donut, Group

urlpatterns = [
# re-added
    url(r'^admin/',admin.site.urls),
    url(r'^awesome/', include('apps.awesomeApp.urls')),
]

class UAdmin(admin.ModelAdmin):
    pass
admin.site.register(U, UAdmin)

class FruitAdmin(admin.ModelAdmin):
    pass
admin.site.register(Fruit, FruitAdmin)

class DonutAdmin(admin.ModelAdmin):
    pass
admin.site.register(Donut, DonutAdmin)

class GroupAdmin(admin.ModelAdmin):
    pass
admin.site.register(Group, GroupAdmin)

```
All of these data would now be available in the django-admin site!
