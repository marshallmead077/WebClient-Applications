"use strict";

const scores = [];
let highestScore = 0; // highestScore variable with initial value

// use do-while loop to get the scores from the user
let score = 0;
do {
    score = parseInt(prompt("Enter a test score, or enter -1 to end scores", -1));

    if (score >= 0 && score <= 100) {
        scores.push(score); // add score to scores array
        // Update highestScore if current score is greater
        if (score > highestScore) {
            highestScore = score;
        }
    } else if (score != -1) {
        alert("Score must be a valid number from 0 through 100");
    }
} while (score != -1);

if (scores.length > 0) {
    // use a for-in loop to add each score to total, and display score
    let total = 0;
    /* Commenting out the for-of loop
    for (let score of scores) {
        total += score;
        document.write(`<p>Score ${scores.indexOf(score) + 1}: ${score}</p>`);
    }
    */

    //  method to display highest score
    document.write(`<p>Highest score is ${highestScore}</p>`);

    //calculate and display the average
    const average = parseInt(total / scores.length);
    document.write(`<p>Average score is ${average}</p>`);
}
