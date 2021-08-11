console.log("Welcome to MongoDb Tutorial 1");
var mongoose = require('mongoose'); //importing Mongoose Module


/**
 * 
 * Defining Schema of a employees
 */
var employeeSchema = new mongoose.Schema({
    name : String,
    email : String,
    etype : String,
    hourlyrate : Number,
    totalHour : Number,
    total : Number,
});

/**
 * 
 * Defining a methods to print total salary
 */
employeeSchema.methods.totalSalary = function()
{
    console.log("Total Income of %s : Rs. %d",this.name,(this.hourlyrate * this.totalHour));
}

/**
 * 
 * @returns total salary of Employee
 */
employeeSchema.methods.calSalary = function()
{
    return this.hourlyrate * this.totalHour;
}


/**
 * Creating object of Schema
 */
var employeeModel = mongoose.model('Employee',employeeSchema);

/**
 * Adding deatils of a employee
 */
var employees = new employeeModel({
    name : 'Ankit',
    email : 'ankit@gmail.com',
    etype : 'fixed',
    hourlyrate : 2000,
    totalHour : 25,
    
})


employees.totalSalary();
employees.total = employees.calSalary();
console.log(employees);
