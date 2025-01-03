const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const userRoute = require('./routes/user');
const homeRoute = require('./routes/home'); 

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', homeRoute);
app.use('/', userRoute);


app.listen(PORT, () => {
    console.log(`Is running in url: http://localhost:${PORT}`);
})