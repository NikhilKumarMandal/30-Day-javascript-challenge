
// Day 3:Control Structures

// Tasks/Activities:

// Activity 1: if-Else Statements

// Task 1: Write a program to check if a number is postive,negative, or zero, and log the result to the console.

const num = 1;

if (num > 0) {
    console.log('number is postive');
}else if (num < 0) {
    console.log('number is negative');
} else {
    console.log('number is zero');
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.


const age = 17

if (age >= 18 ) {
    console.log('You are eligible to vote');
} else {
    console.log('You are not eligible for vote');
}

// Activity 2: Nested if-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

const num1 = 9
const num2 = 10
const num3 = 12

if (num1 > num2) {
    if (num1 > num3) {
        console.log('num1 is the largest');
    } else {
        console.log('num3 is the largest');
    }
} else {
    if (num2 > num3) {
        console.log('num2 is the largest');
    } else {
        console.log('num3 is the largest');
    }
}

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to console.

const day = 1;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday'); 
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday'); 
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day'); 
        break;
}

// Task 5: Write a program that uses a switch case to assign a grade('A','B','C','D','F') based on a score log the grade to the console.


const score = 85;
let gradeCategory;

if (score >= 90 && score <= 100) {
    gradeCategory = 'A';
} else if (score >= 80 && score < 90) {
    gradeCategory = 'B';
} else if (score >= 70 && score < 80) {
    gradeCategory = 'C';
} else if (score >= 60 && score < 70) {
    gradeCategory = 'D';
} else if (score < 60) {
    gradeCategory = 'F';
}

switch (gradeCategory) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    case 'D':
        console.log('D');
        break;
    case 'F':
        console.log('F');
        break;
    default:
        console.log('Invalid score');
        break;
}

// Activity 4: Condtional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.


const num4 = 6

num4 % 2 == 0 ? console.log('This is even number') : console.log('This is odd number'); 

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using mutiple condtions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.


let year = 2024

   
if ((year % 4 === 0 && year !== 100) || year % 400 === 0 ) {
    console.log(`${year} is a leap year.`);
} else {
     console.log(`${year} is not a leap year.`);
}



