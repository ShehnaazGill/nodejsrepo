const express = require('express')
const app = express();

console.log("Express Js");

// app.get('' , (req , res) => {
//     res.send("Hello");
// })

//////////// RENDER HTML

// app.get('' , (req , res) => {
//     res.send("<h1>Render HTML</h1>");
// })

// app.get('' , (req , res) => {
//     res.send(`<h1>Render HTML</h1> <a href="/about">About</a> <br></br> <a href="/help">Help</a>`);
// })

// app.get('' , (req , res) => {
//     console.log("data" , req.query.name);
//     res.send(`<h1>Render HTML</h1> <a href="/about">About</a> <br></br> <a href="/help">Help</a>`);
// })

///////////

// app.get('/about' , (req , res) => {
//     res.send("Hii , About Page Is Here.");
// })

// app.get('/help' , (req , res) => {
//     res.send("Hii , Help Page Is Here.");
// })

//////// RENDER JSON DATA

// app.get('' , (req , res) => {
//     res.send({
//         name: 'shehnaaz',
//         email: 'snagill123@gmail.com'
//     })
// })

/////////

app.get('' , (req , res) => {
    res.send([
        {
        name: 'Shehnaaz',
        email: 'snagill123@gmail.com'
    }, {
        name: 'Rahul Gill',
        email: 'rahulgill123@gmail.com'
    }, {
        name: 'Sanju',
        email: 'snagill123@gmail.com'
    }
    ])
})

app.listen(5000)
