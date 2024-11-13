//prompt to enter a word
const userInput = prompt("Enter a word to check if it's a palindrome");

const isPalindrome = inputString => {
	  
//convert string to lowercase to ensure case insensitivity, split string into array.
const split_letters = inputString.toLowerCase().split("");
  
  //loop until 2 characters left to compare
	while (split_letters.length > 1) {

    //remove and return first element of array from left side, remove and return element of array right side
    //if left and right side do not match return false, indicates not palindrome
	  if (split_letters.shift() !== split_letters.pop()) {
			
			// if not palindrome string then returning following text
			 return "not a palindrome";
		};
	}
	
  //return true if pairs match indicates string is palindrome
	return "a palindrome";
}

//return output with input word and results
console.log(`${userInput} is ${isPalindrome(userInput)}`);

