1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`
  `false` Because Each array literal creates a new array object in memory. Therefore, `[10]` and `[10]` are two different objects, and comparing them with === checks for reference equality, which is why it returns `false`.


- What is the value of obj? // `{surname: 'Stark'}` 
  Reason: The Variable `obj` was reassigned to a new object with the property `surname: 'Stark'` .


- `obj == newObj` 
  Output: `False` 
  Reason: `obj` points to `{ surname: 'Stark' }`, and newObj points to `{ name: 'Arya' }`.
   Different objects in memory are never equal with ==.


- `obj === newObj` 
  Output: `False`
  Reason: Similar to the previous comparison, `obj` and `newObj` are different objects in memory, so the strict equality operator `===` returns `false`.


- `user === newObj` 
  Output: `False`
  Reason: `user` references the same object as `obj`, which is `{ surname: 'Stark' }`, while `newObj` is a different object `{ name: 'Arya' }`. Therefore, they are not the same object.


- `user == newObj`
  Output: `False`
  Reason: This comparison is also between two object, so it returns `false`.


- `user == obj`
  Output: `true`
  Reason: `user` and `obj` reference the same object `{surname: 'Stark'}`, so they are equal in terms of reference.


- `arr == arr2`
  Output: `true` 
  Reason: `arr` and `arr2` reference the same array object in memory, so they are equal.


- `arr === arr2`
  Output: `true` 
  Reason: Similar to the previous comparison, `arr` and `arr2` reference the same array object, so they are strictly equal.


2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

`![Diagram of memory representation] (photo_2025-02-22_00-04-29.jpg)`

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```

Value: `{ name: 'Alex', age: 25 }`
Reason: When `person1` is passed to the `personDetails` function, it is passed by reference. The line `person.age = 25;` modifies the `age` property of the original object that `person1` references. However, the line `person = { name: 'John', age: 50 };` creates a new object and reassigns the local variable `person` to this new object. This does not affect `person1`, which still references the original object. Therefore, after the function call, `person1` has its `age` property updated to `25`.

Value: `{ name: 'John', age: 50 }`
Reason: The function `personDetails` returns the new object `{ name: 'John', age: 50 }`, which is assigned to `person2`. This new object is separate from the original object that `person1` references.



3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. true
console.log(user.brothers.length === brothers.length); //2. true
```
