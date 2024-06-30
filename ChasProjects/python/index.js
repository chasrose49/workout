let express=require('express')
var app = express();
const exec = require('child_process').exec;
var output = '';
var child = exec('python myFile.py');

child.stdout.on('data', function(data) {
    output += data;
 });   
app.get("/", function(req,res){
     res.status(200).send(output)
})
app.get("/yoda", function(req,res){
console.log(output)
output;
    //  res.send(output)
})
 





child.on('close', function(code) {
  
  console.log(code);




});



    





app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});

