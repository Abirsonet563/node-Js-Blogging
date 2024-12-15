const express = require('express');

//express App
const app = express();

//Listen for Request
app.listen(3000);

app.get('/', (req, res) => {
     // res.send('<p>Home Page</p>');
     res.sendFile('./view/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
     // res.send('about page')
     res.sendFile('./view/about.html', {root: __dirname})
})