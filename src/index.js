const express = require("express")
const path = require("path")
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000;
const fetch = require("node-fetch")

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.urlencoded({ extended: false }));
app.post("/search", (req, res) => {
    let name = req.body.q
    let headers = { Accept: "application/json" }
    let url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.ID}&app_key=${process.env.TOKEN}&what=${name}`
    fetch(url, { method: 'GET', headers: headers })
        .then
        (data => data.json())
        .then(result => {
            return res.send(result);
        })
})
app.use((req, res) => {
    const filePath=path.join(__dirname,"..","public","errors","404.html")
    res.status(404).sendFile(filePath);
})
app.listen(port, () => {
    console.log("server is listening")
})
module.exports=app

