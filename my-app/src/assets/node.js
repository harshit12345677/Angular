//declare var require : any
var port = 3000;

import express, { urlencoded } from 'express';
import https from 'https';
var app = express();
import path from 'path';
app.set('view engine', 'ejs');
app.use(urlencoded({ extended: false }));
//app.use(express.static('index.html'));
var __dirname = path.resolve(path.dirname(''))
app.get('/', function (req, res) {
    //res.send("GET Request Called") 
    //eturn res.render("home.ejs");
    res.sendFile(path.join(__dirname, 'my_file.html'));
    //return ;
});
app.post('/Edit', function (req, res) {
    //res.send("GET Request Called") 
    //eturn res.render("home.ejs");
    // console.log(req.body);
    //res.sendFile( path.join( __dirname,'index.html' ));
    //return ;
    // res.send(200);
    res.sendFile(path.join(__dirname, 'my_file.html'));
    return;
});
app.post('/Delete', function (req, res) {
    //res.send("GET Request Called") 
    //eturn res.render("home.ejs");
    // console.log(req.body);
    //res.send(200);
    //return ;
    res.sendFile(path.join(__dirname, 'my_file.html'));
    return;
});
app.listen(port, function (err) {
    if (err)
        console.log("Error in server setup");
    console.log("Server listening on Port", port);
});
