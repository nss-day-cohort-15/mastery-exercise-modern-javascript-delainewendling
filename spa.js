var BattleDome = (function(player){
  //Grab variables from the DOM
  $playerContainer = $(".players")
  // $player1View = $playerContainer.find("#player1View")
  $player2View = $playerContainer.find("#player2View")
  $battleView = $playerContainer.find("#battleView")
  $player1Name = $playerContainer.find("#player1Name")
  $player2Name = $playerContainer.find("#player2Name")
  $robotImage = $playerContainer.find(".robotImg")
  $submitPlayer1 = $playerContainer.find("#player1submit")
  $submitPlayer2 = $playerContainer.find("#player2submit")

  //bind events
  $robotImage.on("click", robotClicked)
  $submitPlayer1.on("click", goToPlayer2)
  $player1Name.on("keypress", (e)=>{
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
      goToPlayer2()
    }
  })
  $submitPlayer2.on("click", goToBattle)
  $player2Name.on("keypress", (e)=>{
    e.which = e.which || e.keyCode;
    if(e.which == 13) {
      goToBattle()
    }
  })

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
  }

  function goToPlayer2() {
    $player1Name.removeClass("selected").addClass("hidden")
    $player2View.removeClass("hidden").addClass("selected")
  }

  function goToBattle(){
    $player2Name.removeClass("selected").addClass("hidden")
    $battleView.removeClass("hidden").addClass("selected")
  }

  return player
})(BattleDome || {})