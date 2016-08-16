
$(document).ready(function(){

  $("#player-setup").show();
  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--robots":
        moveAlong = ($("#player1-name").val() !== "");
        break;
      case "card--weapons":
        moveAlong = ($("#player1-name").val() !== "");
        // BattleDome.sortWeapons()
        break;
      case "card--name2":
        moveAlong = ($("#player1-name").val() !== "");
        break;
      case "card--robots2":
        moveAlong = ($("#player2-name").val() !== "");
        // BattleDome.sortWeapons()
        break;
      case "card--weapons2":
        moveAlong = ($("#player2-name").val() !== "");
        break;
      case "card--battle":
        moveAlong = ($("#player2-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });
  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });
});

// var BattleDome = (function(player){
//   // Grab variables from the DOM
//   $playerContainer = $(".players")
//   $player2View = $playerContainer.find("#player2View")
//   $battleView = $playerContainer.find("#battleView")
//   $player1Name = $playerContainer.find("#player1Name")
//   $player2Name = $playerContainer.find("#player2Name")
//   $robotImage = $playerContainer.find(".robotImg")
//   $submitRobot = $playerContainer.find(".submitRobot")
//   $submitPlayer1 = $playerContainer.find("#player1submit")
//   $submitPlayer2 = $playerContainer.find("#player2submit")

//   //bind events
//   $robotImage.on("click", robotClicked)
//   $robotImage.on("mouseover", showDescription)
//   $submitRobot.on("click", robotSelected)
//   $submitPlayer1.on("click", goToPlayer2)
//   $player1Name.on("keypress", (e)=>{
//     e.which = e.which || e.keyCode;
//     if(e.which == 13) {
//       goToPlayer2()
//     }
//   })
//   $submitPlayer2.on("click", goToBattle)
//   $player2Name.on("keypress", (e)=>{
//     e.which = e.which || e.keyCode;
//     if(e.which == 13) {
//       goToBattle()
//     }
//   })

//   function showDescription(e){
//     $(e.currentTarget).addClass("backgroundRobot")
//     $(e.currentTarget.nextElementSibling).removeClass("hidden")
//   }

//   function robotClicked(e) {
//     $robotImage.removeClass("selectedRobot")
//     $(e.currentTarget).toggleClass("selectedRobot")
//   }

//   function robotSelected (e){
//     console.log("event", e)
//     var playerNumber = e.currentTarget.className.split("-")[1]
//     console.log("player", playerNumber)
//     console.log(`player${playerNumber}View`)
//     $(`#player${playerNumber}View`).removeClass('selected').addClass("hidden")
//     var selectedRobotId = $playerContainer.find(".selectedRobot")[0].id
//     console.log("selectedRobot id", selectedRobotId)
//     player.selectedRobot(selectedRobotId)
//     goToPlayerName(playerNumber)
//   }

//   function goToPlayerName(playerNumber) {
//     $(`#player${playerNumber}Name`).removeClass("hidden").addClass("selected")
//   }

//   function goToPlayer2() {
//     $player1Name.removeClass("selected").addClass("hidden")
//     $player2View.removeClass("hidden").addClass("selected")
//   }

//   function goToBattle(){
//     var player1Name = $("#player1NameValue").val()
//     var player2Name = $("#player2NameValue").val()
//     // BattleDome.SetPlayerNames(player1Name, player2Name)
//     $player2Name.removeClass("selected").addClass("hidden")
//     $battleView.removeClass("hidden").addClass("selected")
//   }


//   player.selectedRobot = function(robotId){
//     console.log("selected name", name)
//     BattleDome.SelectRobotModel1(robotId)
//   }

//   return player


// })(BattleDome || {})