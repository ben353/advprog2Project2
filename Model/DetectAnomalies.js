async function detect(normal_file, anomaly_file ,algo){
    var normal = normal_file.data.toString()
    var anomaly = anomaly_file.data.toString()
    const axios = require('axios').default;
    var send = "start\n"
    send += normal
    send += "done\n"
    send += anomaly
    send += "done\n"
    if (algo == "Regression")
    {
        send += "r\n" 
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
    return await axios.post(url, send).then((response) => {
        return response
      }, (error) => {
        console.log(error.toString());
    });
}

module.exports.detect = detect