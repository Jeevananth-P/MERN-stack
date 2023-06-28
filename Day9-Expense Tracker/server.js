let express = require("express")
let mongoose = require("mongoose")
let app = express()
let router = require("./router/router");

//!Middleware
app.use(express.json()) //Change data into JSON format
app.use(express.urlencoded({ extended: true }))
app.use(router); //Connect to router

// !DB connection
mongoose.connect('mongodb://127.0.0.1:27017/expense_tracker', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("Connected to DB"));

//?At the end of file
app.listen(5000, callBack);

function callBack() {
    console.log("Connected to Port 5000");
}