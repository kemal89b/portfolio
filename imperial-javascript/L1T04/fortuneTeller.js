
//declared variables with string values
let mothersName = prompt("Mother name");
let streetName = prompt("Street name");
let favColour = prompt("Favourite colour");

// this sets the value number 10 for age variable.
let age = Number(prompt(("Enter age")));

// this sets the value number 6 for number variable.
let number = Number(prompt(("Enter number between 1-10")));

//output results with console.log using template literals
console.log(`In ${number} years you are going to meet your best freind named ${mothersName} ${streetName}. 
You will get married in ${age+number} years and have ${age%number} children. 
In ${Math.round(age/number)} years you are going to dye your hair ${favColour}.`);