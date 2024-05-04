"use strict";

const isDate = (date, datePattern, dateType) => {
    if (!datePattern.test(date)) { return false; }

    const dateParts = date.split("/");
    const month = parseInt(dateParts[0]);
    const year = parseInt(dateParts[1]);

    if (dateType === "full") {
        const day = parseInt(dateParts[1]);
        if (month < 1 || month > 12) { return false; }
        if (day > 31) { return false; }
    } else if (dateType === "creditCard") {
        if (month < 1 || month > 12) { return false; }
        // For credit card date, we only check the year part
        // Credit card dates typically use only the last two digits of the year
        // Here, we're assuming that the year part must have exactly 2 digits
        if (isNaN(year) || year < 0 || year > 99 || dateParts[1].length !== 2) { return false; }
    }

    return true;
};

$(document).ready(() => {
    $("#save").click(() => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const email = $("#email").val();
        const phone = $("#phone").val();
        const zip = $("#zip").val();
        const dob = $("#dob").val();
        const creditCard = $("#credit-card").val(); // Get the value entered for the credit card
        const expirationDate = $("#expiration-date").val(); // Get the value entered for the expiration date

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
        const creditCardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/; // Define a regular expression pattern for a credit card number
        const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // Define a regular expression pattern for the expiration date
        
        // check user entries for validity
        let isValid = true;
        if (email === "" || !emailPattern.test(email)) {
            isValid = false;
            $("#email").next().text("Please enter a valid email.");
        }
        if (phone === "" || !phonePattern.test(phone)) {
            isValid = false;
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if (zip === "" || !zipPattern.test(zip)) {
            isValid = false;
            $("#zip").next().text("Please enter a valid zip code.");
        }
        if (dob === "" || !isDate(dob, datePattern, "full")) { // Pass "full" as the date type for date of birth
            isValid = false;
            $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
        }
        if (creditCard !== "") { // Check if credit card field is not empty
            if (!creditCardPattern.test(creditCard)) { // Validate the credit card number
                isValid = false;
                $("#credit-card").next().text("Please enter a valid credit card number in XXXX-XXXX-XXXX-XXXX format.");
            }
        }
        if (expirationDate !== "") { // Check if expiration date field is not empty
            if (!isDate(expirationDate, expirationDatePattern, "creditCard")) { // Pass "creditCard" as the date type for expiration date
                isValid = false;
                $("#expiration-date").next().text("Please enter a valid expiration date in MM/YY format.");
            }
        }
        
        if (!isValid) { 
            // Display a general error message if any field fails validation
            $("#error-message").text("Please fix the errors before submitting the form.");
        } else {
            // code that saves profile info goes here
        }
        
        $("#email").focus(); 
    });
    
    // set focus on initial load
    $("#email").focus();
});

