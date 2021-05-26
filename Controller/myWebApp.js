const express = require('express')
const fileUpload = require('express-fileupload')
const model = require('../Model/DetectAnomalies')

// usage of server
/*
const WebSocketServer=require('websocket').server
const WebSocketClient=require('websocket').client
const WebSocketFrame=require('websocket').frame
const WebSocketRouter=require('websocket').router
const W3CWebSocket=require('websocket').w3websocket
*/

const app = express()
// usage of server
/*const client = new WebSocketClient()

client.on('connectFailed', function(error){
    console.log('Connect Error: ' + error.toString())
})
client.on('connect', function(connection){
    console.log('WebSocket Client Connected')
    connection.on('error', function(error){
        console.log('Connect Error: ' + error.toString())
    })
    connection.on('close', function(){
        console.log('echo-protocol Connection Closed')
    })
    connection.on('message', function(message){
        if(message.type === 'utf8'){
            console.log("Received: '" + message.utf8Data + "'")
        }
    })

    function sendNumber(){
        if(connection.connected){
            var number = Math.round(Math.random()*0xFFFFFF)
            connection.sendUTF(number.toString())
            setTimeout(sendNumber, 1000)
        }
    }
    sendNumber()
})
client.connect('ws://localhost:8080/','echo-protocol')*/

app.use(express.urlencoded({
    extended: false
}))
app.use(fileUpload())
app.use(express.static('../View'))
app.get('/', (req, res) => {
    res.sendFile('./index.html')
})

app.post('/detect', (req, res) => {
    var chosenAlgo = req.body.algorithms
    if(req.files) {
        var normal_file = req.files.normal_csv_file
        var anomaly_file = req.files.anomaly_csv_file
        var result = model.detect(normal_file, anomaly_file ,chosenAlgo)
        // JSON.parse(txt) converts a text in the form of JSON into the form of txt
        res.write(JSON.parse(result))
        res.end()
    }
})
app.listen(8080, ()=>console.log("server started on port 8080"))