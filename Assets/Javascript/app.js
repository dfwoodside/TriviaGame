var intervalId;
var count = 60;

intervalId = setInterval(function () {
    $("#timeleft").text("Time Left: " + count);
    count--;
})

//This function is designed to scroll through the questions as the user answers them.

    function populate() {
        if (quiz.isEnded()) {//This line checks to see if the quiz has ended.
            showScores();
        }
        else {
            //Displays one of the questions captured in the array
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().text;

            // Displays the question choices.
            var choices = quiz.getQuestionIndex().choices;
            console.log(choices);
            for (var i = 0; i < choices.length; i++) {
                var element = document.getElementById("choice" + i);
                element.innerHTML = choices[i];

                guess("btn" + i, choices[i]);
            }
            showProgrss();
        }
    };


function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

//This function shows the user how many questions he has answered and the total number of questions in the game.
function showProgrss() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'>Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}
//The array of questions that the game uses
var questions = [
    new Question("What is the stage name of the member of Public Enemy who would later have a reality dating show?", ["Kool Moe D", "Heavy D", "Flavor Flav", "Chuck D"], "Flavor Flav"),
    new Question("What is the name of the first album released by the American Rock band Bon Jovi?", ["Bon Jovi", "7800 Fahrenheit", "New Jersey", "Keep the Faith"], "Bon Jovi"),
    new Question("Who interrupted Taylor Swift's acceptance speech", ["Jay-Z", "Puff Daddy", "Beyonce", "Kanye West"], "Kanye West"),
    new Question("Who was the oldest memeber of the rock band The Beatles?", ["John Lennon", "Ringo Starr", "Paul McCartney", "George Harrison"], "Ringo Starr"),
    new Question("What Broadway musical broke the record for Tony nominations in 2016?", ["Hamilton", "The Producers", "Billy Elliot", "South Pacific"], "Hamilton")
];
//Created an object for the quiz controller
var quiz = new Quiz(questions);

//Calls the populate function
populate();