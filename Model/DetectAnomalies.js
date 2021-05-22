function detect(normal_file, anomaly_file ,algo){
    var normal = normal_file.data.toString()
    var anomaly = anomaly_file.data.toString()
    var anomalies = "A-D: 1-8"
    if (algo == "Regression")
    {

    }
    else if (algo == "Hybrid")
    {

    }
    var jsonAnomalies = JSON.stringify(anomalies)
    //continue later
    //the func returns json file with the anomalies that were detected
    return jsonAnomalies
}

module.exports.detect = detect