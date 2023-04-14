# Authentication and Security

This is a simple application that I am using to learn about the various levels of authentication and security in a web application.  I am using the following technologies (so far):

## Tech Used:

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [Mongoose](http://mongoosejs.com/)
* [mongoose-encryption](https://www.npmjs.com/package/mongoose-encryption)


### Level 1

Started with level 1, which is just a simple login page, that uses a local db to store the login username and password (mongoDB).

### Level 2

Moved on to level 2 which included some database security through the use of some encryption. I used mongoose-encryption to encrypt the password field in the database. This stored the password in a hashformat that is much more difficult to crack.