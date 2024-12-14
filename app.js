const express = require('express');

//express App
const app = express();

//Listen for Request
app.listen(3000);

app.get('/', (req, res) => {
     res.send('<p>Home Page</p>');
})