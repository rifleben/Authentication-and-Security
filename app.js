//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = {
    email: String,
    password: String
    };

const User = new mongoose.model("User", userSchema);

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render("home");
    });
    
app.get("/login", function(req, res) {
    res.render("login");
    });

app.get("/register", function(req, res) {
    res.render("register");
    });

app.post("/register", async function(req, res) {
    try{
        const newUser = new User({
            email: req.body.username,
            password: req.body.password
        });
        await newUser.save();
        res.render("secrets");
    } catch(err) {
        console.log(err);
    }
});

app.post("/login", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    try{
        const foundUser = await User.findOne({email: username});
        if(foundUser){
            if(foundUser.password === password){
                res.render("secrets");
            }
        }
    }catch(err){
        console.log(err);
    }
    
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
    });
