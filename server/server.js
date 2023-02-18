const express = require('express')
const cors = require('cors')
const session = require("express-session")
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose ');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();
const port = 3000 || process.env.PORT;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jobboard', 
{useNewUrlParser: true, useUnifiedTopology: true});

app.listen(port, ()=> {
    dbo.connectToServer(function(err){
        if(err) console.log(err);
    });
    console.log('server is running on port ${port}');
});