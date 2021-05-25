const express = require('express')
const fileUpload = require('express-fileupload')
const model = require('../Model/DetectAnomalies')
const WebSocketServer=require('websocket').server
const WebSocketClient=require('websocket').client
const WebSocketFrame=require('websocket').frame
const WebSocketRouter=require('websocket').router
const W3CWebSocket=require('websocket').w3websocket

const app = express()
app.use(express.urlencoded({
    extended: false
}))
app.use(fileUpload())
app.use(express.static('../View'))
app.get('/', (req, res) => {
    res.sendFile('./index.html')
})
app.post('/detect', (req, res) => {
    //res.write('The anomalies which were detected in the flight file info are the following:\n')
    var chosenAlgo = req.body.algorithms
    var client = new WebSocketClient()

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
    
    if(req.files) {
        client.connect('ws://localhost:8080/','echo-protocol')
        var normal_file = req.files.normal_csv_file
        var anomaly_file = req.files.anomaly_csv_file
        var result = model.detect(normal_file, anomaly_file ,chosenAlgo)
        //res.write(result)
        res.write('{"name":"John", "age":30, "city":"New York"}')
        res.end()
    }
})
app.listen(8080, ()=>console.log("server started on port 8080"))