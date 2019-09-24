
var answerSelected;
var possibleFriendOne = "";

$("#submitBtn").on("click", function () {
    answerSelected = $("option:selected");

    for (let i = 0; i < friendMatched.length; i++) {
        for (let j = 0; j < answerSelected.length; j++) {
            if(possibleFriendOne === "") {
                possibleFriendOne = friendMatched[i];
            };

            
           Math.abs(answerSelected[j].value - friendMatched[i].scores[j]);
            
        }
        const element = friendMatched[i];
        
    }
    $("#surveyBody").hide();
})