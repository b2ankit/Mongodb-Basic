console.log("Welcome to mongodb Baseic tutorial series !!");

var mongoose = require('mongoose');
var dburl = "mongodb://localhost:27017/Test";
var user_name = "Bittu";
var user_age = 23;
var user_email = "bittu@gmail.com";
var user_address = "Chapra"
var user_roll = 2;


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

var student2 = new student_obj({
    name : user_name,
    age : user_age,
    email : user_email,
    address : user_address,
    roll : user_roll,
}) 

dbtest.on("connected",function(){
    console.log("Connected Successfully");
})

dbtest.on("disconnected",function(){
    console.log("Disconnected Successfully");
})

dbtest.on('error',console.error.bind(console,'connection error:'));

dbtest.once('open',function(){
    student2.save(function(err,res){
        if(err)
        throw error;
        console.log("Data Inserted : Successfully");
        dbtest.close();
    })
});