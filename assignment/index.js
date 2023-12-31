/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/

//1
let grades = [56, 87, 99, 40];
console.log(grades);

//2
grades.push(68);
console.log(grades);

//3
grades.shift();
console.log(grades);

//4
 grades[2] = 60
console.log(grades)

let sum = 0;
grades.map((g)=>{
    sum = sum + g;
})

console.log(sum/grades.length)

/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/

const vehicle = {
    name: "Renegade",
    brand: "Jeep",
    year: 5,
    numberOfWheels: 4,
    isEnvironmentFriendly: false
}

for(const property in vehicle){
    console.log(property + " : " + vehicle[property]);
}
