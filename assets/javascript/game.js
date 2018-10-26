$(document).ready(function() {

    var randomNumber;
    var score = 0;
    var addThis = 0;
    var numberOfGems = 4;
    var gemValues = [];
    var gemIDs = [
        "#gem1",
        "#gem2",
        "#gem3",
        "#gem4"
    ];

    var wins = 0;
    var losses = 0;

    window.onload = function() {
        reset();
    };
  
    $(".gems").on('click', function() {
        addThis = this.value;
        score += parseInt(addThis);
      $("#totalScore").text(score);
      if (score === randomNumber) {
          wins++;
          reset();
          $("#wins").text("Wins " + wins);
      } else if (score > randomNumber) {
          losses++;
          reset();
          $("#losses").text("Losses: " + losses);
      }
    })

    var reset = function() {
        randomNumber = Math.floor((Math.random() * 100) + 19);
        score = 0;
        $("#randomNumber").text(randomNumber);
        for (var i = 0; i < numberOfGems; i++) {
            gemValues[i] = Math.floor((Math.random() * 11) + 1);
            $(gemIDs[i]).attr("value", gemValues[i]);
        }
        $("#totalScore").text(score);
    }
});