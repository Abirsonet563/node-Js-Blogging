const express = require('express');
const morgan = require('morgan')
//express App
const app = express();

//Register View Engine
app.set('view engine', 'ejs');

//Listen for Request
app.listen(3000);

//middleware and Static file
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
     const blogs = [
          {title: 'Yoshi finds eggs', snippet:'Lorem ipsum dolor sit'},
          {title: 'Yoshi finds eggs', snippet:'Lorem ipsum dolor sit'},
          {title: 'Yoshi finds eggs', snippet:'Lorem ipsum dolor sit'}
     ]
     // res.send('<p>Home Page</p>');
 res.render('index', {title: "Home", blogs});
});

app.get('/about', (req, res) => {
     // res.send('about page')
   res.render('about', {title: "About"})
});

app.get('/blogs/create', (req, res) => {
     res.render('create', {title: "Create"});
})

app.get

//redirect

app.get('/about-us', (req, res) => {
     res.redirect('/about', {title: "About"});
});

//404 Page
app.use((req, res) => {
     res.status(404).render('404', {title: "404"});
})
