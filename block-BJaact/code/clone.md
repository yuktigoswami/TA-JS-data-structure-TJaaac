1. Write the output with reason

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

let person2 = person;

person.firstName = 'Arya';

console.log(person2.firstName); // Arya
// Reason: person2 references the same object as person, and them firstName property was changed to 'Arya'.

console.log(person.firstName); // Arya
// Reason: The firstName of person was explicitly updated.

console.log(person.lastName); // Doe
// Reason: The lastName property was never modified.

console.log(person == person2); // True
// Reason: Both person and person2 reference the same object in memory.

console.log(person === person2); // True
// Reason: === also checks reference equality for objects. Both point to the same object.

console.log(person.lastName === person2.lastName); // True
// Reason: lastName is a primitive ('Doe'), and both objects share the same value, hence strict equality returns true.
```

2. Write the output with reason:

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person };

person.firstName = 'Arya';
person.city = 'Navada';

console.log(personTwo.firstName); // 'John'
// Because firstName is a primitive and was shallow copied, not affected by person.firstName change.
console.log(person.firstName); // 'Arya'
// Because firstName was modified in person).
console.log(personTwo.lastName); // 'Doe'
// Because Unchanged, copied by value.
console.log(person.firstName === personTwo.firstName); // False 
// Because 'Arya' !== 'John'
console.log(person == personTwo); // False 
//  Different objects in memory.
console.log(person === personTwo); // false 
//  Different objects in memory.
console.log(person.address === personTwo.address); // true 
// Because both refer to the same address object
console.log(person.address == personTwo.address); // true 
// Because same reason as above
console.log(personTwo.address.city); // 'San Jose'
// Because Even though person.city = 'Navada', that’s a new top-level property and does not affect `address`.
console.log(person.address.city); // 'San Jose'
//Because No change was made to the `address.city` field
console.log(person.address.city == personTwo.address.city); // true 
// Because Both point to the same string: 'San Jose'
```

3. Write the output with reason:

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person, address: { ...person.address } };

person.firstName = 'Arya';
person.city = 'Navada';

console.log(personTwo.firstName); // 'John' 
// Because personTwo got a copy of 'John', and is unaffected by the change to person.firstName.
console.log(person.firstName); // 'Arya' 
// Because Changed after the copy
console.log(personTwo.lastName); // 'Doe' 
// Because Copied as primitive, remains unchanged
console.log(person.firstName === personTwo.firstName); // false
// Because 'Arya' !== 'John'
console.log(person == personTwo); // false
// Because they are different objects
console.log(person === personTwo); // false 
// Because they are different objects
console.log(person.address === personTwo.address); // false 
// Because they are different objects 'personTwo.address' is a new object
console.log(person.address == personTwo.address); // false
// Because Same reason as above 
console.log(personTwo.address.city); // 'San Jose'
// Because Neither `address.city` was changed
console.log(person.address.city); // 'San Jose'
// Because Neither `address.city` was changed
console.log(person.address.city == personTwo.address.city); // false
// since 'Navada' is not equal to 'San Jose'
```

4. Clone the `blogs` variable into a new variable named `clonedBlogs`

```js
let blogs = [
  {
    id: 1,
    title: 'Post #1',
    body: 'My first blog post',
  },
  {
    id: 2,
    title: 'Post #2',
    body: 'My second blog post',
  },
  {
    id: 3,
    title: 'Post #3',
    body: 'My third blog post',
  },
];

// Your code goes here

let clonedBlogs = [...blogs];

```

5. Clone the `question` variable into a new variable named `questionClone`

```js
var questions = [
  {
    prompt: 'Why is the sky blue?',
    responses: [
      'Because the color blue was on sale at Wallmart',
      'Because blue is the prettiest color',
      'Because the air molecules difract blue light more than any other color',
    ],
  },
  {
    prompt: 'Why are leaves usually green?',
    responses: [
      'So green caterpillars can hide better.',
      'Because leaves can more easily make energy with green light',
      "Because leaves absorb red and blue light so it's green that is reflected",
    ],
  },
];

// Your code goes here
var questionClone = questions.map(question => ({
  ...question,
  responses: [...question.responses]
}));
```

6. Clone the `allBlogs` variable into a new variable named `allBlogsClone`

```js
var allBlogs = {
  id: 1,
  title: 'Alamofire JSON Serialization',
  body: 'All about serialization in Alamofire...',
  author: {
    id: 1,
    fullName: 'Jeff Potter',
    username: 'jpotts18',
  },
  comments: [
    {
      id: 1,
      body: 'Thanks for the help Jeff, this saved me hours',
    },
    {
      id: 2,
      body: 'Your welcome. I am happy to help!',
    },
  ],
};

// Your code goes here
var allBlogsClone = JSON.parse(JSON.stringify(allBlogs));

```

7. Clone the `person` variable into a new variable named `clonedPerson`

```js
let person = [
  {
    input: { name: 'Ryan' },
    output: { name: 'Ryan' },
  },
  {
    input: { name: { first: 'Ryan', last: 'Haskell-Glatz' } },
    output: { firstName: 'Ryan', lastName: 'Haskell-Glatz' },
  },
  {
    input: { name: 'Ryan', age: 24 },
    output: { name: 'Ryan', age: 24 },
  },
  {
    input: {
      name: { first: 'Ryan', last: 'Haskell-Glatz' },
      birthday: { year: 1993, month: 'Nov' },
    },
    output: {
      firstName: 'Ryan',
      lastName: 'Haskell-Glatz',
      birthdayYear: 1993,
      birthdayMonth: 'Nov',
    },
  },
];

// Your code goes here

let clonedPerson = JSON.parse(JSON.stringify(person));

```

8. Write a function named `cloneObject` that accepts an object and returns the clone of the object

```js
function cloneObject() {
  // your code
    return JSON.parse(JSON.stringify(obj));
}

// Run the test below to check your function

let user = {
  name: 'John',
  house: 'Stark',
  sisters: ['Arya', 'Sansa'],
};
let cloned = cloneObject(user);

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let clonedPerson = cloneObject(user);

console.log(
  `The user object is ${
    user == cloned ? `not clone` : `cloned successfully 😁👑`
  }`
);
console.log(
  `The person object is ${
    person == clonedPerson ? `not clone` : `cloned successfully 😁👑`
  }`
);
```
