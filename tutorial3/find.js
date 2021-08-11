var mongoose = require('mongoose');
var dburl = "mongodb://localhost:27017/Test";

mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true});
var dbtest = mongoose.connection;

dbtest.on("connection",function(){
    console.log("Connected Successfully");
})

dbtest.on("disconnection",function(){
    console.log("Disconnected Successfully");
})

dbtest.on('error',console.error.bind(console,'connection error:'));

var StudentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    address : String,
    roll : Number,
})

var student_obj = mongoose.model('Student',StudentSchema);

dbtest.once('open',function(){
    student_obj.find({},function(err,data){
        if(err)
        throw error;
        console.log(data);

        dbtest.close();
    })
})

