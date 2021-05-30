## Readme : Semester Bet Project 2 - Anomaly Detection WebApp

#### 1.Explanation about the project
This program's project is made to stimulate a web page which detects anomalies in a flight data file by using 2 csv files: a regular flight and an anomaly filght, and displayes them over the page using a specific algorithm.
Here is a visual display of the usage of the web page:

The initial view of the page: 
<img src="https://user-images.githubusercontent.com/59266362/120078640-0f1d6700-c0b9-11eb-9f57-79e3fbb05d92.png" width="3000" height="500">

The settings covered with the Regression based algorithm:
<img src="https://user-images.githubusercontent.com/59266362/120078750-ae425e80-c0b9-11eb-82f1-49e376dd1a6e.png" width="3000" height="500">

The settings covered with the Hybrid algorithm:
<img src="https://user-images.githubusercontent.com/59266362/120078826-f6fa1780-c0b9-11eb-8997-e66e8ae148cd.png" width="3000" height="500">

The final product of the page:
<img src="https://user-images.githubusercontent.com/59266362/120078860-16914000-c0ba-11eb-8d93-13fa4cff0f8f.png" width="3000" height="500">


#### 2.Explanation about the structure and files arrangement
According to the MVC data structure for the WebApp, the code files in this project are devided into 3 folders:Controler, Model and View, this way we can represent our work in the right flow of the information which passes through each structure.
The file in the Controller folder is myWebApp.js which is in charge of connecting between the detection process and its representation on the web page.
The file in the Model folder is DetectAnomalies.js which is in charge of the detection process done on the requested files by the chosen algorithm: regression or hybrid.
The file in the View folder is index.html which is charge of displaying the visuality of the project.

#### 3.Prerequisite
Pre-aquired programs to be installed before initial running:

## Javascript Library:
Node npm via this link:https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
After install on your vsc, write these in the terminal:
1.) npm i express- in order to install the express library.
2.) npm i express-fileupload- in order to install the neccessary fileupload library.
3.) node myWebApp.js- in order to run the main server in parallel to the c++ server, on localhost:8080.

## Cpp Server for the project:
C++ server via this link:https://github.com/ben353/CppServerForProject2
After downloading the files, run them through linux using ubuntu on your vsc and write these in the terminal in parallel to the run of the js server:
1.) g++ -pthread main.cpp anomaly_detection_util.cpp HybridAnomalyDetector.cpp minCircle.cpp SimpleAnomalyDetector.cpp timeseries.cpp CLI.cpp Server.cpp- in order to compile the server.
2.) ./a.out- in order to run the server on localhost:7550. 

#### 4.Further Documentation
The UML file which represents the connection between the different structures in the project is available via this link: 
https://github.com/ben353/advprog2Project2/files/6565365/AnomalyDetectionWebAppUML.pdf


#### 5.Video 
Link to the video that shows the user stories: https://youtu.be/9lpEeVVw1mw
