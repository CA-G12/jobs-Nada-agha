const express = require("express")
const path = require("path")
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000;
const fetch = require('node-fetch');
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/search', (req, res) => {
    let name = req.body.q
    fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
        .then(res => res.json())
        .then(text => res.send(text));

})

app.listen(port, () => {
    console.log("server is listening")
})


