async function detect(normal_file, anomaly_file ,algo){
    var normal = normal_file.data.toString()
    var anomaly = anomaly_file.data.toString()
    //var net = require('net');
    const axios = require('axios').default;
    var host = 'localhost';
    var port = 7550;
    //var socket = new net.Socket();
    // socket.on('data', (data) => {
    console.log("in\n")
    //    console.log(`${data}`);
    //    socket.destroy();
    // });
    var send = "start\n"
    var received
    send += normal
    send += "done\n"
    send += anomaly
    send += "done\n"
    if (algo == "Regression")
    {
        send += "r\n" //simple
    }
    else if (algo == "Hybrid")
    {
        send += "h\n"
    }
    else
    {                                                                      
        console.log("in index.html the value of options is *not* in algo") 
    }
    
    
    var url = "http://localhost:7550/"
    return await axios.post(url, send).then(function (response) {
        return response
      })



    // return await socket.connect(port, host, () => {
    //     socket.write(send);
    //     console.log("write")
    //     return socket.read()
    //     // received = socket.read()
    //     // console.log("rec=" + received)
    // });

    // socket.setTimeout(1000*30)
    // socket.on('data', function(data) {
    //     console.log('Received: ' + data);
    //     received = data
    //     socket.destroy(); 
    // });

    // socket.on('timeout', function(timedOutSocket) {
    //     timedOutSocket.write('socket timed out!');
    //     timedOutSocket.end();
    //   });
    
    // socket.on('close', function() {
    //     console.log('Connection closed');
    // });

    // return received
    //console.log(received)
    //continue later
    //the func returns json file with the anomalies that were detected
    //var text = {"First":"Hello", "Second":"World"}
    //return received
}

module.exports.detect = detect