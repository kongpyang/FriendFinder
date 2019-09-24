
var answerSelected;

$("#submitBtn").on("click", function () {
    answerSelected = $("option:selected");
    $("#surveyBody").hide();
})