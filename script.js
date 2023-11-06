const prompt = require("prompt-sync")();

console.log("Welcome to Bangladesh Trivia 101!")

let correctAnswers = 0;
const totalQuestions = 5;

const answer1 = prompt("What is the capital city of Bangladesh? ");
const correctAnswer1 = "Dhaka";

if (answer1.toUpperCase() === correctAnswer1.toUpperCase()) {
    console.log("Well done. That is correct");
    correctAnswers++;
} else {
    console.log("Oops. That is incorrect");
}

const answer2 = prompt("What is the currency of Bangladesh? ");
const correctAnswer2 = "Taka";

if (answer2.toUpperCase() === correctAnswer2.toUpperCase()) {
    console.log("Well done. That is correct");
    correctAnswers++;
} else {
    console.log("Oops. That is incorrect");
}


const answer3 = prompt("On which continent is Bangladesh located? ");
const correctAnswer3 = "Asia";

if (answer3.toUpperCase() === correctAnswer3.toUpperCase()) {
    console.log("Well done. That is correct");
    correctAnswers++;
} else {
    console.log("Oops. That is incorrect");
}

const answer4 = prompt("What is the main religion practiced in Bangladesh? ");
const correctAnswer4 = "Islam";

if (answer4.toUpperCase() === correctAnswer4.toUpperCase()) {
    console.log("Well done. That is correct");
    correctAnswers++;
} else {
    console.log("Oops. That is incorrect");
}

const answer5 = prompt("What year did Bangladesh become independent? ");
const correctAnswer5 = "1971";

if (answer5.toUpperCase() === correctAnswer5.toUpperCase()) {
    console.log("Well done. That is correct");
    correctAnswers++;
} else {
    console.log("Oops. That is incorrect");
}

const answer6 = prompt("What is the national fruit of Bangladesh? ");
const correctAnswer6 = "Jackfruit";

if (answer6.toUpperCase() === correctAnswer6.toUpperCase()) {
    console.log("Well done. That is correct");
    correctAnswers++;
} else {
    console.log("Oops. That is incorrect");
}

const answer7 = prompt("What is the offical language of Bangladesh? ");
const correctAnswer7 = "Bangla";

if (answer7.toUpperCase() === correctAnswer7.toUpperCase()) {
    console.log("Well done. That is correct");
    correctAnswers++;
} else {
    console.log("Oops. That is incorrect");
}


const percent = Math.round((correctAnswers / totalQuestions) * 100)

console.log("You got", correctAnswers, "questions correct!");
console.log("You score", percent.toString(), "%");



