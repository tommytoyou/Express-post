
// 1 - Enviroment
require('dotenv').config();
console.log(process.env);
console.log(process.env.API_KEY)
// 2 - Imports
const fetch = require('node-fetch');// only works in node
const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const { response } = require('express');
//3 - App set up
const app = express();
app.set( 'view engine', 'ejs');
// 4 - App Middlewhere (app.use)
app.use(express.static(__dirname + '/public/'))
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false }));
app.use(methodOverride('_method'));
// 5 - Routes (controllers)

// this is a request to a website that returns html

// fetch('https://espn.com')//url endpoint
// .then((response) => {
//     console.log(response);
//     return response.text();// an extra step that happens to see the text
// })
// .then((html) => {
//     console.log(html);
// });


// request to a third-party database that returns a JSON object

// fetch('https://api.spacexdata.com/v3/capsules')
// .then(response => {
//     return response.json(); // change this response so we can work with it in js
// })
// .then(data => {
//     console.log(data);
// })

// fetch('https://api.spacexdata.com/v3/capsules')
// .then(response => {
//     return response.json();
// })
// .then(dataArray => {
//     // console.log(dataArray); // this is an array
//     let c102Object = dataArray[1];// this is an object
//     let capsuleSerial = c102Object['capsule_serial'];
//     let capsuleStatus = c102Object.status;
//     console.log(c102Object);
//     console.log(capsuleSerial);
//     console.log(capsuleStatus);
// })

app.get('/', (req, res) => {
    res.send('Happiness is seeing this message.')

})

app.get('/post/new', (req, res)=> {
    // req.body
    res.render('show', {})
})
// ..
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
}) 