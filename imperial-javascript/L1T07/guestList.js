// create empty array to store guest names
let guestList = [];

// Function to prompt the user to input names
const getNames = () => {
    // Loop to get 10 names (we allow the user to add up to 10 people)
    for (let i = 0; i < 10; i++) {
        // Prompt for the name input
        let name = prompt(`Enter name ${i + 1}:`);

        // Add the new list names to the guest list
        guestList.push(name);
    }

    // Ask the user if they want to add a 11th name
    let addOneMore = prompt("You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list with the last person you entered? yes/no:");

    if (addOneMore.toLowerCase() === 'yes') {
        // Prompt for the 11th name
        let name = prompt("Enter the 11th name:");

        // Ask if they want to replace a name or just add the 11th name
        let removeName = prompt("You will be removing a name of the list, would you like to continue? (yes/no):");

        // Check if they want to replace a name
        if (removeName.toLowerCase() === 'yes') {
            // Ask which name to remove
            let nameToRemove = prompt("Enter the name you want to remove from the list:");

            // Check if the name exists in guestList, and remove the name if it does
            const index = guestList.indexOf(nameToRemove);
            if (index !== -1) {
                guestList.splice(index, 1);  // Remove the name from the list
                console.log(`${nameToRemove} has been removed from the list.`);
                // Add the 11th name to the list
                guestList.push(name);
            } else {
                console.log(`The name '${nameToRemove}' does not exist in the list.`);
            }
        } else {
            // If they don't want to replace, just leave the list as is
            console.log("You chose not to replace a name, so no name will be added.");
        }
    } else {
        console.log("No additional name will be added.");
    }

    // Display the final list of names
    console.log("Final list of names: ", guestList);
};

// Call the function getNames to run the code above
getNames();
