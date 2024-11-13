
// create a arr i.e. 
const arrayValues = [2,5,7];

//call functions
findSum(arrayValues);
subtractNumbers(arrayValues);
multiplyNumbers(arrayValues);
divideNumbers(arrayValues);

//create functions 
//call functions using values in arr above 

//FUNCTION SUM
function findSum(arrayValues) {
  let currentValue = 0;

  for(var i = 0; i< arrayValues.length; i++) {
      currentValue += arrayValues[i];
  }

  console.log(currentValue);
  return currentValue;
}

//FUNCTION SUBTRACT
function subtractNumbers(arrayValues) {
  console.log(arrayValues[1] - arrayValues[0]);
}

//FUNCTION MULTIPLY
function multiplyNumbers(arrayValues) {
  console.log(arrayValues[2] * arrayValues[0]);
}

//FUNCTION DIVIDE
function divideNumbers(arrayValues) {
  //IF INDEX 1 IS 0 RETURN ERROR MESSAGE ELSE DOES THE CALCULATION
  if (arrayValues[1] === 0){
    console.log("YOU CANNOT DIVIDE BY 0, THIS WILL RESULT IN INFINITY");
  } else {
    console.log(arrayValues[0] / arrayValues[1]);
  }
}


