const questions = [
  {
    question: "Which is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: 3
  },
  {
    question: "Which country has the highest population?",
    options: ["USA", "India", "China", "Russia"],
    answer: 1
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: 2
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: 1
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const scoreText = document.getElementById("scoreText");

loadQuestion();

function loadQuestion() {
  selectedOption = null;
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;

  optionBtns.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.style.background = "#e5e7eb";
  });
}

function selectAnswer(index) {
  selectedOption = index;

  optionBtns.forEach(btn => btn.style.background = "#e5e7eb");
  optionBtns[index].style.background = "#a5b4fc";
}

function nextQuestion() {
  if (selectedOption === null) {
    alert("Please select an option!");
    return;
  }

  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreText.innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  loadQuestion();
}
