var BattleDome = (function(robots){

var Robot = function(name) {
  this.health = null;
  this.damage = null;
  this.name = name || "unknown player"
}

//Rolling Robot Chain
var RollingRobot = function() {

}
RollingRobot.prototype = new Robot()
RollingRobot.prototype.setHealth = function(){
  this.health = Math.round(Math.random()*50)+100
}

var Rosie = function (){

}
Rosie.prototype = new RollingRobot()
// Rosie.prototype.setDamage =

var WallE = function (){

}
WallE.prototype = new RollingRobot()

//Walking Robot Chain
var WalkingRobot = function() {

}
WalkingRobot.prototype = new Robot()
WalkingRobot.prototype.setHealth = function(){
  this.health = Math.round(Math.random()*35)+85
}

var C3PO = function (){

}
C3PO.prototype = new WalkingRobot()

var BiPed = function (){

}
BiPed.prototype = new WalkingRobot()

//Flying Robot Chain
var FlyingRobot = function() {

}
FlyingRobot.prototype = new Robot()
FlyingRobot.prototype.setHealth = function(){
  this.health = Math.round(Math.random()*20)+70
}

var BlueDrone = function() {

}
BlueDrone.prototype = new FlyingRobot()


var ParrotDrone = function () {

}
ParrotDrone.prototype = new FlyingRobot()


robots.SelectRobotModel1 = function(robotSelected){
  console.log("robot selected", robotSelected)

  switch (robotSelected) {
    case "Rosie":
      var playerRobot = new Rosie()
      break;
    case "WallE":
      var playerRobot = new WallE()
      break;
    case "C3PO":
      var playerRobot = new C3PO()
      break;
    case "BiPed":
      var playerRobot = new BiPed()
      break;
    case "BlueDrone":
      var playerRobot = new BlueDrone()
      break;
    case "ParrotDrone":
      var playerRobot = new ParrotDrone()
      break;
  }
  // robots.SetPlayerNames = function(player1, player2){
  // var player1 = new Robot(player1)
  // console.log("player1 name", player1)
  // player1(player1)

  // var player2 = new Robot(player2)
  // console.log("player 2", player2)
  // player2(player2)
  }

  //getter methods for players
  function player1 (player1) {
    return player1
  }

  function player2 (player2) {
    return player2
  }

  // console.log("player 1 robot", player1robot)

// console.log("selectedRobotName", selectedRobotName)

// var robotSelection = playerSelection()
// var player1Model = new robotSelection ()
// }


// player1.health = whatever type of robot it is
// player1.damage = whatever model of robot it is

return robots

})(BattleDome || {})




