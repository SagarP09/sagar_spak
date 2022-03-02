const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// var express = require('express');
// const app = express();
app.use(express.json());
 
app.get('/', function (req, res) {
    console.log("GET Request Received");
    res.send(`
<h2 style= "font-family: Malgun Gothic; color: blue; "> Welcome to Express.js Tutorial!</h2>`);
})
 
app.post('/addcourse', function (req, res) {
    console.log("POST Request Received");
    res.send(`
<h2 style="font-family: Malgun Gothic; color: green; ">A course new Course is Added!</h2>
 
`);
})
app.delete('/delete', function (req, res) {
    console.log("DELETE Request Received");
    res.send(`
<h2 style="font-family: Malgun Gothic; color: darkred;">A Course has been Deleted!!</h2>
 
 `);
})
app.get('/course', function (req, res) {
    console.log("GET Request received for /course URI");
    res.send(`
<h2 style="font-family: Malgun Gothic; color:blue;">This is an Available Course!</h2>
 
`);
})
 
//PORT ENVIRONMENT VARIABLE
const pport = process.env.PORT || 3000;
app.listen(pport, () => console.log(`Listening on port http://localhost:${pport}..`));