//requerimientos
const express = require("express");
const app = express();
const fs = require("fs");
const http = require("http");
const https = require("https");
const forcessl = require("express-force-ssl");
const ssl = require("./ssl");
const rutas = require("./rutas");
//sets
var puerto = JSON.parse(fs.readFileSync("./configuraciones/conf.json"));
app.set("view engine", "ejs")
//use
app.use(forcessl);
app.use(express.static("html"));

//rutas
rutas(app);
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).sendfile("./html/500.html")
});
app.use((req,res,next)=>{res.status(404).sendfile("./html/404.html")});
//inicio servidor
https.createServer(ssl.ssl(),app).listen(puerto.https_puerto);
http.createServer(app).listen(puerto.http_puerto);
console.log("servidor iniciado");