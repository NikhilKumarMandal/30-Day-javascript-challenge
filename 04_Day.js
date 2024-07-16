

// Day 4: Loops

//Tasks/Activites:

//Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

// 1 2 3 .....10

let count = [];
for (let i = 1; i <= 10; i++) {
    count.push({numbers: i})
}

console.table(count)


// Task 2: Write a program to print the multiplication table of 5 using a for loop.


// 5 X 1 = 5
// 5 X 2 = 10
// 5 X 3 = 15


let multiplicationTable = [];

for (let i = 1; i <= 10; i++) {
    multiplicationTable.push({Multiplication: `5 X ${i}`, Result: 5 * i});
}

console.table(multiplicationTable);

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

// 1 + 2 + 3...10

let num = 1;
let sum =  0

while (num <= 10) {
    sum += num;
    num ++
}
console.log('Total Sum : ', sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

// 10 9 8 7.... 1
let i = 10;
let number = []
while (i > 0) {
    number.push({number : i})
    i--
}

console.table(number);

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

// 1 2 3 4 5

let x = 1;
let y = []
do {
    y.push({number: x})
    x++
} while (x <= 5);

console.table(y)

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

// 3 X 2 X 1 = 6

let factorial = 3;
let result = 1; 

do {
    result = result * factorial;
    factorial--;
} while (factorial > 0);

console.log(result);

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:

/*
*
* *
* * *
* * * *
*/

for (let i = 1; i <= 4; i++) {
    let rows = ''
    for (let j = 1; j <= i; j++) {
        rows += '*';
    }
    console.log(rows);
}

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10,but skip the numbers 5 using the continue statement.

let skip = []
for (let i = 0; i <= 10; i++) {
    if (i == 5) continue
    skip.push({numbers: i})   
}
console.table(skip)

// Task 9: Write a program to print numbers from 1 to 10,but stop the loop when the numbers is 7 using the break statement.

let hello = []
for (let i = 1; i <= 10; i++) {
    hello.push({numbers : i})
    if (i == 7) break;
}

console.table(hello);