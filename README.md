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


## Level 1

Started with level 1, which is just a simple login page, that uses a local db to store the login username and password (mongoDB).

## Level 2

Moved on to level 2 which included some database security through the use of some encryption. I used mongoose-encryption to encrypt the password field in the database. This stored the password in a more difficult to read format.

## Level 3
Here I learned how to use .env files to store sensitive information.  I used the dotenv package to store the encryption key in a .env file.  This is a much better way to store sensitive information (and avoid costly AWS charges haha).

Also used md5 to hash the password before storing it in the database.  This is a much more secure way to store passwords rather than just storing with mongoose-encryption. However, if a user has a simple password, and a hacker were to find the database, a lot of the information can be found by using a password cracking tool, or at times, even a Google search.

## Level 4

Here I learned about using Salt in addition to md5 to hash the password.  This is a much more secure way to store passwords.  The salt is a random string that is added to the password before it is hashed.  This makes it much more difficult to crack the password.  The salt is stored in the database along with the hashed password.  This is a much more secure way to store passwords.

