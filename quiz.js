const quizData = [{
        question: "How Old Are You?",
        a: "15",
        b: "34",
        c: "24",
        d: "30",
        answer: "c"
    },
    {
        question: "How Old Tom?",
        a: "15",
        b: "34",
        c: "24",
        d: "30",
        answer: "c"
    }
];

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselected();
    document.getElementById('question').innerText = quizData[currentQuestion].question;
    document.getElementById('a_text').innerText = quizData[currentQuestion].a;
    document.getElementById('b_text').innerText = quizData[currentQuestion].b;
    document.getElementById('c_text').innerText = quizData[currentQuestion].c;
    document.getElementById('d_text').innerText = quizData[currentQuestion].d;
}

function getSelected() {
    const answerEl = document.querySelectorAll('.answer');
    let answer = undefined;
    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselected() {
    const answerEl = document.querySelectorAll('.answer');
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer)
    if (answer) {
        if (answer === quizData[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length)
            loadQuiz();
        else
            document.getElementById('quiz').innerHTML = `<h2> you answered correctly at ${score}/${quizData.length}</h2>`;
    }
});