//Function "Question" with three properties, "text". "choices", and "answer".
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    //This provides me with three attributes that I can use later, the question, the question options and the answer to the question.!
}

//This function is designed to take the user choice and compare it to the correct answer.
//Note the prototpye ... is necessary in order to have the object, "Question" inherit the correctAnswer property that is being passed to it.
Question.prototype.correctAnswer = function(choice){
    return choice === this.answer;
}