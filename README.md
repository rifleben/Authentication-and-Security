# Authentication and Security

This is a simple application that I am using to learn about the various levels of authentication and security in a web application.  I am using the following technologies (so far):

## Tech Used:

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [Mongoose](http://mongoosejs.com/)
* [mongoose-encryption](https://www.npmjs.com/package/mongoose-encryption)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [md5](https://www.npmjs.com/package/md5)
* [bcrypt](https://www.npmjs.com/package/bcrypt)


## Level 1

Started with level 1, which is just a simple login page, that uses a local db to store the login username and password (mongoDB).

## Level 2

Moved on to level 2 which included some database security through the use of some encryption. I used mongoose-encryption to encrypt the password field in the database. This stored the password in a more difficult to read format.

## Level 3
Here I learned how to use .env files to store sensitive information.  I used the dotenv package to store the encryption key in a .env file.  This is a much better way to store sensitive information (and avoid costly AWS charges haha).

Also used md5 to hash the password before storing it in the database.  This is a much more secure way to store passwords rather than just storing with mongoose-encryption. However, if a user has a simple password, and a hacker were to find the database, a lot of the information can be found by using a password cracking tool, or at times, even a Google search.

## Level 4

Here I learned about using Salt in addition to hashing the password.  This is a much more secure way to store passwords.  The salt is a random string that is added to the password before it is hashed.  This makes it much more difficult to crack the password.  The salt is stored in the database along with the hashed password.  This is a much more secure way to store passwords. Here I used the bcrypt package to hash the password and store the salt in the database.

## Level 5
Cookies and Sessions:

Here I learned about cookies and sessions.  I used the express-session package to create a session for the user.  This session is stored in the browser.  The session is used to keep the user logged in.  The session is also used to store the user's secret.  The secret is only available to the user that is logged in.  This is a much more secure way to store sensitive information.

## Level 6
OAuth:

Here I learned about OAuth.  I used the passport package to implement OAuth.  I used the passport-local-mongoose package to simplify the process of using passport with mongoDB.  I used the passport-google-oauth20 package to implement OAuth with Google.  This is a much more secure way to store sensitive information, and also allows the user to login with a third party service (Google in this case). The benefit of using a third party service is that the user does not have to remember a password, and the third party service is much more secure than storing the user's password in the database as Google has a lot more security resources to secure that user's password.