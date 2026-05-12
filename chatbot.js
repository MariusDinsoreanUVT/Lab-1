// 1. The questions array contains objects with questions, options, correct answers, and feedback messages.
let questions = [
    {
        question: "Do you feel happy?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "I am sorry"
    },
    {
        question: "Do you like coding?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Great! Keep it up!",
        incorrectResponse: "Maybe you will like it later"
    },
    {
        question: "Is HTML the markup language for web pages?",
        options: {
            a: "Yes",
            b: "No"
        },   
        correctAnswer: "a",
        correctResponse: "Correct! HTML is the foundation of web design!",
        incorrectResponse: "Actually, HTML is the markup language for web pages"
    },
    {
        question: "Should you use CSS for styling web pages?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Absolutely! CSS is essential for beautiful designs!",
        incorrectResponse: "CSS is very important for styling websites"
    },
    {
        question: "Is responsive design important for modern websites?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Perfect! Responsive design ensures great user experience on all devices!",
        incorrectResponse: "Responsive design is crucial in today's mobile-first world"
    }
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");
displayQuestion();

// 2. The displayQuestion function creates and appends an element for the current question in the chat container.
function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}. ${currentQuestion.options[key]}`).join(' ');

    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question} ${optionsHTML}`;
    chatContainer.appendChild(botResponse);
}

function scrollChatContainerToBottom() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 3. The event listener for the form prevents default submit, processes user response, checks if correct, and displays appropriate feedback.
chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let userResponse = userInput.value.toLowerCase();

    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>You :</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot :</strong> `;
    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";
    displayQuestion();

    scrollChatContainerToBottom();
});
