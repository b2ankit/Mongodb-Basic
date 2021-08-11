var mongoose = require('mongoose');
var dburl = "mongodb://localhost:27017/Test";


mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true});
var dbtest = mongoose.connection;

var StudentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    address : String,
    roll : Number,
})


var student_obj = mongoose.model('Student',StudentSchema);

dbtest.on("connected",function(){
    console.log("Connected Successfully");
})

dbtest.on("disconnected",function(){
    console.log("Disconnected Successfully");
})

dbtest.on('error',console.error.bind(console,'connection error:'));

module.exports = {
    student_object : student_obj,
    dbtest_ex :dbtest,

}