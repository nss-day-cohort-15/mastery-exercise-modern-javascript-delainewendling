var BattleDome = (function(robots){

  robots.Factory = {}

  //Rolling Robot Chain
  robots.Factory.RollingRobot = function() {

  }
  robots.Factory.RollingRobot.prototype.setHealth = function(){
    this.health = Math.round(Math.random()*50)+100
  }

  robots.Factory.Rosie = function (){

  }
  robots.Factory.Rosie.prototype = new robots.Factory.RollingRobot()
  // Rosie.prototype.setDamage =

  robots.Factory.WallE = function (){

  }
  robots.Factory.WallE.prototype = new robots.Factory.RollingRobot()

  //Walking Robot Chain
  robots.Factory.WalkingRobot = function() {

  }
  robots.Factory.WalkingRobot.prototype.setHealth = function(){
    this.health = Math.round(Math.random()*35)+85
  }

  robots.Factory.C3PO = function (){

  }
  robots.Factory.C3PO.prototype = new robots.Factory.WalkingRobot()

  robots.Factory.Hector = function (){

  }
  robots.Factory.Hector.prototype = new robots.Factory.WalkingRobot()

  //Flying Robot Chain
  robots.Factory.FlyingRobot = function() {

  }
  robots.Factory.FlyingRobot.prototype.setHealth = function(){
    this.health = Math.round(Math.random()*20)+70
  }

  robots.Factory.Drone = function() {

  }
  robots.Factory.Drone.prototype = new robots.Factory.FlyingRobot()


  robots.Factory.Parrot = function () {

  }
  robots.Factory.Parrot.prototype = new robots.Factory.FlyingRobot()

return robots

})(BattleDome || {})




