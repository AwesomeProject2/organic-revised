// Pseudo code
// Firebase code
// Import json file into Firebase
// Create a firebase.js file and initialize database
// Import firebase code into app.js and work with database object
// Import needed methods such as get, update, push and onValue

// Search bar
// Create form and text input for search bar
// Create query selector in JS to fetch our search bar
// Add submit event listener to the form that we created and prevent default behavior right away
// Create onValue method and compare the text input value with the database value
// Once you search for a product name, a pop up will be displayed with that exact product
    // The input field will have a required attribute so that you can't have an empty string
    // The text will always be compared in lowercase to avoid case sensitive errors
    // Add paragraph that advises the user that the name is incorrect/not found


// Filter code
// Create form and select field for the filtering options to appear
// Create query selector in JS to fetch our select field option
// Add change event listener in order to select the filtering option
// Create onValue method and compare the field value with the database value
// Once the filter is applied, only the filtered products appear in the section
    // With an array filter method we are going to iterate through the products in the database
    // We are going to get back only the products that fit the criteria selected in the fieldset and push them into a separate array
    // We are going to append the separate array to the page to be displayed