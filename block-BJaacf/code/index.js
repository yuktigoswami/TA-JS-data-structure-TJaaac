// 1. Create an array named numbers and store 5 number values in it

let numbers = [10, 20, 30, 40, 50];

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("The sum of the arrsy item is:", sum);

// 3. Calculate the average of array items and print it to the console using console.log()

let average = sum / numbers.length;

console.log("The average of the array items is:", average);

// 4. Find the highest number in the array and print it to the console using console.log()

let highest = Math.max(...numbers);

console.log("The highest number in the array is:", highest);

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowest = Math.min(...numbers);

console.log("The lowest number in the array is:", lowest);

// 6. Find the even numbers in the array and print them to the console using console.log()

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("The even numbers in the array are:", evenNumbers);

// 7. Find the odd numbers in the array and print them to the console using console.log()

let oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log("The odd numbers in the array are:", oddNumbers);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

let divisibleByFive = number.filter(num => num % 5 === 0);

console.log("The numbers in the array that are divisible by 5:", divisibleByFive);

// 9. Log all the element of the array one by one

number.forEach(num => console.log(num));

// 10. Find all the number in the array that is divisible by 3
 let divisibleByThree = numbers.filter(num => num % 3 === 0);

 console.log("The number in the array that are divisible by 3:", divisibleByThree);