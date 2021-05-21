function detect(normal_file, anomaly_file ,algo){
    var normal = normal_file.data.toString()
    var anomaly = anomaly_file.data.toString()
    console.log(algo)
    if (algo == "Regression")
    {

    }
    else if (algo == "Hybrid")
    {

    }
    else
    {                                                                      //delete
        console.log("in index.html the value of options is *not* in algo") //delete
    }                                                                      //delete
    //continue later
    //the func returns json file with the anomalies that were detected
}

module.exports.detect = detect