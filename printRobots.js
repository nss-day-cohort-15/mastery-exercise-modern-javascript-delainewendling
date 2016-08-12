var BattleDome = (function(robots){

  robots.printRobots = function(robotArray){
    console.log("robots", robotArray)
    robotArray.forEach((robot)=>{
      $(`.${robot.robotName}`).append(`<img src="${robot.robotImg}" class="${robot.robotName} robotImg" data-container=".${robot.robotName}" data-toggle="popover" data-placement="top" data-content="${robot.description}">`)
    })
  }
  robots.printWeapons = function(weaponArray){
    weaponArray.forEach((weapon)=>{
      $(`.${weapon.weaponContainer}`).append(`<div class="col-xs-6"><img src="${weapon.weaponImg}" class="${weapon.weaponName} robotImg hidden" data-container=".${weapon.weaponName}" data-toggle="popover" data-placement="top" data-content="${weapon.description}"></div>`)
    })
  }

  return robots
})(BattleDome || {})
