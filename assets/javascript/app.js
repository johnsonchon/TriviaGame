$(document).ready(function () {

    // variables
    var counter = 5;
    var correct = 0;
    var incorrect = 0;
    var time;
    var numQuestions = 4;

    function done() {
        for (var i = 0; i < numQuestions; i++) {		
            var returnValue = $('input[name=question-' + i + ']:checked').val();
            console.log(returnValue);
        };
    };

    function timer() {
        counter--;
        $(".lead").html("Time Remaining: " + counter);

        // When timer hits 0
        if (counter <= 0) {
            $(".lead").text("Time Remaining: 0");
            $(".q-one").text();
            $(".correct").text("Correct Answers:  " + correct);
            $(".wrong").text("Wrong Answers:  " + incorrect);
            $(".quiz p").hide();
            clearInterval(time);
            done();
        };
    };
    //Once Button is clicked



    $(".btn").click(function () {
        // Hides the button
        $(".btn").hide();
        for (var i = 0; i < questions.length; i++) {
            $(".q-one").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $(".q-one").append("<input type='radio' name = 'question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        // The timer
        time = setInterval(timer, 1000);
    })


    //Questions

    var questions = [{
        question: "And You Will Know My Name Is The Lord When I Lay My Vengeance Upon Thee!",
        answers: ["Pulp Fiction", "Star Wars", "Shaft", "Avengers"],
        correctAnswer: "Pulp Fiction"
    }, {
        question: "My duty to please that booty",
        answers: ["Pulp Fiction", "Star Wars", "Shaft", "Avengers"],
        correctAnswer: "Shaft"
    }, {
        question: " I'm going to put an end to this, once and for all! ",
        answers: ["Pulp Fiction", "Star Wars", "Shaft", "Avengers"],
        correctAnswer: "Star Wars"
    }, {
        question: "I recognize the council has made a decision, but given that its a stupid-ass decision, ive elected to ignore it.",
        answers: ["Pulp Fiction", "Star Wars", "Shaft", "Avengers"],
        correctAnswer: "Avengers"
    }];

});