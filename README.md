# Cyberpunk Login Form

A user registration form inspired by the Cyberpunk aesthetic, complete with input validation to ensure proper data entry. This form includes fields such as **First Name**, **Last Name**, **Username**, **Phone Number**, **Email**, **Operating System**, **Province**, and **Terms & Conditions**. The form uses Tailwind CSS for styling and custom validation logic in JavaScript to enforce user input rules.

## Features
- **Form Fields**:
    - First Name
    - Last Name
    - Username (custom validation)
    - Phone Number (formatted input)
    - Email (proper email format)
    - Operating System (select from a predefined list)
    - Province (select from a predefined list of Canadian provinces)
    - Terms and Conditions (checkbox validation)

- **Input Validation**:
    - Ensures each field is filled out correctly before submission.
    - Displays error messages if the user input doesn't match the expected format.
    - Custom regular expressions for validating fields such as username, phone number, and email.

- **Responsive Design**:
    - The form is designed to look great on all screen sizes with Tailwind CSS providing responsiveness.

## Installation

To use this form in your project:

1. Clone the repository:
    ```bash
    git clone https://github.com/IceyCherry/-Cyberpunk-Login-Form.git
    ```

2. Open `index.html` in your browser to view and interact with the form.

3. To integrate the form into your project, copy the HTML structure and include the `styles.css` and `scripts/main.js` files.

## Technologies Used
- **HTML5**: Structure of the form.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript**: Form validation logic and dynamic behavior.
- **Custom CSS**: For any additional style customizations.

## How It Works

1. The form collects user information and validates each input field:
   - **First Name** and **Last Name** must only contain letters and special characters like apostrophes and hyphens.
   - **Username** must be at least 4 characters long (previously had stricter validation).
   - **Phone Number** must match a common North American format, with optional separators (dashes, spaces, etc.).
   - **Email** must match a standard email pattern.
   - **Operating System** and **Province** are selected from dropdown menus.
   - **Terms and Conditions** must be accepted before the form can be submitted.

2. The form has JavaScript-based validation functions (`FormValidator`) that ensure the data entered is correct. If any field fails validation, an error message is displayed beneath the input.

3. Once all fields are valid, the form can be submitted, and the data can be processed as needed.

## Example Usage

```html
<form class="form-container" id="user-form">
    <!-- First Name -->
    <input type="text" id="firstname" name="firstname" placeholder="Johnny" required>

    <!-- Last Name -->
    <input type="text" id="lastname" name="lastname" placeholder="Silverhand" required>

    <!-- Username -->
    <input type="text" id="username" name="username" placeholder="J111onny" required>

    <!-- Phone Number -->
    <input type="text" id="phone" name="phone" placeholder="123-456-7890" required>

    <!-- Email -->
    <input type="text" id="email" name="email" placeholder="SilverhandStudios@universal.com" required>

    <!-- Operating System -->
    <select id="os" name="os">
        <option value="Windows">Windows</option>
        <option value="MacOS">MacOS</option>
        <option value="Linux">Linux</option>
        <option value="Other">Other</option>
    </select>

    <!-- Terms and Conditions -->
    <input type="checkbox" id="terms" name="terms" required>

    <button type="button" id="submit-btn">REGISTER</button>
</form>
