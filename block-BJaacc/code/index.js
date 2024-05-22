// 1. Define a variable named `students` and assign a blank object to it.

let students = {};

// 2. Add a key of the value of variable `studentName` in the object created above with the value of your name.

let studentName = "Yukti";
students[studentName] = "Yukti";

// 3. Using `console.log` log the value of `studentName` key from the `students` object

console.log = (students[studentName]);

// 4. Add a another key of the value of variable `batch` in the object with the value of 16.

let batch = 16;
students.batch = batch;

// 5. Using `console.log` log the value of `batch` key from the `students` object

console.log (students.batch);

// 6. Add another key in the object with the value of the variable `isAdult`. The value of the key should be `true/false`

let isAdult = true;
students.isAdult = isAdult;

// 7. Using `console.log` print the value of `isAdult` key from the `students` object

console.log (students.isAdult);

// 8. Add a another key of `42` to the object with a value of `The answer to the meaning of life`.

students[42] = 'The answer to the meaning of life';

// 9. Using `console.log` print the value of key `42` from the `students` object

console.log (students[42]);

// 10. Check the length of object named `students`.

let numberOfKey = Object.keys(students).length;
console.log(numberOfKeys);

// 11. Can you define a key of `let or var` in any object? Reason.


//In JavaScript, we can define a key of let or var in an object. However, doing so might not be very useful or conventional because let and var are keywords used for variable declaration within the scope of functions or blocks, not for object keys.
//some ex are -

let obj = {
    let: 'value for let key',
    var: 'value for var key'
};

//However, accessing these keys would be cumbersome and not recommended, as you would have to use bracket notation like obj['let'] or obj['var']. Additionally, it could lead to confusion and make the code harder to read and understand.
//Its generally better to use meaningful and descriptive keys in objects to make your code more readable and maintainable. Using reserved keywords like let or var as keys can lead to confusion and should be avoided.

// 12. Delete the `isAdult` property from the object `students`. Also, print the object before or after deleting the property

console.log("Before deletion:", students);
delete students.isAdult;
console.log("After deletion:", students);

// 13. Update the value of the key batch in the object `students` and print it using `console.log`

students.batch = 17;
console.log(students);
