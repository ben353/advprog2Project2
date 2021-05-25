function detect(normal_file, anomaly_file ,algo){
    var normal = normal_file.data.toString()
    var anomaly = anomaly_file.data.toString()
    //var anomalies = "A-D: 1-8"
    var anomalies = '{"name":"John", "age":30, "city":"New York"}'
    // JSON.stringify(result) returns the text in the form of result as a text in the form of JSON 
    var send = JSON.stringify(anomalies)
    if (algo == "Regression")
    {

    }
    else if (algo == "Hybrid")
    {

    }
    //continue later
    //the func returns json file with the anomalies that were detected
    return send
}

module.exports.detect = detect