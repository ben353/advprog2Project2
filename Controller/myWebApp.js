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
    res.write('searching for ' + req.body.key +':\n')
    var chosenAlgo = req.body.algorithms //look into it later
    if(req.files) {
        var normal_file = req.files.normal_csv_file
        var anomaly_file = req.files.anomaly_csv_file
        var result = model.putFunctionHere(normal_file, anomaly_file ,chosenAlgo)
        res.write(result)
    }
    res.end()
})
app.listen(8080, ()=>console.log("server started on port 8080"))