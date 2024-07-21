

// Day 6: Arrays

// Tasks/Activites:

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.


const arr = [1, 2, 3, 4, 5]
console.log(arr);

// Task 2: Access the first and last elements of the array and log them to the console.

const firstElement = arr[0];
const lastElement = arr[arr.length - 1];

console.log(firstElement);
console.log(lastElement);

// Activity 2: Array methods(Basic)

// Task 3: Use the push method to add a new numbers to the end of the array and log the updated array.

arr.push(6, 7)
arr.push(8)
console.log(arr);

// Task 4: Use the pop method to remove the last elements from the array and log the updated array.

arr.pop()
console.log(arr);

// Task 5: Use the shift method to remove the first elements from the array and log the updated array.

arr.shift()
console.log(arr);

// Tasks 6: Use the unshift method to add a new numbers to the beginning of the array and log the updated array.

arr.unshift(1)
console.log(arr);

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each numbers is double and log the new array.

const double = arr.map((item) => item * 2)
console.log(double);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const evenNum = arr.filter((item) => item % 2 === 0)
console.log(evenNum);

// Task 9: use the reduce method to calculate the sum of all numbers in the array and log the result.



// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         sum = sum + arr1[i]
//     }
//     return sum
// }

// console.log(sumOfArray(arr1));
const arr1 = [1, 2, 3, 4, 5, 6];

const sumOfArray = arr1.reduce((acc, curr) => (
    acc = acc + curr
)) 

console.log(sumOfArray);

// Activity 4: Array iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.



for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}


// Task 11: Use the forEach method to iterate over the array and log each elements to the console.

const foreach = arr1.forEach((item) => console.log(item))


// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array(matrix) amd log the entire array to the console.

let array = [
    [1, 2, 3, 4, 5, 6],
    [1, 2,3, 4, 5, 6] 
]

console.log(array);

// task 13: Access and log a specific elements from the two-dimensional array.

console.log(array[0][1]);
