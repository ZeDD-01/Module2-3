//Array creation and indexes
const myArray = [1, 2, 3, 4, 5];
const anotherArray = new Array(1, 2, 3, 4, 5, 6);
const yetAnotherArray = []; //empty array
yetAnotherArray[0] = 1;
yetAnotherArray[1] = 2;
yetAnotherArray[2] = 3;
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[3]);

//Array properties and methods
console.log(myArray.length);
console.log(anotherArray.indexOf(3));
console.log(anotherArray.indexOf(7));

myArray.push(8);
console.log(myArray);
let lastElement = yetAnotherArray.pop();
console.log(lastElement);
console.log(yetAnotherArray);

yetAnotherArray.unshift(0);
console.log(yetAnotherArray);
let firstElement = anotherArray.shift();
console.log(firstElement);
console.log(anotherArray);

//Looping through arrays
const fruits = ["apple", "banana", "cranberry"];

// 1. The traditional for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("1.", fruits[i]);
}

// 2. For In syntax
for (idx in fruits) {
  console.log("2.", idx);
}

// 3. For Of syntax
for (fruit of fruits) {
  console.log("3.", fruit);
}


//Objects
const person = {
    name: "Brandon Smith",
    age: 28,
    occupation: "Chef",
    hobbies: ["Swimming", "Cooking", "Travelling"],
    isMarried: false,
    intro: function (){
        console.log(`Hi! My name is ${this.name}, and I'm a ${this.occupation} who's learning how to code. Nice to meet you!`);
    }
}

console.log(`Age of person: ${person["age"]}`);
console.log(`First hobby of person: ${person.hobbies[0]}`);
person.intro();

const pet = {
  name: "Cheddar",
  species: "cat",
  age: 4,
  breed: "Bengal / Persian"
}

for (key in pet){
  console.log(`Pet ${key} is ${pet[idx]}`);
}