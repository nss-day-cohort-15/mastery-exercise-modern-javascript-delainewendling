var BattleDome = (function(controller){

  // var _robot1 = null;
  // var _weapon1 = null;
  // var _robot2 = null;
  // var _weapon2 = null;

  $(".name1").on("click", controller.getPlayer1Name)
  $(".name2").on("click", controller.getPlayer2Name)
  $(".robot1").on("click", controller.getPlayer1Robot)
  $(".robot2").on("click", controller.getPlayer2Robot)

  controller.getPlayer1Name = function(){
    console.log("player 1 Name", $("#player1-name").val())
    return $("#player1-name").val()
  }

  controller.getPlayer2Name = function() {
    console.log("player 2 Name", $("#player2-name").val())
    return $("#player2-name").val()
  }

  controller.getPlayer1Robot = function(e){
    controller.changeSelectedClass(e.currentTarget.children[0], "robot")
    return e.currentTarget.classList[0]
  }

  controller.getPlayer2Robot = function(e){
    controller.changeSelectedClass(e.currentTarget.children[0], "robot")
    return e.currentTarget.classList[0]
  }

  controller.getPlayer1Weapon = function(e){
    console.log("player 1 weapon", e.currentTarget.classList[0])
    controller.changeSelectedClass(e.currentTarget, "weapon")
    return e.currentTarget.classList[0]
  }

  controller.getPlayer2Weapon = function(e){
    console.log("player 2 weapon", e.currentTarget.classList[0])
    controller.changeSelectedClass(e.currentTarget, "weapon")
    return e.currentTarget.classList[0]
  }

  controller.changeSelectedClass = function (target, name) {
    $(`.${name}`).removeClass("selectedItem")
    $(target).addClass("selectedItem")
  }

  return controller

})(BattleDome || {})



