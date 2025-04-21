import { FormValidator } from './validate.js';
import User from './user.js';


const users = [];

document.querySelector('#submit-btn').addEventListener('click', () => {
    // Selecting all fields on the form.
    // Needs: queryselect each field and store as a variable.
    // check each field with regex See validate.js
    //
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let os = document.querySelector('#os').value;
    let province = document.querySelector('#province').value;
    let terms = document.querySelector('#terms').checked;

    let isValid = true;

    // From formvalidator below,
    // Could try and formulate this into a forEach?
    // Call FormValidator for each input field.
    isValid &= FormValidator.validateField('firstname', firstname);
    isValid &= FormValidator.validateField('lastname', lastname);
    isValid &= FormValidator.validateField('username', username);
    isValid &= FormValidator.validateField('email', email);
    isValid &= FormValidator.validateField('phone', phone);
    isValid &= FormValidator.validateField('os', os);
    isValid &= FormValidator.validateField('province', province);
    // isValid &= FormValidator.validateField('terms', terms); // Commented out since agreeing to terms and conditions was optional as instructed.

    if (isValid) {
        // Create a user object with the form data
        const user = new User(firstname, lastname, phone, os, province, terms, username, email);
        users.push(user);

        // Convert the user data to JSON format.
        const userData = {
            firstname: user.firstname,
            lastname: user.lastname,
            username: username,
            email: email,
            phone: user.phone,
            os: os,
            province: province,
            terms: terms
        };

        // Output the JSON array to the console
        console.log('User Data as JSON:', JSON.stringify(userData));

        // Call function to display users in the grid format
        displayUsersInGrid(users);

        // Clear all input fields after submission
        document.querySelector('#firstname').value = '';
        document.querySelector('#lastname').value = '';
        document.querySelector('#username').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#os').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#province').value = '';
        document.querySelector('#terms').value = '';
    }
});

function displayUsersInGrid(users) {
    // To display and append formdata to a table/grid layout.
    //Logic: queryselect my table
    // create a new div to append my key Headers
    // Create array of headers > use forEach(header => {
    //   create a div
    // appendChild the header to textcontent of the div
    // })
    //
    const userTableContainer = document.querySelector('#user-table');

    // Trying to clear old content but it's not quite working
    userTableContainer.innerHTML = '';

    // Create a grid container element
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('user-grid-container'); // class just for styling purposes

    // Define the grid headers (column names)
    const headers = ['First Name', 'Last Name', 'Username', 'Email', 'Phone', 'OS', 'Province', 'Terms'];

    // Creating header elements inside the grid
    headers.forEach(header => {
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('grid-header');
        headerDiv.textContent = header;
        gridContainer.appendChild(headerDiv);
    });

    // Creating grid items for each user
    users.forEach(user => {
        const userData = [
            user.firstname, 
            user.lastname, 
            user.username, 
            user.email, 
            user.phone, 
            user.os, 
            user.province, 
            user.terms ? 'Agreed' : 'Not Agreed'
        ];

        // For each user, create a grid item for each data point
        userData.forEach(data => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('grid-item');
            userDiv.textContent = data;
            gridContainer.appendChild(userDiv);
        });
    });

    // Append the grid container inside the container
    userTableContainer.appendChild(gridContainer);

}



FormValidator.validateField = function(field, value) {
    // Purpose: Check each input field to ensure formatting is correct.
    // Refer to /scripts/validate.js to see validation
    // Imported
    // Psuedocode:
    // Check each form field (each case)
    // Call the functions: isValid___(value); and check IF it passes requirements
    // .test in validate.js beside REGEX expressions return true or false. This is our check condition.
    // If not valid, return error message
    const errorField = document.querySelector(`#${field}-error`);
    
    let isValid = true;
    let errorMessage = '';

    // Logic: if the parameter "field" = case, run the block of code.
    // field = firstname
    // check validity by calling isValidName() from FormValidator field.
    // Breaks ensure that the code is not checking through all switch cases each time we want to check for 1 field.
    // Error messages can appear independently this way rather then dumping all of them out despite first/lastname and username being correct.
    switch (field) {
        case "firstname":
        case "lastname":
            isValid = this.isValidName(value);
            if (!isValid) {
                errorMessage = 'Please enter a valid name (letters, apostrophes, or hyphens only).';
            }
            break;

        case "username":
            isValid = this.isValidUsername(value);
            if (!isValid) {
                errorMessage = "Username must start with a capital letter followed by 3 numbers then 4 letters.";
            }
            break;

        case "email":
            isValid = this.isValidEmail(value);
            if (!isValid) {
                errorMessage = "Please enter a valid email address.";
            }
            break;

        case "phone":
            isValid = this.isValidPhoneNumber(value);
            if (!isValid) {
                errorMessage = 'Please enter a valid 10-digit phone number.';
            }
            break;

        case "os":
            isValid = this.isValidOS(value);
            if (!isValid) {
                errorMessage = 'Please select an operating system.';
            }
            break;

        case "province":
            isValid = this.isValidProvince(value);
            if (!isValid) {
                errorMessage = 'Please select a valid province from the list.';
            }
            break;

        case "terms":
            isValid = this.isTermsAccepted(value);
            if (!isValid) {
                errorMessage = 'You must agree to the terms and conditions.';
            }
            break;

        default:
            break;
    }

    // Display or hide the error message based on validation
    if (!isValid) {
        errorField.textContent = errorMessage;
        errorField.style.display = 'block';  // Show the error message
    } else {
        errorField.style.display = 'none';  // Hide the error message
    }

    return isValid;
};

