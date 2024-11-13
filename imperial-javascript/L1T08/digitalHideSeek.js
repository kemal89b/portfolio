// Define the hide function
function hide(location) {
  // Define the local variable `hideLocation`
  let hideLocation = location;

  // Define the seek function inside hide that returns `hideLocation`
  function seek() {
    return hideLocation;
  }

  // Return the seek function, creating a closure around `hideLocation`
  return seek;
}

// Call hide with a string argument (i.e. "London")
let startGame = hide("London");

// Log the result of calling `startGame`, which is the seek function
console.log(startGame()); // This should print "London"

// Trying to log `hideLocation` directly from outside of the `hide` and `seek` functions
// Results in an error because `hideLocation` is not accessible outside of the `hide` function's scope.
console.log(hideLocation); // Uncaught ReferenceError: hideLocation is not defined
