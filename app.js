const WebS = require("ws")
const wss = new WebS.Server({port:3000})

//on client connection announce connection
wss.on("connection", ws => {
    console.log("connection")
    //on msg, log msg to console
    ws.on("message", msg => {
        console.log("message recieved: " + msg)
    })
});