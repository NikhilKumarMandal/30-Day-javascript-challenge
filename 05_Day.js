

// Day 5: Functions

// Tasks/Activites:

// Activity 1:Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function isEvenOrOdd(number) {
    const result = number % 2 === 0 ? 'even' : 'odd';
    console.log(`The number ${number} is ${result}.`);
}

isEvenOrOdd(5);

// Task 2: Write a function to calculate the square of a number and return the result.

function sqaureOfNumber(num) {
    return console.log(`Sqaure of ${num} is ${num * num} `);
    
}

sqaureOfNumber(5)

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

// function isMaximum(num1,num2) {
//     return Math.max(num1, num2)
// }

function isMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(isMaximum(5,3));


// Task 4: Write a function expression to concatenate two string and return the result.

function concatenate(str1, str2) {
    return str1 + str2 
}

console.log(concatenate('hello', 'world'));

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calcuate the sum of two numbers and return the result.

const sumOfTwoNumber = (num1,num2) => {
    return num1 + num2
}

console.log(sumOfTwoNumber(2,3));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

// const containsCharacter = (str, char) => {
//     return str.includes(char);
// }

// console.log(containsCharacter('hello','h'));

const specificChar = (string,char) => {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            return true
        }        
    }
    return false
}

console.log(specificChar('hello', 'a'));

// Activity 4: Fuction Parameters and Default Values

// Task 7: Write a function that takes two parameters and return their product.Provide a default value for the second parameters.

function parameter(para1, para2 = 5) {
    return para1 * para2
}

console.log(parameter(5));

// Task 8: Write a function that takes a person's name and ages and return a greeting message.Provide a default value for the age.


function greeting(name, age=18) {
    return `Namaste ${name}, your age is ${age}.`;
}

console.log(greeting('nikhil'));

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number,and calls the function that many times.

function func(name) {
    console.log(`hello ${name}`);
}

function hof(func, times, name) {
    for (let i = 0; i < times; i++) {
       func(name); 
    }
}

hof(func, 5, 'nikhil');


// Task 10: Write a higher-order function that takes two function and a value,applies the first function to the value, and then applies the second function to the result.


function hello(func1, func2, value) {
    return func2(func1(value));
}

function multiplyByTwo(num) {
    return num * 2;
}

function addThree(num) {
    return num + 3;
}

const result = hello(multiplyByTwo, addThree, 5);
console.log(result); 