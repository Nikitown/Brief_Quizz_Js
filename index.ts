declare var require: any;

// Constants of the main containers
const startWrapper: HTMLElement | null = document.getElementById("start-wrapper")
const quizWrapper: HTMLElement | null = document.getElementById("quiz-wrapper")
const leaderboardWrapper: HTMLElement | null = document.getElementById("leaderboard-wrapper")

// Constants of the start container
let username: HTMLElement | null = document.getElementById("username")
const startBtn: HTMLElement | null = document.getElementById("start-btn")

// Constants of the quiz container
const question: HTMLElement | null = document.getElementById("question")
const answersWrapper: HTMLElement | null = document.getElementById("answers-wrapper")
const nextBtn: HTMLElement | null = document.getElementById("next-btn")
const progressBar: HTMLElement | null = document.getElementById("progress-bar")

const retryBtn: HTMLElement | null = document.getElementById("retry-btn")

let currentQuestion: number = 0
let score: number = 0
let progress: number = 0

// Questions and answers
let questions = [
    {
        question: "Choose the correct HTML element for the largest heading:",
        answer1: "&lt;h1&gt;",
        answer2: "&lt;h6&gt;",
        answer3: "&lt;heading&gt;",
        correctAnswer: "a-1"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answer1: "&lt;break&gt;",
        answer2: "&lt;br&gt;",
        answer3: "&lt;lb&gt;",
        correctAnswer: "a-2"
    },
    {
        question: "Choose the correct HTML element to define important text:",
        answer1: "&lt;b&gt;",
        answer2: "&lt;strong&gt;",
        answer3: "&lt;important&gt;",
        correctAnswer: "a-2"
    },
    {
        question: "How can you open a link in a new tab/browser window?",
        answer1: "&lt;a href='url' target='new'&gt;",
        answer2: "&lt;a href='url' new&gt;",
        answer3: "&lt;a href='url' target='_blank'&gt;",
        correctAnswer: "a-3"
    },
    {
        question: "Which of these elements are all &lt;table&gt; elements?",
        answer1: "&lt;table&gt; &lt;tr&gt; &lt;td&gt;",
        answer2: "&lt;thead&gt; &lt;body&gt; &lt;tr&gt;",
        answer3: "&lt;table&gt; &lt;tr&gt; &lt;tt&gt;",
        correctAnswer: "a-1"
    },
    {
        question: "Inline elements are normally displayed without starting a new line.",
        answer1: "False",
        answer2: "True",
        answer3: "It depends...",
        correctAnswer: "a-2"
    },
    {
        question: "How do you add a background color for all &lt;h1&gt; elements?",
        answer1: "h1 {background-color: #FFFFFF;}",
        answer2: "h1.all {background-color: #FFFFFF;}",
        answer3: "all.h1 {background-color: #FFFFFF;}",
        correctAnswer: "a-1"
    },
    {
        question: "Which CSS property controls the text size?",
        answer1: "font-size",
        answer2: "text-size",
        answer3: "text-style",
        correctAnswer: "a-1"
    },
    {
        question: "How do you display hyperlinks without an underline?",
        answer1: "a {text-decoration: no-underline;}",
        answer2: "a {underline: none;}",
        answer3: "a {text-decoration: none;}",
        correctAnswer: "a-3"
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        answer1: "text-style: capitalize",
        answer2: "text-transform: capitalize",
        answer3: "You can't do that with CSS",
        correctAnswer: "a-2"
    },
    {
        question: "When using the padding property; are you allowed to use negative values?",
        answer1: "Yes",
        answer2: "No",
        answer3: "It depends...",
        correctAnswer: "a-2"
    },
    {
        question: "How do you make a list that lists its items with squares?",
        answer1: "list-style-type: square;",
        answer2: "list: square;",
        answer3: "list-type: square;",
        correctAnswer: "a-1"
    },
    {
        question: "How do you write an IF statement?",
        answer1: "if i = 5",
        answer2: "if i == 5 then",
        answer3: "if (i == 5)",
        correctAnswer: "a-3"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answer1: "if i <> 5",
        answer2: "if (i != 5)",
        answer3: "if (i <> 5)",
        correctAnswer: "a-2"
    },
    {
        question: "How does a FOR loop start?",
        answer1: "for (i = 0; i <= 5)",
        answer2: "for (i = 0; i <= 5; i++)",
        answer3: "for (i <= 5; i++)",
        correctAnswer: "a-2"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer1: 'var colors = ["red", "green", "blue"]',
        answer2: 'var colors = (1:"red", 2:"green", 3:"blue")',
        answer3: 'var colors = "red", "green", "blue"',
        correctAnswer: "a-1"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answer1: "Math.round(7.25)",
        answer2: "Math.rnd(7.25)",
        answer3: "round(7.25)",
        correctAnswer: "a-1"
    },
    {
        question: "How can you detect the client's browser name?",
        answer1: "client.navName",
        answer2: "navigator.appName",
        answer3: "browser.name",
        correctAnswer: "a-2"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answer1: "true",
        answer2: "NaN",
        answer3: "false",
        correctAnswer: "a-1"
    },
    {
        question: "Is JavaScript case-sensitive?",
        answer1: "Yes",
        answer2: "No",
        answer3: "It depends...",
        correctAnswer: "a-1"
    }
]

// Username placeholder fade
username?.addEventListener("focus", function () {
    const usernamePlaceholder: HTMLElement | null = document.getElementById("username-placeholder")

    if (username?.value == "") {
        usernamePlaceholder!.style.cssText = "opacity: 0;"
    }

    username?.addEventListener("keypress", function (e) {
        if (e.keyCode == 13 && username?.value != "") {
            startBtn?.click()
        } else if (e.keyCode == 13 && username?.value == "") {
            startBtn?.click()
        }
    })

    username?.addEventListener("keypress", function () {
        usernamePlaceholder!.style.cssText = "opacity: 0;"
    })
})

username?.addEventListener("blur", function () {
    const usernamePlaceholder = document.getElementById("username-placeholder")

    if (username?.value == "") {
        usernamePlaceholder!.style.cssText = "opacity: 1;"
    }
})

// Start button action
startBtn?.addEventListener("click", function () {
    const username: HTMLElement | null = document.getElementById("username")
    const usernamePlaceholder: HTMLElement | null = document.getElementById("username-placeholder")

    // If the username is empty, don't show quiz
    if (username?.value == "") {
        username.style.cssText = "animation: enterUsername .5s ease-out; background: #f9e6e6; border-color: #f9dcdc;"
        usernamePlaceholder!.style.cssText = "animation: enterUsername .5s ease-out; color: #e8a1a1;"

        // If it isn't empty, continue to quiz
    } else {

        if (startWrapper)
            startWrapper.style.cssText = "display: none"
        quizWrapper!.style.cssText = "display: flex; flex-direction: column; justify-content: center;"
    }

    setTimeout(function () {
        if (username)
            username.style.cssText = "animation: none"
        if (usernamePlaceholder)
            usernamePlaceholder.style.cssText = "animation: none"
    }, 500)
})

// Set a question and its answers
function setQuestions() {
    question!.innerHTML = questions[currentQuestion].question

    answersWrapper!.innerHTML =
        '<div id="answers-js-wrapper"><div class="answer-wrapper"><input type="radio" name="answers" class="answer-input" id="answer-1" checked><span class="checkmark"></span><label for="answer-1" class="answer" id="a-1">' + questions[currentQuestion].answer1 + '</label></div>'
        + '<div class="answer-wrapper"><input type="radio" name="answers" class="answer-input" id="answer-2"><span class="checkmark"></span><label for="answer-2" class="answer" id="a-2">' + questions[currentQuestion].answer2 + '</label></div>'
        + '<div class="answer-wrapper"><input type="radio" name="answers" class="answer-input" id="answer-3"><span class="checkmark"></span><label for="answer-3" class="answer" id="a-3">' + questions[currentQuestion].answer3 + '</label></div></div>'

}

setQuestions()

// Progress Bar
function addProgress() {
    progressBar!.style.cssText = "width:" + progress + "%"

    const progressCSS: HTMLElement | null = document.getElementById("progress-css")
    const progressJS: HTMLElement | null = document.getElementById("progress-js")

    // Add to the progress bar
    if (progress < 33) {
        progress += 4
    } else if (progress >= 33 && progress < 60) {
        progress += 5
    } else if (progress >= 60) {
        progress += 3.2
    }

    // Change the background of the sections when the progress bar reaches them
    if (progress >= 33) {
        progressCSS!.style.cssText = "background: #e7ecfb; border-color: #d3dcf8; animation: progressSection 300ms ease-out;"

    } else {
        progressCSS!.style.cssText = "background: #f3f5fc; border-color: #e7ecfb"
    }
    if (progress >= 60) {
        progressJS!.style.cssText = "background: #e7ecfb; border-color: #d3dcf8; animation: progressSection 300ms ease-out;"
    } else {
        progressJS!.style.cssText = "background: #f3f5fc; border-color: #e7ecfb"
    }
}
addProgress()

// See if the checked answer is correct
function checkAnswer() {
    const answerWrapper = document.querySelectorAll(".answer-wrapper")


    for (let i = 0; i < answerWrapper.length; i++) {
        answerWrapper[i].addEventListener("click", function (e) {
            try {
                thisAnswer = e.target
                checkedAnswer = thisAnswer.closest("label").innerHTML
            } catch (Exception) { }
        })
    }
}

checkAnswer()

// Next button click
nextBtn?.addEventListener("click", function () {

    // Get the correct answer for the current question and check the first answer as the default one
    let correctAnswer: string = document.getElementById(questions[currentQuestion].correctAnswer)!.innerHTML
    // If the current question isn't the last one, show the next one with its answers
    const lastQuestion: number = questions.length;

    if (currentQuestion + 1 != lastQuestion) {
        currentQuestion++
        question!.innerHTML = questions[currentQuestion].question

        document.getElementById("a-1").innerHTML = questions[currentQuestion].answer1
        document.getElementById("a-2").innerHTML = questions[currentQuestion].answer2
        document.getElementById("a-3").innerHTML = questions[currentQuestion].answer3

        // Check if the question is correct, if it is, add .5 to the global score
        if (checkedAnswer == correctAnswer) {
            score += .5
        }

        setQuestions()

        // If the current question is the last question, check if it is correct
    } else {
        if (checkedAnswer == correctAnswer) {
            score += .5
        }

        // Hide the quiz and show the leaderboard
        leaderboard()
    }

    checkAnswer()
    addProgress()
})

function leaderboard() {
    quizWrapper!.style.display = "none"
    leaderboardWrapper!.style.display = "block"

    const table = document.getElementById("table")
    table!.innerHTML = table?.innerHTML + "<tr><td class='table-username'>" + username!.value + "</td> <td class='table-score'>" + score + "</td></tr>"
}

// Sort the leaderboard by score
let sorted: boolean = false

function sortScore() {
    if (!sorted) {
        sorted = true

        let table, rows, switching, i, x, y, shouldSwitch
        table = document.getElementById("table")
        let switching: any = true

        while (switching) {

            switching = false
            rows = table.rows

            for (i = 1; i < (rows.length - 1); i++) {

                shouldSwitch = false

                x = rows[i].getElementsByTagName("TD")[1]
                y = rows[i + 1].getElementsByTagName("TD")[1]

                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
                switching = true
            }
        }
    } else if (sorted) {
        let sorted: boolean = false

        let table, rows, switching, i, x, y, shouldSwitch
        table = document.getElementById("table")
        let switching: any = true

        while (switching) {

            switching = false
            rows = table.rows

            for (i = 1; i < (rows.length - 1); i++) {

                shouldSwitch = false

                x = rows[i].getElementsByTagName("TD")[1]
                y = rows[i + 1].getElementsByTagName("TD")[1]

                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
                switching = true
            }
        }
    }
}

// Reset everything when the retry button is clicked
retryBtn?.addEventListener("click", function () {
    currentQuestion = 0
    score = 0
    progress = 0

    leaderboardWrapper!.style.display = "none"
    startWrapper!.style.display = "block"

    username!.value = ""

    setQuestions()
    checkAnswer()
    addProgress()
})

function getElementById(arg0: string) {
    throw new Error("Function not implemented.");
}
