
//giving a variable to store number we insert into
let inputNumber = prompt('insert number')

//last index position
let numLength = inputNumber.length -1;

//creating variable with no values to insert new number inside
let outputNumber = '';

//for loop while setting index i to position 0, were checking the length of index less than equal to the input value (numLength)
for (let i=0; i<= numLength; i++) {
  //if index in position 1(second digit) do the following if statement is true
  if(i==1){
    //add the value of index 1 to to end of the number, we set this above on let numLength = ... -1, -1 looks at the end of the value
    outputNumber += inputNumber[numLength];
    //if we are now looking at the end of the string
  } else if (i == numLength) {
    //put index position 1 into  last index position
    outputNumber += inputNumber[1];
  } else {

    //if no match from the above conditions this will store the index positions value of inputNumber into outputNumber
    outputNumber += inputNumber[i];
  }

}

//output original number
console.log('Original number ' + inputNumber)
//output new number
console.log('New number ' + outputNumber);