//The purpose of this javascript is to contain the score and the number of questions contained in the quiz.
function Quiz(questions) {
    this.score = 0;//represents the score attribute.
    this.questions = questions;//represents the questions attribute.
    this.questionIndex = 0;//represents the questions index attribute.
}

//This function indexes through the series of questions, choices and answers in my array located in the app.js file.
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

//This function is here to determine if the quiz has ended by determining the number of questions contained in my questions array and comparing that value to the value stored in the quesionsIndex.
Quiz.prototype.isEnded = function () {
    return this.questions.length === this.questionIndex;
}

//This function checks to see if the answer selected by the user matches the correct answer.
Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    //This navigates to the next questions even if the user selects the wrong answer.
    this.questionIndex++;
}