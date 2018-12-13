var targetNumber;
var wins = 0;
var losses = 0;
var score;
var blue;
var green;
var pink;
var purple;

function startGame() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $('#computer-number').text(targetNumber);
    blue = Math.floor(Math.random() * 12) + 1;
    green = Math.floor(Math.random() * 12) + 1;
    pink = Math.floor(Math.random() * 12) + 1;
    purple = Math.floor(Math.random() * 12) + 1;
    $('#blue').addClass("crystal-number");
    $('#green').addClass("crystal-number");
    $('#pink').addClass("crystal-number");
    $('#purple').addClass("crystal-number");
    $("#blue").attr("value", blue);
    $("#green").attr("value", green);
    $("#pink").attr("value", pink);
    $("#purple").attr("value", purple);
    score = 0;
    $("#user-number").text(score);
}

startGame();

$(".crystal-number").on("click", function() {
    var crystalValue = $(this).attr("value");
    score = score + parseInt(crystalValue);
    $('#user-number').text(score);

    if (score === targetNumber) {
        wins++;
        $("#wins").text(wins);
        startGame()
    }
    else if (score > targetNumber) {
        losses++;
        $("#losses").text(losses);
        startGame()  
    }
});