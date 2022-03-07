const express = require("express"); 
const app = express(); 
const port = 3000; 
const users = []; 
const fs = require('fs');
var bodyParser = require("body-parser");
//const { json } = require("express/lib/response");

//databse var bodyParser = require("body-parser"); 
app.use(bodyParser.json());

app.get("/", (req, res) => { 
    res.send("Hello World!"); 
}); 

app.post("/api/user", (req, res) => { 
    users.push(req.body); 
    // save data tp a json file "fs" 
    fs.appendFileSync('details.json',JSON.stringify(req.body,null,2),(err,jsonString) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(jsonString);
            //json.push(...jsonString);
        }
    })
    res.send(req.body); 
}); 

app.get("/api/user", (req, res) => { 
    res.send(users); 
     
    // fs.readFile('details.json', 'utf8' , (err, data) => { 
    //     if (err) { 
    //         console.error(err) 
    //         return 
    //     } 
    //     console.log(data) 
    // })
}); 

app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`); 
});