const express = require("express");
const path = require("path");

const PORT = 4000;
const log = console.log;
const app = express();

// Data Parsing
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

// app.post('/email', (req,res) => {
//   // send email here
//   console.log("Data: ", req.body);
//   sendMail();
//   res.json({message: "message recieced"})
// });

// The Server
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
});

app.get("/", function (req, res){
    res.sendFile(__dirname + "/css/style.css")
});

app.get("/", function (req, res){
    res.sendFile(__dirname + "/main.js")
});

app.listen(PORT, () => log("server is running "));
