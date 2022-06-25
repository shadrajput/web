// import express from 'express';
// var app = express();
// import { createConnection, createPool } from "mysql";
// import bodyParser from "body-parser";
// import path from 'path';
// const __dirname = path.resolve();

// // var con = createConnection({
// //   host:"localhost",
// //   user:"root",
// //   password:"",
// //   database:"customer_details"
// // });


// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended : true}));

// app.get("/",function(req,res){
//     res.sendFile(__dirname+'/contect.html');
// })

// // app.post('/contact',function(req,res){
// //   var fname = req.body.fname;
// //   var number = req.body.number;
// //   var email = req.body.email;
// //   var message = req.body.message;

// //   con.connect(function(error){
// //       if(error) throw error;
      
// //       var sql = "INSERT INTO contect(fname,number,email,message) VALUES('"+fname+"','"+number+"','"+email+"','"+message+"')";
// //       con.query(sql,function(error,result){
// //           if(error) throw error;
// //           res.sendFile(__dirname+'/contect.html');
// //           res.send('Contect send '+ result.insertId);
// //       });
      
// //     });
// //   });

// var pool        = createPool({
//     connectionLimit : 10, // default = 10
//     host            : 'localhost',
//     user            : 'root',
//     password        : '',
//     database        : 'customer_details'
// });
  
// app.post('/contact', function (req, res) {
//   var fname = req.body.fname;
//   var number = req.body.number;
//   var email = req.body.email;
//   var message = req.body.message;

//     pool.getConnection(function (err, connection) {
//         connection.query("INSERT INTO contect(fname,number,email,message) VALUES('"+fname+"','"+number+"','"+email+"','"+message+"')", function (err, rows) {
//             connection.release();
//             if (err) throw err;

//             console.log(rows.length);
//             res.send(JSON.stringify(rows));
//         });
//     });
// });
  

// app.listen(7100, () => {
//   console.log("listening on port 7100");
// });