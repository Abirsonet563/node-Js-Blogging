const express = require('express');

//express App
const app = express();

//Register View Engine
app.set('view engine', 'ejs');

//Listen for Request
app.listen(3000);

app.get('/', (req, res) => {
     // res.send('<p>Home Page</p>');
 res.render('index');
});

app.get('/about', (req, res) => {
     // res.send('about page')
   res.render('about')
});

app.get('/blogs/create', (req, res) => {
     res.render('create');
})

app.get

//redirect

app.get('/about-us', (req, res) => {
     res.redirect('/about');
});

//404 Page
app.use((req, res) => {
     res.status(404).render('404');
})
