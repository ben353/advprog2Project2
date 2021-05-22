const express = require('express')
const fileUpload = require('express-fileupload')
const model = require('../Model/DetectAnomalies')

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
    if(req.files) {
        var normal_file = req.files.normal_csv_file
        var anomaly_file = req.files.anomaly_csv_file
        var result = model.detect(normal_file, anomaly_file ,chosenAlgo)
        //res.write(result)
        res.write('{"name":"John", "age":30, "city":"New York"}')
        res.end()
    }
})
app.listen(8080, ()=>console.log("server started on port 8080"))