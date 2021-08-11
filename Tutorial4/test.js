var exVar = require('./main');

/**
 * Reading the data from Database
 */
exVar.dbtest_ex.once('open',function(){
    exVar.student_object.find({},function(err,data){
        if(err)
            throw error;
        console.log(data);
        exVar.dbtest_ex.close();
    });
});

/**
 * Updating data in Data base
 */
 exVar.dbtest_ex.once('open',function(){
    exVar.student_object.updateOne({name:'Ankit'},{name:'Ankit54'},function(err,data){
        if(err)
            throw error;
        console.log("data Updated Successfully");
        exVar.dbtest_ex.close();
    });
});

exVar.dbtest_ex.once('open',function(){
    exVar.student_object.find({},function(err,data){
        if(err)
            throw error;
        console.log(data);
        exVar.dbtest_ex.close();
    });
});

/**
 * Deleting data from database
 */

 exVar.dbtest_ex.once('open',function(){
    exVar.student_object.deleteOne({name:'Bittu'},function(err,data){
        if(err)
            throw error;
        console.log("data Deleted Successfully");
        exVar.dbtest_ex.close();
    });
});

exVar.dbtest_ex.once('open',function(){
    exVar.student_object.find({},function(err,data){
        if(err)
            throw error;
        console.log(data);
        exVar.dbtest_ex.close();
    });
});
