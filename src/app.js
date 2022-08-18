const router = require('./controllers/index')
const express = require('express');
const path = require('path');

const app = express();

app.disable('x-powered-by');  

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.urlencoded({ extended: false }));
app.use(router)
module.exports = {
    express,
    path,
    
    app
 }