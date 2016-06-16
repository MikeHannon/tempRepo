# Bcrypt, Django Style!
In your django virtualenv
```terminal
(djangoEnv)>pip install Bcrypt
```

Here's the Bcrypt pypy doc!

https://pypi.python.org/pypi/bcrypt/2.0.0

After you have pip installed try this!
```terminal
(djangoenv)>python
>>> import Bcrypt
>>> password = b"super secret password"
>>> hashed = bcrypt.hashpw(password, bcrypt.gensalt())
>>> print (hashed)
>>> print (len(hashed))
>>> exit()
```
Play around in the python shell a bit!
