var express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
var app = express();
var sql = require("mssql");


// configuration for your database
var configDB = {
    user: 'ADIS',
    password: 'ADIS1',
    server: 'DESKTOP-0HQQFA6',
    database: 'ADISDataBase',
    options: {
        trustServerCertificate: true,
        trustedConnection: true,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS',
    }, port: 1433,

    // connectionTimeout: 150000,
    // pool: {
    //     max: 1,
    //     min: 0,
    //     idleTimeoutMillis: 30000,
    // },
};

app.use(cors());
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

// ==========================================================================================

app.post("/api/insert", (req, res) => {


    // connect to your database
    sql.connect(configDB, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        const FisrtName = req.body.FirstName
        const LastName = req.body.LastName
        const EmailID = req.body.EmailID
        const City = req.body.City
        const CNIC = req.body.CNIC
        const Password = req.body.Password

        // if (FisrtName == "" || LastName == "" || EmailID == "" || City == "" || CNIC == "" || Password == "") {
        // query to the database and get the records
        request.query(`INSERT INTO RegisterTable(FirstName, LastName, EmailID, City, CNIC, Password) VALUES('${FisrtName}', '${LastName}', '${EmailID}', '${City}', '${CNIC}', '${Password}')`, function (err, recordset) {
            // request.query("INSERT INTO MoviesTable(movieName, movieReviews) VALUES('Evengers', 'Super good movie')", function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            console.log(recordset);


        });
        // } else(() => {
        //     alert("Please enter all data corrnetly");
        // });
    });


});

// ==========================================================================================

app.post("/adminapi/insert", (req, res) => {


    // connect to your database
    sql.connect(configDB, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        const FisrtName = req.body.FirstName
        const LastName = req.body.LastName
        const EmailID = req.body.EmailID
        const City = req.body.City
        const CNIC = req.body.CNIC
        const Password = req.body.Password

        // if (FisrtName === "" || LastName === "" || EmailID === "" || City === "" || CNIC === "" || Password === "") {
        if (FisrtName.Text === "" && LastName === "" && EmailID === "" && City === "" && CNIC === "" && Password === "") {
            // query to the database and get the records
            request.query(`INSERT INTO RegisterTable(FirstName, LastName, EmailID, City, CNIC, Password) VALUES('${FisrtName}', '${LastName}', '${EmailID}', '${City}', '${CNIC}', '${Password}')`, function (err, recordset) {
                // request.query("INSERT INTO MoviesTable(movieName, movieReviews) VALUES('Evengers', 'Super good movie')", function (err, recordset) {

                if (err) console.log(err)

                // send records as a response
                res.send(recordset);
                console.log(recordset);


            });
        } else (() => {
            alert("Please enter all data corrnetly");
        });
    });


});

// ==========================================================================================

app.post("/dataapi/insert", (req, res) => {


    // connect to your database
    sql.connect(configDB, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        const SoftwareName = req.body.SoftwareName
        const SoftwareTitle = req.body.SoftwareTitle
        const SoftwareImage = req.body.SoftwareImage
        const SoftwareKeyword = req.body.SoftwareKeyword
        // const CNIC = req.body.CNIC
        // const Password = req.body.Password

        // if (FisrtName == "" || LastName == "" || EmailID == "" || City == "" || CNIC == "" || Password == "") {
        // query to the database and get the records
        request.query(`INSERT INTO SoftwareTable(softwareName, softwareTitle, softwareImage, softwareKeyword) VALUES('${SoftwareName}', '${SoftwareTitle}', '${SoftwareImage}', '${SoftwareKeyword}')`, function (err, recordset) {
            // request.query("INSERT INTO MoviesTable(movieName, movieReviews) VALUES('Evengers', 'Super good movie')", function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            console.log(recordset);


        });
        // } else(() => {
        //     alert("Please enter all data corrnetly");
        // });
    });


});

// ==========================================================================================

app.post("/login/api", (req, res) => {

    // connect to your database
    sql.connect(configDB, function (err) {
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
        const EmailID = req.body.EmailID;
        const Password = req.body.Password;
        console.log(" Email Id ", EmailID)
        console.log(" Password ", Password)

        // if (FisrtName == "" || LastName == "" || EmailID == "" || City == "" || CNIC == "" || Password == "") {
        // query to the database and get the records
        request.query(`SELECT * FROM RegisterTable Where EmailID ='${EmailID}' AND Password='${Password}'`,
            function (err, recordset) {

                if (err) console.log(err)

                if (recordset.length > 0) {
                    res.send(recordset);
                    // alert({ message: recordset })

                    //    Console.log(recordset);
                } else {
                    res.send(recordset);

                    // console.log(recordset)   
                    // res.send({ message: "Wrong Email/Password combination!"})
                    // Console.log("Wrong Email/Password combination!")
                }
                // send records as a response
                // res.send(recordset.EmailID);
                // console.log(recordset);
                // console.log(recordset.Password);
            });
        // } else(() => {
        //     alert("Please enter all data corrnetly");
        // });
    });
});

// ==========================================================================================

app.post("/api/send", (req, res) => {
    // connect to your database
    sql.connect(configDB, function (err) {
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
        const SoftwareTitle = req.body.SoftwareTitle
        const SoftwareDirectory = req.body.SoftwareDirectory

        // query to the database and get the records
        request.query(`INSERT INTO RequestTable(SoftwareName, SoftwareDirectory) VALUES('${SoftwareTitle}', '${SoftwareDirectory}')`, function (err, recordset) {
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            console.log(recordset);
        });
        // } else(() => {
        //     alert("Please enter all data corrnetly");
        // });
    });
});

// ==========================================================================================

var server = app.listen(5000, function () {
    console.log('Server is running..');
});





        // const sqlInsert = "INSERT INTO RegisterTable(FirstName, LastName, EmailID, City, CNIC, Password) VALUES(?, ?, ?, ?, ?, ?)";

        // request.query(sqlInsert, [FisrtName, LastName, EmailID, City, CNIC, Password], (err, result) => {
        //     if (err) console.log(err)

        //     console.log(result)

        // });

        // app.get('/', function (req, res) {


// ================================+++++++++++++++++++++++++++++++++++++++++===============================



//     // connect to your database
//     sql.connect(configDB, function (err) {

//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();

//         // query to the database and get the records
//         request.query("SELECT * FROM MoviesTable where id='2'", function (err, recordset) {
//             // request.query("INSERT INTO MoviesTable(movieName, movieReviews) VALUES('Evengers', 'Super good movie')", function (err, recordset) {

//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
//             console.log(recordset);

//         });
//     });
// });
