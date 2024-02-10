const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    answer: "Au",
  },
];

function displayOptions(question) {
  console.log(question.question);
  question.options.forEach((option, index) => {
    console.log(index + 1, option);
  });
}

function generateAnswer(questionIndex, userAnswer) {
  const correctAnswer = questionData[questionIndex].answer;
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("Correct!");
  } else {
    console.log("Incorrect. The correct answer is:", correctAnswer);
  }
}

function askQuestion(index) {
  if (index < questionData.length) {
    displayOptions(questionData[index]);
    rl.question("Your answer: ", (userAnswer) => {
      generateAnswer(index, userAnswer);
      askQuestion(index + 1);
    });
  } else {
    console.log("Quiz completed!");
    rl.close();
  }
}

askQuestion(0);
