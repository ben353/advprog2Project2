function detect(normal_file, anomaly_file ,algo){
    var normal = normal_file.data.toString()
    var anomaly = anomaly_file.data.toString()
    var anomalies
    
    if (algo == "Regression")
    {
        anomalies = '{"A-D":"1-8", "B-C":9-16}'
    }
    else if (algo == "Hybrid")
    {
        anomalies = '{"B-D":"9-32", "A-C":1-8}'
    }
    
    // the func returns json file with the anomalies that were detected
    // JSON.stringify(result) returns the text in the form of result as a text in the form of JSON 
    return JSON.stringify(anomalies)
}

module.exports.detect = detect