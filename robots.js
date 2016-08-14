var BattleDome = (function(robots){

  robots.Factory = {}

  //Rolling Robot Chain
  robots.Factory.RollingRobot = function() {
    this.health = Math.round(Math.random()*50)+100
  }

  robots.Factory.Rosie = function (){
    this.strength = Math.round(Math.random()*4)+6
  }
  robots.Factory.Rosie.prototype = new robots.Factory.RollingRobot()

  robots.Factory.WallE = function (){
    this.strength = Math.round(Math.random()*3)+5
  }
  robots.Factory.WallE.prototype = new robots.Factory.RollingRobot()

  //Walking Robot Chain
  robots.Factory.WalkingRobot = function() {
    this.health = Math.round(Math.random()*35)+85
  }

  robots.Factory.C3PO = function (){
    this.strength = Math.round(Math.random()*2)+4
  }
  robots.Factory.C3PO.prototype = new robots.Factory.WalkingRobot()

  robots.Factory.Hector = function (){
    this.strength = Math.round(Math.random()*2)+5
  }
  robots.Factory.Hector.prototype = new robots.Factory.WalkingRobot()

  //Flying Robot Chain
  robots.Factory.FlyingRobot = function() {
    this.health = Math.round(Math.random()*20)+70
  }

  robots.Factory.Drone = function() {
    this.strength = Math.round(Math.random()*4)+8
  }
  robots.Factory.Drone.prototype = new robots.Factory.FlyingRobot()


  robots.Factory.Parrot = function () {
    this.strength = Math.round(Math.random()*7)+7
  }
  robots.Factory.Parrot.prototype = new robots.Factory.FlyingRobot()

return robots

})(BattleDome || {})




