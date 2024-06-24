document.addEventListener("DOMContentLoaded", function() {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const submitButton = document.getElementById('submit-btn');
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');

    let currentQuestion = {};
    let score = 0;

    function generateQuestion() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        currentQuestion = {
            num1: num1,
            num2: num2,
            answer: num1 + num2
        };
        questionElement.textContent = `What is ${num1} multiply by ${num2}?`;
        questionElement.style.fontWeight = "bold"
        questionElement.style.fontSize = "30px"

    }

    submitButton.addEventListener('click', function() {
        const userAnswer = parseInt(answerElement.value);
        if (!isNaN(userAnswer)) {
            if (userAnswer === currentQuestion.answer) {
                resultElement.textContent = "Correct!";
                resultElement.style.transition = "1.3s"
                resultElement.style.color = "green";
                score++;
                scoreElement.textContent = score;
            } else {
                resultElement.textContent = `Wrong! The correct answer is ${currentQuestion.answer}.`;
                resultElement.style.color = "red";
                resultElement.style.transition = "1.3s";
            }
            answerElement.value = '';
            generateQuestion();
        } else {
            resultElement.textContent = "Please enter a valid number.";
            resultElement.style.color = "orange";
            resultElement.style.transition = "1.3s"
        }
    });

    generateQuestion();
});
