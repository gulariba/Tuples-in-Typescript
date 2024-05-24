//what is tuples?
//A tuple is a type in TypeScript
// that is used to represent an array
// in which the type of a fixed number
// of elements is known, but not 
//for all the elements. 
//It provides a way to represent
// the ordered set of the element
// types for certain elements in a
// TypeScript array.
// A tuple always has a fixed number
// of elements and each one of them
// has their types associated with them.
//const tupleName: [ type1, type2, type3 ];
//this is a data type of typescript
//const user : (string | number | boolean) [] = [1 ,"areeba" ,true];
var user;
user = ["areeba", 1, true];
// data types = element value
var newUser;
var newname;
// lets expalin detail tuples
// tuples v/ other data types
var empId = 1;
var empName = "hira";
// Tuple type variable 
var employee = [1, "hira"];
//multiple data types
var employee1 = [1, "hira"];
var person = [1, "hira", true];
var user1; // declare tuple variable
user1 = [1, "hira", true, 20, "Admin"]; // initialize tuple variable
//tuple array
var employee2;
employee2 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
//accessing tuples elements
//We can access tuple elements using index,
// the same way as an array. An index starts from zero.
var employee3 = [1, "hira"];
employee[0]; // returns 1
employee[1]; // returns "hira"
//add elements in tuples
//You can add new elements to a tuple using the push() method.
var employee4 = [1, "hira"];
employee4.push(2, "Bill");
console.log(employee4); //Output: [1, 'hira', 2, 'Bill']
//The tuple is like an array. So, we can use
// array methods on tuple such as pop(), concat() etc.
var employee5 = [1, "hira"];
// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs");
console.log(employee); //Output: [1, 'hira Jobs']
