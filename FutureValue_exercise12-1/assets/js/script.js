"use strict";

const getRandomNumber = max => {
    let rand = null;
    if (!isNaN(max)) {
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;
    }
    return rand;
};

const calculateFutureValue = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
        if (futureValue === Infinity) {
            // alert(`Future value = Infinity i = ${i}`);
            break;
        }
    }
    // alert(`Maximum value of a JavaScript number: ${Number.MAX_VALUE}`);
    return futureValue.toFixed(2);
};

function getDate() {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = date.getFullYear();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');

    let formattedDate = `Today is ${month}/${day}/${year} at ${hours}:${minutes}.`;
    return formattedDate;
}

$(document).ready(() => {
    $("#calculate").click( () => {
        // const investment = parseFloat($("#investment").val());
        // const rate = parseFloat($("#rate").val());
        // const years = parseFloat($("#years").val());
    
        const investment = getRandomNumber(50000);
        const rate = getRandomNumber(15);
        const years = getRandomNumber(50);
    
        $("#investment").val(investment);
        $("#rate").val(rate);
        $("#years").val(years);
    
        let isValid = true;
        if (isNaN(investment) || investment <= 0) {
            $("#investment").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#investment").next().text("");
        }
    
        if (isNaN(rate) || rate <= 0) {
            $("#rate").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#rate").next().text("");
        }
    
        if (isNaN(years) || years <= 0) {
            $("#years").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#years").next().text("");
        }
    
        if (isValid) {
            let futureValue = calculateFutureValue(investment, rate, years);
            // $("#future_value").val(formatFutureValue(futureValue));
            let formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            $("#future_value").val(formatter.format(futureValue));
        }
    });

    // Display the current date and time
    $("#date").text(getDate());
});