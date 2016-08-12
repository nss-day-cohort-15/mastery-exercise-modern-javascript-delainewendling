var BattleDome = (function(robots){

  robots.loadItems = function(){
    Promise.all([
      $.getJSON('robots.json'),
      $.getJSON('weapons.json')
      ])
    .then(function(res){
        robotArray = res[0].robots;
        weaponArray = res[1].weapons;
        BattleDome.printRobots(robotArray)
        BattleDome.printWeapons(weaponArray)
    })
  }

  return robots

})(BattleDome || {})

BattleDome.loadItems()