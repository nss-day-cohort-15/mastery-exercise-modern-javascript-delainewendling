var BattleDome = (function(robots){

  robots.Robot = {}

  //Robot Constructor Function
  robots.Robot.Player = function(name){
    this.health = null;
    this.strength = null;
    this.weapon = null;

    this.name = name || "unknown player";
  }

  return robots

})(BattleDome || {})
