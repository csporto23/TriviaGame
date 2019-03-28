
 //$("#startButton").css("visibility", "hidden")
//  function startGame() {
//      $("#startButton".css("visibility", "hidden"));
//  }
 
 



//timer**

let number = 8;
var intervalId;

function stop() {
    clearInterval(intervalId);
  };

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  };

function decrement() {
    number--;
$("#show-number").html(number);

if (number === 0) {
    stop();
}
};

$("#startButton").on("click", run);

$("#submitButton").on("click", stop);


//answers**

const total = 8;
var score = 0;

function submitAnswers() {
    

    //get the users choice
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;

    //console.log(q1);

    
    const answers = ["a","c","d","b","a","b","d","c"]

    if(q1 === answers[0]) {
         score++;
    }

    if(q2 === answers[1]) {
        score++;
    }

    if(q3 === answers[2]) {
        score++;
    }

    if(q4 === answers[3]) {
        score++;
    }

    if(q5 === answers[4]) {
        score++;
    }

    if(q6 === answers[5]) {
        score++;
    }

    if(q7 === answers[6]) {
        score++;
    }

    if(q8 === answers[7]) {
        score++;
    }


    $(".container").css("display", "none")

    //$(".row").css("display", "none")

    
    return false;
}


function callResults() {
    const results = "You got " +score+" out of " + total + " questions correct."
    $("#results").html(results)
}
    
$("#submitButton").on("click", function(){
    callResults();
})


// submitAnswers();
//const startGame = 0
//if(time === 0:00){submitAnswers();};
