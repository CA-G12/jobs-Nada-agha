const path = require("path")
const notfound=(req, res) => {
    const filePath=path.join(__dirname,"..","public","errors","404.html")
    res.status(404).sendFile(filePath);
}
const servererror=(error,req, res,next) => {
    const filePath=path.join(__dirname,"..","public","errors","500.html")
    res.status(500).sendFile(filePath);
}
module.exports={
    notfound,
    servererror
}