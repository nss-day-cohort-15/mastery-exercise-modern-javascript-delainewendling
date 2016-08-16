var BattleDome = (function(robots){

  $('[data-toggle="popover"]').popover();

  robots.printRobots = function(robotArray){
    console.log("robots", robotArray)
    robotArray.forEach((robot)=>{
      $(`.${robot.robotName}`).append(`<img src="${robot.robotImg}" class="robotImg robot" data-container=".${robot.robotName}" data-toggle="popover" data-placement="top" data-content="${robot.description}">`);
    });
    $(".robotImg").on("mouseenter", showPopover);
    $(".robotImg").on("mouseleave", hidePopover);
  }

  robots.printWeapons = function(weaponArray){
    weaponArray.forEach((weapon)=>{
      $(`.${weapon.weaponContainer}`).append(`<div class="col-md-6 weaponBox"><h4>${weapon.weaponName}</h4><img src="${weapon.weaponImg}" class="${weapon.weaponName} robotImg weapon weapon1" data-container=".${weapon.weaponName}" data-toggle="popover" data-placement="top" data-content="${weapon.description}"></div>`);
    })
    weaponArray.forEach((weapon)=>{
      $(`.${weapon.weaponContainer}2`).append(`<div class="col-md-6 weaponBox"><h4>${weapon.weaponName}</h4><img src="${weapon.weaponImg}" class="${weapon.weaponName} robotImg weapon weapon2" data-container=".${weapon.weaponName}" data-toggle="popover" data-placement="top" data-content="${weapon.description}"></div>`);
    });
    $(".weapon1").on("click", BattleDome.getPlayer1Weapon);
    $(".weapon2").on("click", BattleDome.getPlayer2Weapon);
    $(".robotImg").on("mouseenter", showPopover);
    $(".robotImg").on("mouseleave", hidePopover);
  }

    function showPopover(e){
      $(e.currentTarget).popover('show');
    }

    function hidePopover(e){
      $(e.currentTarget).popover('hide');
    }

  return robots;
})(BattleDome || {});
