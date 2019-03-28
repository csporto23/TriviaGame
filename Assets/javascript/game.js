
 //$("#startButton").css("visibility", "hidden")
//  function startGame() {
//      $("#startButton".css("visibility", "hidden"));
//  }
 
 



//timer**

 let number = 61;
 var intervalId;

 function stop() {
     clearInterval(intervalId);
   };

 function run() {
  clearInterval(intervalId);
     intervalId = setInterval(decrement, 1000);
   };

   function containerDisappear() {
    $(".container").css("visibility", "visible");
   }

 function decrement() {
     number--;
 $("#show-number").html(number);

 if (number > 0 && number <= 60 ){
    $("#startButton").css("display", "none");
    containerDisappear();
 };


 if (number === 0) {
    stop();
    $("submitButton").on("click", submitAnswers());
    $("#startButton").css("display", "none");
    $(".container").css("display", "none");
    }
 };


 

 $("#startButton").on("click", run);

 $("#submitButton").on("click", stop);

 
//answers**

    var total = 8;
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

    const answers = ["c","c","c","c","d","b","d","b"];
    

    if(q1 === answers[0]) {
         score++;
    };

    if(q2 === answers[1]) {
        score++;
    };

    if(q3 === answers[2]) {
        score++;
    };

    if(q4 === answers[3]) {
        score++;
    };

    if(q5 === answers[4]) {
        score++;
    };

    if(q6 === answers[5]) {
        score++;
    };

    if(q7 === answers[6]) {
        score++;
    };

    if(q8 === answers[7]) {
        score++;
    };

    // $(".container").css("display", "none");

    $("#resultsDiv").html("You got " + score +" out of " + total+ " questions correct.");
    return false;
};

// function answerSheet() {
//     for (let i = 0; i < answers.length; i++)
//     $("#answerSheet").html(answers[i]);
// }
//const startGame = 0
//if(time === 0:00){submitAnswers();};
