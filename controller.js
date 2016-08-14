var BattleDome = (function(controller){

  var _player1name = null;
  var _player2name = null;
  var _robot1 = null;
  var _weapon1 = null;
  var _robot2 = null;
  var _weapon2 = null;

  $(".name1").on("click", getPlayer1Name)
  $(".name2").on("click", getPlayer2Name)
  $(".robot1").on("click", getPlayer1Robot)
  $(".robot2").on("click", getPlayer2Robot)
  $(".weapon--button1").on("click", sortWeapons1)
  $(".weapon--button2").on("click", sortWeapons2)
  $(".battle--button").on("click", createPlayer1)

  function getPlayer1Name (){
    _player1name = $("#player1-name").val()
    console.log("player 1", _player1name)
  }

  function getPlayer2Name () {
    _player2name = $("#player2-name").val()
    console.log("player 2", _player2name)
  }

  function getPlayer1Robot (e){
    changeSelectedClass(e.currentTarget.children[0], "robot")
    _robot1 = e.currentTarget.classList[0]
    console.log("robot 1", _robot1)
  }

  function getPlayer2Robot (e){
    changeSelectedClass(e.currentTarget.children[0], "robot")
    _robot2 = e.currentTarget.classList[0]
    console.log("robot 2", _robot2)
  }

  function changeSelectedClass (target, name) {
    $(`.${name}`).removeClass("selectedItem")
    $(target).addClass("selectedItem")
  }

  function sortWeapons1 (){
    console.log("robot 1", _robot1)
    $(".weapons").removeClass("selectedRobot")
    $(`.${_robot1}Weapons`).removeClass("hidden").addClass("selectedWeapons")
  }

  function sortWeapons2 (){
    console.log("robot 2", _robot2)
    $(".weapons").removeClass("selectedRobot")
    $(`.${_robot2}Weapons2`).removeClass("hidden").addClass("selectedWeapons")
  }

  function createPlayer1 (){
    var weapon1 = _weapon1.split("-").join("")
    var player1 = new BattleDome.Robot.Player(_player1name)
    player1.robot = new BattleDome.Factory[_robot1]()
    player1.weapon = new BattleDome.Armory[weapon1]()
    console.log("player 1 so far", player1)
    printPlayerStats(_player1name, _robot1, _weapon1, player1, 1)
    createPlayer2()
  }

  function createPlayer2 (){
    var weapon2 = _weapon2.split("-").join("")
    var player2 = new BattleDome.Robot.Player(_player2name)
    player2.robot = new BattleDome.Factory[_robot2]()
    player2.weapon = new BattleDome.Armory[weapon2]()
    console.log("player 2 so far", player2)
    printPlayerStats(_player2name, _robot2, _weapon2, player2, 2)
  }

  function printPlayerStats (name, robot, weapon, player, number){
      $(`.player${number}bot`).append(`<h1> ${name} </h1> <p> A ${robot} robot wielding a ${weapon} </p> <h3> HEALTH: <small> ${player.robot.health} </h3>`)
  }

  controller.getPlayer1Weapon = function(e){
    console.log("player 1 weapon", e.currentTarget.classList[0])
    console.log("target", e.currentTarget)
    changeSelectedClass(e.currentTarget, "weapon")
    _weapon1 = e.currentTarget.classList[0]
    console.log("weapon 1", _weapon1)
  }

  controller.getPlayer2Weapon = function(e){
    console.log("player 2 weapon", e.currentTarget.classList[0])
    changeSelectedClass(e.currentTarget, "weapon")
    _weapon2 = e.currentTarget.classList[0]
    console.log("weapon 2", _weapon2)
  }
  return controller

})(BattleDome || {})



