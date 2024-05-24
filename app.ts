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
let user :[string , number , boolean];
user = ["areeba" , 1 , true];

// data types = element value
let newUser : [number | string | number | number | string];
let newname : [1 , "areeba" , 2 , 3 , "waseem"];

// lets expalin detail tuples

// tuples v/ other data types
let empId: number = 1;
let empName: string = "hira";        

// Tuple type variable 
let employee: [number, string] = [1, "hira"];

//multiple data types
let employee1: [number, string] = [1, "hira"];
let person: [number, string, boolean] = [1, "hira", true];

let user1: [number, string, boolean, number, string];// declare tuple variable
user1 = [1, "hira", true, 20, "Admin"];// initialize tuple variable

//tuple array
let employee2: [number, string][];
employee2 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

//accessing tuples elements
//We can access tuple elements using index,
// the same way as an array. An index starts from zero.
var employee3: [number, string] = [1, "hira"];
employee[0]; // returns 1
employee[1]; // returns "hira"

//add elements in tuples
//You can add new elements to a tuple using the push() method.
var employee4: [number, string] = [1, "hira"];
employee4.push(2, "Bill"); 
console.log(employee4); //Output: [1, 'hira', 2, 'Bill']

//The tuple is like an array. So, we can use
// array methods on tuple such as pop(), concat() etc.
var employee5: [number, string] = [1, "hira"];

// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs"); 
console.log(employee); //Output: [1, 'hira Jobs']





