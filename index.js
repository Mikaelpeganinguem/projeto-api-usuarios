const express = require('express');
const app = express();


const userRoute = require('./routes/user');
const homeRoute = require('./routes/home'); 

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', homeRoute);
app.use('/', userRoute);


app.listen(PORT, () => {
    console.log(`Is running in url: http://localhost:${PORT}`);
})