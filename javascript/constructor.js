var BattleDome = (function(robots){

  robots.Robot = {};

  //Robot Constructor Function
  robots.Robot.Player = function(name){
    this.health = null;
    this.initialHealth = null;
    this.strength = null;
    this.robot = null;
    this.weapon = null;
    this.baseDamage = null;
    this.damage = null;

    this.name = name || "unknown player";
  };

  robots.Robot.Player.prototype.attack = function(target){
    var damage = this.baseDamage + Math.round(Math.random()*10);
    this.damage = damage;
    target.health -= damage;
    return target.health;
  };

  return robots;

})(BattleDome || {});
