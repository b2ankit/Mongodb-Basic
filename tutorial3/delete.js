var mongoose = require('mongoose');
var dburl = "mongodb://localhost:27017/Test";

mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true});
var dbtest = mongoose.connection;

dbtest.on("connected",function(){
    console.log("Connected : Sucessfully");
})

dbtest.on("disconnected",function(){
    console.log("Disconnected : Sucessfully")
})

dbtest.on('error',console.error.bind(console ,'connection error:'));

var StudentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    address : String,
    roll : Number,
});

var Student_obj = mongoose.model('Student',StudentSchema);

dbtest.once('open',function(){
    Student_obj.find({},function(err,data){
        if(err)
            throw error;

        console.log(data);
        dbtest.close();
    });
});

dbtest.once('open',function(){
    Student_obj.deleteOne({name:"Bittu"},function(err){
        if(err)
            throw error;
        console.log('Data Deleted Successfully');
        dbtest.close();
    });
});

dbtest.once('open',function(){
    Student_obj.find({},function(err,data){
        if(err)
            throw error;
        console.log(data);

        dbtest.close();
    });
});