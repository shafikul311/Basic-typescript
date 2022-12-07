"use strict";
// basic typescript learning
function addNumber(a, b) {
    return a + b;
}
const sum = addNumber(10, 30);
console.log('two number sum ' + sum);
// object typescript 
let employee;
employee = {
    id: 1,
    name: "Arbe"
};
console.log(employee);
//Tuple
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
console.log(user);
user[0] = 5;
var employee1;
employee1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
employee1.push([3, 'john']);
console.log(employee1, employee1.length);
// void
const sayHi = () => console.log('hi');
let speech = sayHi();
// console.log(speech); //Output: undefined
// -----------------------------
// boolean
let taskComplete = false;
// string 
let userName = 'Shafikul Islam';
// number
let age = 25;
console.log(age);
// array
let ages = [20, 21, 25, 27, 26];
let age1 = [20, 21, 25, 27, 26];
const person = {
    name: 'John',
    age: 25,
    alive: true,
};
console.log(person);
// tuple
var empId = 1;
var empName = "Steve";
// Tuple type variable 
var employees = [1, "Steve"];
console.log(employees);
