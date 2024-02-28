"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (investment, rate, years) => {
    let futureValue = investment * Math.pow(1 + rate, years);
    futureValue = futureValue.toFixed(2);
    return futureValue;
};

/*
const processEntries = () => {
    const investment = parseFloat(document.getElementById("investment").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);

    // Declare a variable to store an error message
    let errorMessage = "";

    // Check if the entries are valid
    if (isNaN(investment) || investment <= 0 || investment > 100000) {
        errorMessage = "Please enter a valid number for investment. It should be greater than zero and less than or equal to 100,000.";
        document.getElementById("investment").focus();
    } else if (isNaN(rate) || rate <= 0 || rate > 15) {
        errorMessage = "Please enter a valid number for rate. It should be greater than zero and less than or equal to 15.";
        document.getElementById("rate").focus();
    } else if (isNaN(years) || years <= 0 || years > 50) {
        errorMessage = "Please enter a valid number for years. It should be greater than zero and less than or equal to 50.";
        document.getElementById("years").focus();
    }

    // Check if any errors were detected
    if (errorMessage == "") {
        // If no errors, calculate the future value
        const futureValue = calculateFV(investment, rate, years);
        document.getElementById("future_value").value = futureValue;
    } else {
        // If there are errors, display the error message
        alert(errorMessage);
    }
};
*/

    let investmentBox = document.getElementById("investment");
    investmentBox.focus();

