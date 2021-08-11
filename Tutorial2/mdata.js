var mongoose = require('mongoose');
var dbUrl  = "mongodb://localhost:27017/Test";

/**
 * opening a connection fior Test Database
 */
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
var dbtest = mongoose.connection;

/**
 * Defining Schema for Student
 */
var StudentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    address : String,
    roll : Number,
}) 

/**
 * Creating Object of Scehma
 */
var student_obj = mongoose.model('Student',StudentSchema);

var student1 = new student_obj({
    name : "Ankit",
    age : 24,
    email : "ankit19351@gmail.com",
    address : "Jalalpur, Saran",
    roll : 1,
})


/**
 * checking is the connection happend sucessfully ot there is failure happend.
 */
dbtest.on("connected",function(){
    console.log("Connected Successfully");
})

dbtest.on("disconnected",function(){
    console.log("Disconnected Successfully");
})

dbtest.on('error', console.error.bind(console, 'connection error:'));


/**
 * opening the db
 */
dbtest.once('open',function(){

/**
* Saving the  data in db
*/
student1.save(function(err,res){
    if(err)
        throw err;
    console.log(res);
    dbtest.close(); /** closing the db */
});

    
});


