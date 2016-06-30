# Deployment:

# Welcome to the deployment section!

We are going to go through a bit of the deployment in a step wise manner, but before we do that let's get started on AWS.

It takes a little bit of time to navigate through AWS - there's a ton of stuff there!  

We are going to launch an EC2 instance, using an Ubuntu Server.
![InstanceType](/instance-type.png "Courses")

In order for our local machine to be able to connect to our instance we need to set an SSH security group (I choose mymachine's IP for this).

In order for people to connect to our machine from the outside we need to say which HTTP addresses can connect to our machine (generally anyone) and if we have a secure shell, we can set that too!

![SecurityGroup](/Securitygroup.png "Courses")

Somewhere distinct on our local machine, create a folder for our key pairs.  This should bet OUTSIDE OF ANYTHING THAT GETS PUSHED TO GIT!  We will access your SSH to connect to our instance starting in a terminal location that has access to this key pair.  (For PC users, use a bash terminal and all this should work fine!)

![KeyPair](/key-pair.png "Courses")

Once we have all this set up, hit launch instance and our cloud based machine will start to start up (this takes about 5 minutes).

While we wait, we can navigate back to the main AWS site, and check out our EC2 instances.  We will hopefully see something a list of instances (just one for us so far).  If we click on this instance, a big blue button highlights at the top of the screen saying connect.  Click this.  It has directions for how to connect to your instance from your terminal.


Once we are connected to our instance via our terminal.  Follow these directions very, very carefully.  They work, but the biggest issue with deployment is typos.  If something goes south -- spend no more than 25 minutes trying to figure it out.  It's often easier to just terminate our instance and restart the whole process than try to figure out a single typo with limited error outputs.

### The Setup
IN UBUNTU SERVER
> sudo apt-get update
> sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib nginx git
### for Bcrypt
> sudo apt-get install build-essential libssl-dev libffi-dev python-dev

### postgresql
#### Anywhere you see **PROJECT** This is your outer folder name (git project name)
#### Anywere you see **InnerP** This is your folder that contains manage.py
> sudo su - postgres
> psql

>
