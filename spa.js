var BattleDome = (function(player){
  //Grab variables from the DOM
  $playerContainer = $(".players")
  // $player1View = $playerContainer.find("#player1View")
  // $player2View = $playerContainer.find("#player2View")
  $player1Name = $playerContainer.find("#player1Name")
  $player2Name = $playerContainer.find("#player2Name")
  $robotImage = $playerContainer.find(".robotImg")

  //bind events
  $robotImage.on("click", robotClicked)

  function robotClicked(e) {
    console.log("robot clicked", e)
    var playerNumber = e.currentTarget.className.split("-")[1]
    console.log("player", playerNumber)
    console.log(`player${playerNumber}View`)
    $(`#player${playerNumber}View`).removeClass('selected').addClass("hidden")
    goToPlayerName(playerNumber)
  }

  function goToPlayerName(playerNumber) {
    $(`#player${playerNumber}Name`).removeClass("hidden").addClass("selected")
    goToPlayer2()
  }

  function goToPlayer2 (){
    
  }

})(BattleDome || {})