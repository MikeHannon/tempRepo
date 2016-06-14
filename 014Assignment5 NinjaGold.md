# Assignment 5: Ninja Gold Game Django Version
You're going to create a mini-game that helps a ninja make some money! When you start the game, your ninja should have 0 gold. The ninja can go to different places (farm, cave, house, casino) and earn different amounts of gold. In the case of a casino, your ninja can earn or LOSE up to 50 golds. Your job is to create a web app that allows this ninja to earn gold and to display past activities of this ninja.

Guidelines

Refer to the wireframe below.
Have the four forms appear when the user goes to http://localhost.
- For the farm, your form would look something like <form action="/process_money" method="post><input type="hidden" name="building" value="farm" /><input type="submit" value="Find Gold!"/></form>.
- In other words include a hidden value in the form and have each form submit the form information to /process_money.
- Have /process_money determine how much gold the user should have (hint: you'll have to set up a custom routing rule)
Bonus make a second version that instead of using a hidden variable for each place, uses a route parameter!  

![alt text](ninja-gold-ci.png "Ninja Gold")


** Do NOT store the activity log in the database. Just save these logs in sessions. **

- Please make sure that when you visit, "localhost/" you are seeing the page we described above (in other words, we don't want to go to "/gold/index" or other URL to see this app.
- And make sure that the forms are sent to "/process_money" and not any other URL. Again remember that you can modify the routing file to set custom URL's (have this custom URL).

- No need to store anything in the database. The activities should be stored in the session.
