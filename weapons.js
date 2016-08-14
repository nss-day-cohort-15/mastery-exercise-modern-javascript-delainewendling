var BattleDome = (function(weapons){

  weapons.Armory = {}

  weapons.Armory.Weapon = function(){
    this.damage = 0;
  }

  // Rosie Weapons
  weapons.Armory.Duster = function(){
    this.damage += Math.round(Math.random()*5 +20)
  }
  weapons.Armory.Duster.prototype = new weapons.Armory.Weapon()

  weapons.Armory.Broom = function(){
    this.damage += Math.round(Math.random()*2 +22)
  }
  weapons.Armory.Broom.prototype = new weapons.Armory.Weapon()

  weapons.Armory.Mop = function(){
    this.damage += Math.round(Math.random()*9 +20)
  }
  weapons.Armory.Mop.prototype = new weapons.Armory.Weapon()

  weapons.Armory.SprayCleaner = function(){
    this.damage += Math.round(Math.random()*9 +21)
  }
  weapons.Armory.SprayCleaner.prototype = new weapons.Armory.Weapon()

  // Wall-E Weapons
  weapons.Armory.AluminumCan = function(){
    this.damage += Math.round(Math.random()*7 +20)
  }
  weapons.Armory.AluminumCan.prototype = new weapons.Armory.Weapon()

  weapons.Armory.BatteryAcid = function(){
    this.damage += Math.round(Math.random()*4 +21)
  }
  weapons.Armory.BatteryAcid.prototype = new weapons.Armory.Weapon()

  weapons.Armory.RustyKnife = function(){
    this.damage += Math.round(Math.random()*6 +23)
  }
  weapons.Armory.RustyKnife.prototype = new weapons.Armory.Weapon()

  weapons.Armory.BananaPeel = function(){
    this.damage += Math.round(Math.random()*9 +21)
  }
  weapons.Armory.BananaPeel.prototype = new weapons.Armory.Weapon()

  // C3PO Weapons
  weapons.Armory.Lightsaber = function(){
    this.damage += Math.round(Math.random()*6 +35)
  }
  weapons.Armory.Lightsaber.prototype = new weapons.Armory.Weapon()

  weapons.Armory.Blaster = function(){
    this.damage += Math.round(Math.random()*10 +30)
  }
  weapons.Armory.Blaster.prototype = new weapons.Armory.Weapon()

  weapons.Armory.Slugthrower = function(){
    this.damage += Math.round(Math.random()*7 +38)
  }
  weapons.Armory.Slugthrower.prototype = new weapons.Armory.Weapon()

  weapons.Armory.Phaser = function(){
    this.damage += Math.round(Math.random()*13 +32)
  }
  weapons.Armory.Phaser.prototype = new weapons.Armory.Weapon()

  // Hector Weapons
  weapons.Armory.FlameThrower = function(){
    this.damage += Math.round(Math.random()*8 +33)
  }
  weapons.Armory.FlameThrower.prototype = new weapons.Armory.Weapon()

  weapons.Armory.CrossBow = function(){
    this.damage += Math.round(Math.random()*4 +35)
  }
  weapons.Armory.CrossBow.prototype = new weapons.Armory.Weapon()

  weapons.Armory.BroadSword = function(){
    this.damage += Math.round(Math.random()*8 +30)
  }
  weapons.Armory.BroadSword.prototype = new weapons.Armory.Weapon()

  weapons.Armory.Rifle = function(){
    this.damage += Math.round(Math.random()*9 +33)
  }
  weapons.Armory.Rifle.prototype = new weapons.Armory.Weapon()

  // Drone Weapons
  weapons.Armory.Bazooka = function(){
    this.damage += Math.round(Math.random()*8 +42)
  }
  weapons.Armory.Bazooka.prototype = new weapons.Armory.Weapon()

  weapons.Armory.MachineGun = function(){
    this.damage += Math.round(Math.random()*8 +41)
  }
  weapons.Armory.MachineGun.prototype = new weapons.Armory.Weapon()

  weapons.Armory.Dynamite = function(){
    this.damage += Math.round(Math.random()*8 +40)
  }
  weapons.Armory.Dynamite.prototype = new weapons.Armory.Weapon()

  weapons.Armory.Bomb = function(){
    this.damage += Math.round(Math.random()*4 +43)
  }
  weapons.Armory.Bomb.prototype = new weapons.Armory.Weapon()

  // Parrot Weapons
  weapons.Armory.Grenade = function(){
    this.damage += Math.round(Math.random()*5 +41)
  }
  weapons.Armory.Grenade.prototype = new weapons.Armory.Weapon()

  weapons.Armory.LaserGun = function(){
    this.damage += Math.round(Math.random()*9 +40)
  }
  weapons.Armory.LaserGun.prototype = new weapons.Armory.Weapon()

  weapons.Armory.Pistol = function(){
    this.damage += Math.round(Math.random()*4 +42)
  }
  weapons.Armory.Pistol.prototype = new weapons.Armory.Weapon()

  weapons.Armory.ChemicalDrop = function(){
    this.damage += Math.round(Math.random()*10 +40)
  }
  weapons.Armory.ChemicalDrop.prototype = new weapons.Armory.Weapon()

  return weapons

})(BattleDome || {})