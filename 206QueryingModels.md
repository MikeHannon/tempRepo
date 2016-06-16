#Database Queries
###Time to put the M into our Django MTV!

We've built the models, now we need to use them!

<iframe width="420" height="315" src="https://www.youtube.com/embed/6C06E-Vjx34" frameborder="0" allowfullscreen></iframe>

Django has a relatively easy to use **Object Relationship Mapper** (ORM) to help us *make queries simply and cleanly*. You'll love it, but we won't exploit its full power just yet. Wait, why not?

1. We want you to understand how to write your own SQL queries. This will solidify a foundation of knowing how your app is interacting with the database.

2. Hand-written queries, if done correctly, are actually *faster* than many ORMs, which levy a speed tax.

That said, we will user *some* ORM queries right from the start, because they certainly make life easier. Some developers rely on the ORM for creating, deleting and updating a resource, as well as for easy retrievals, but turn to hand-written SQL queries for more complicated retrievals.

Let's get started!
