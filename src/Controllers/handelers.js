const fetch = require("node-fetch")
const post=(req, res) => {

    let name = req.body.q
    let headers = { Accept: "application/json" }
    let url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.ID}&app_key=${process.env.TOKEN}&what=${name}`
    fetch(url, { method: 'GET', headers: headers })
        .then
        (data => data.json())
        .then(result => {
            return res.send(result);
        })
    }
    module.exports=post