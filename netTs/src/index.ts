

// basic typescript learning
// function addNumber(a:number, b:number){
//     return a + b;
// }
// const sum =  addNumber(10, 30);

// console.log( 'two number sum ' + sum)


// object typescript 
let employee : { 
    id: number; 
    name: string; 
}; 

employee = { 
  id: 1 , 
  name : "Arbe"
}

console.log(employee)


//Tuple

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

console.log(user)
user[0]= 5;



var employee1: [number, string][];
employee1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
employee1.push([3, 'john'])

console.log(employee1, employee1.length)


// void

  const sayHi= (): void => console.log('hi')


let speech: void = sayHi(); 
console.log(speech); //Output: undefined







