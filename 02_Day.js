

// Day 2: Operators


// Tasks/Activites:

// Activity 1: Arthmetic Operations

// Task 1: write a program to add two numbers and log the result to the console

const addToNum = 2 + 5
console.log(addToNum);

// Task 2: Write a program to substract two numbers and log the result to the console

const subTwoNum = 5 - 2
console.log(subTwoNum);

// Task 3: Write a program to multiply two numbers and log the result to the console

const multTwoNum = 2 * 5
console.log(multTwoNum);

// Task 4: Write a program to divide two numbers and log the result to the console.

const dividedTwoNum = 4 / 2
console.log(dividedTwoNum);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console


const remainderOfTwoNum = 5 % 2
console.log(remainderOfTwoNum);

// Activity 2: Assigment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

const first = 5;
let  second = 4

second += first
console.log(second);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

const subFirst = 5;
let subSecond = 2;

subSecond -= subFirst
console.log(subSecond);

// Activity 3: Comparison Operators

// Task 8 : Write a program to compare two numbers using > and < and log the result to the console.

let num1 = 2
let num2 = 3

if (num1 > num2) {
    console.log('I am grater');
} else if (num1 < num2) {
    console.log('I am lesser');
} else {
    console.log('Hello world');
}

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let num3 = 5;
let num4 = 5;

if (num3 >= num4) {
    console.log('Greater than or equal to');
} else {
    console.log('Lower than or equal to');
}

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let num5 = 6
let num6 = '6'

if (num5 == num6) {
    console.log('Both are equal in value');
}else if (num5 === num6) {
    console.log('Both are equal in value and type');
} else {
    console.log('They are not equal in type or value');
}

// Activity 4: LOgical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

const imStudent = true;
const imDevloper = false;

console.log(imDevloper && imStudent); // false

if (imStudent && imDevloper) {
    console.log('Nikhil is student plus developer');
} else {
    console.log('Nikhil is student only');
}

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

const student = true;
const developer = false;

console.log(student || developer);


// Task 13: Write a program that uses thq ! operator to negate a condtions and log the result to the console.

const isloggedIn = true
const isActive = true

if (isloggedIn && isActive) {
    console.log('User is logged In and active');
} else if (!isActive) {
    console.log("User is not active");
} else {
    console.log("User is not logged in");
}


// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is postive or negative and log the result to the console.

const result = -1

console.log(result > 0 ? 'number is positive' : result < 0 ? 'number is negative' : 'number is zero');