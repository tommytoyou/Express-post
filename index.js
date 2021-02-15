
// 1 - Enviroment
require('dotenv').config();
// 2 - Imports
const fetch = require('node-fetch');
const express = require('express');
// const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const { response } = require('express');
// 3 - App set up
const app = express();
app.set( 'view engine', 'ejs');
// 4 - App Middlewhere (app.use)
app.use(express.static(__dirname + '/public/'))
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false }));
app.use(methodOverride('_method'));
// 5 - Routes (controllers)

fetch('https://espn.com')//url endpoint
.then((response) => {
    console.log(response);
    return response.text();// an extra step that happens to see the text
})
.then((html) => {
    console.log(html);
});
// this is a request to a website that returns html

// request to a third-party database that returns a JSON object


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