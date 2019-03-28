let number = 91;
 var intervalId;

const answerSheet = [" 1.c", " 2.c", " 3.c"," 4.c"," 5.d"," 6.b"," 7.d"," 8.b"];

 function stop() {
     clearInterval(intervalId);
   };

 function run() {
  clearInterval(intervalId);
     intervalId = setInterval(decrement, 1000);
   };

 function decrement() {
     number--;
 $("#show-number").html("You have " + number + " seconds left.");

 if (number > 0 && number <= 90 ){
    $("#startButton").css("display", "none");
    $(".container").css("visibility", "visible");
    $("#show-number").css("visibility", "visible");
    $("#answerSheet").css("visibility", "visible");
    $("#userAnswers").css("visibility", "visible");
 };


 if (number === 0) {
    stop();
    $("submitButton").on("click", submitAnswers());
    $("#startButton").css("display", "none");
    $(".container").css("display", "none");
    }
 };


 

 $("#startButton").on("click", run)

 $("#submitButton").on("click", stop)

 
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

    let userAnswers = ["1." + q1, " 2." + q2,  " 3."+ q3, " 4."+ q4, " 5."+ q5, " 6."+ q6, " 7."+ q7, " 8."+ q8 ];
    // $(".container").css("display", "none");
    $(".container").css("display", "none");
    $("#show-number").css("visibility", "hidden");
    $("#answerSheet").html("Correct Answers: " + answerSheet);
    $("#userAnswers").html("Your Answers: " + userAnswers);
    $("#resultsDiv").html("You got " + score +" out of " + total+ " questions correct.");
    return false;
};

// function answerSheet() {
//     for (let i = 0; i < answers.length; i++)
//     $("#answerSheet").html(answers[i]);
// }
//const startGame = 0
//if(time === 0:00){submitAnswers();};
