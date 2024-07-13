

// Day 1: Variables and Data Types

//Tasks/Activites:

// Activity1: Variable Declaration

// Task 1: Declare a variable using  var, assign it a number, and log the value to the console.

var num = 7;
console.log(num);

// Task 2: Decalre a variable using let,assign it a string, and log the value to the console

let hello = 'Hello World!'
console.log(hello);


// Activity 2: Constant Declaration

// Task 3: Declare a variable using const,assign it a boolean value, and log the value to the console

const trueOrFalse = true
console.log(trueOrFalse)

// Activity 3: Data Types

// Task 4: Create variable of different data types (numbers,string,boolean,object,array) and log each variable's type using the typeof operator

const number = 3;
const string = 'nikhil';
const boolean = true;
const object = {
    name: "nikhil",
    sem: 3,
    colleage: "P.k,Roy Memorial colleage"
}
const array = [1, 2, 3, 'R', 8]

console.log(number, typeof number );
console.log(string, typeof string);
console.log(boolean, typeof boolean);
console.log(object, typeof object);
console.log(array, typeof array);

// Activity 4: Reassigning Variables

// Task 5: Declare a variables using let,assign it an inital value,reassign a new value,and log both values to the console.

let x = 5
console.log(x);
x = 6
console.log(x);

// Activity 5: Understanding const

//Task 6: Try reassigning a variable declared with const and observe the error.

//-------------------------------------

// Attempting to reassign a const variable will cause a TypeError: Assignment to constant variable.
const y = 'hello'

y = 'nikhil'