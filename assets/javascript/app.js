$(document).ready(function () {

    // variables
    var score = 0;
    var counter = 5;


    //Once Button is clicked

    $(".btn").click(function () {

        // The timer
        setInterval(timer, 1000);

        function timer() {
            counter--;
            $(".lead").html("Time Remaining: " + counter); 

            // When timer hits 0
            if (counter < 1) {
                $(".lead").html("Time Remaining: 0"); 
                $(".q-one h2").html("Correct Answers:  ");
                $(".q-two h2").html("Wrong Answers:  ");
                $("p").hide();
            }

            
        }

        // Hides the button
        $(".btn").hide();

        //Questions
        // Question 1
        $(".q-one h2").html('"And You Will Know My Name Is The Lord When I Lay My Vengeance Upon Thee!"');

        $(".one-1").html("Pulp Fiction");
        $(".one-2").html("Star Wars");
        $(".one-3").html("Shaft");
        $(".one-4").html("Avengers");

        // Question 2
        $(".q-two h2").html('"My duty to please that booty"');

        $(".two-1").html("Pulp Fiction");
        $(".two-2").html("Star Wars");
        $(".two-3").html("Shaft");
        $(".two-4").html("Avengers");

        // Once timer hits zero

        









    });


});