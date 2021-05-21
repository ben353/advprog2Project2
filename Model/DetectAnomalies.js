function detect(normal_file, anomaly_file ,algo){
    var normal = normal_file.data.toString()
    var anomaly = anomaly_file.data.toString()
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
}

module.exports.detect = detect