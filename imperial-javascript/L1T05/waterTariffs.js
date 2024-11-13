//create variables
let litres = prompt("Please input the number of litres of water used");
let household = prompt("Please input which household type you are, 'indigent' or 'regular'");
let number = 0;

//results variable store new values in here
let results = "";

//created nested if else statement
//if text is regular apply the following if statement
if (household == 'regular' || household == 'REGULAR'){

    //if belwo 6 calculate below
    if (litres <= 6){
      results = litres*15.73;
      console.log(`You are due to pay R${results}`);

    //if more than 6, minus exising 6 then multiply 
    } else if (litres > 6 && litres <= 10.5){
      results = ((litres-6)*22.38) + 94.38;
      console.log(`You are due to pay R${results}`);
    
    //if more than 10.5, minus exising 10.5 then multiply 
    } else if (litres > 10.5 && litres <= 35){
      results = ((litres-10.5)*31.77) + 94.38 + 100.71;
      console.log(`You are due to pay R${results}`);

    //if more than 35, minus exising 35 then multiply 
    } else if (litres > 35){
      results = ((litres-35)*31.77) + 94.38 + 100.71 + 778.37;
    }
 
    //else if text is indigent apply the following if statement
  } else if (household == 'indigent' || household == 'INDIGENT') {
    
    //upto 10.5 free
    if (litres <= 10.5){
        console.log(`Free for indigent households`);

        //if more than 10.5, minus exising 10.5 then multiply 
      } else if (litres > 10.5 && litres <= 35){
        results = ((litres-10.5)*31.77) + 100.71;
        console.log(`You are due to pay R${results}`);

        //if more than 35, minus exising 35 then multiply 
      } else if (litres > 35){
        results = ((litres-35)*31.77)  + 778.37;
      }

  } else {
    //if neither text inserted will return following
    console.log(`you did not enter correctly`);
  }

  while (number < 9){
    number++;
    console.log(number);
  }