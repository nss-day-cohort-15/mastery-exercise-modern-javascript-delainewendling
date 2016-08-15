var BattleDome = (function(controller){

  var _player1name = null;
  var _player2name = null;
  var _robot1 = null;
  var _weapon1 = null;
  var _robot2 = null;
  var _weapon2 = null;
  var player1;
  var player2;
  var player1Damage;
  var player2Damage;
  var newPlayer1Health;
  var newPlayer2Health;

  $(".name1").on("click", getPlayer1Name)
  $(".name2").on("click", getPlayer2Name)
  $(".robot1").on("click", getPlayer1Robot)
  $(".robot2").on("click", getPlayer2Robot)
  $(".weapon--button1").on("click", sortWeapons1)
  $(".weapon--button2").on("click", sortWeapons2)
  $(".battle--button").on("click", createPlayer1)
  $(".attack").on("click", evadeAttack)

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
    player1 = new BattleDome.Robot.Player(_player1name)
    player1.robot = new BattleDome.Factory[_robot1]()
    player1.weapon = new BattleDome.Armory[weapon1]()
    player1.health += player1.robot.health + player1.weapon.healthBonus
    player1.damage += player1.robot.strength + player1.weapon.damage
    var player1Health = player1.robot.health + player1.weapon.healthBonus
    printPlayerStats(_player1name, _robot1, _weapon1, player1Health, 1)
    createPlayer2()
  }

  function createPlayer2 (){
    var weapon2 = _weapon2.split("-").join("")
    player2 = new BattleDome.Robot.Player(_player2name)
    player2.robot = new BattleDome.Factory[_robot2]()
    player2.weapon = new BattleDome.Armory[weapon2]()
    player2.health += player2.robot.health + player2.weapon.healthBonus
    player2.damage += player1.robot.strength + player2.weapon.damage
    var player2Health = player2.robot.health + player2.weapon.healthBonus
    console.log("player 2 so far", player2)
    printPlayerStats(_player2name, _robot2, _weapon2, player2Health, 2)
  }

  function printPlayerStats (name, robot, weapon, playerHealth, number){
      $(`.player${number}bot`).html(`<h1> ${name} </h1> <p> A ${robot} robot wielding a ${weapon} </p> <h3> HEALTH: <small> ${playerHealth} </h3>`)
  }

  function showImage (){

  }

  function attack () {
    player2Damage = player2.damage + randomDamage()
    newPlayer1Health = player1.health - (player2Damage)
    player1.health = newPlayer1Health
    printPlayerStats(_player1name, _robot1, _weapon1, newPlayer1Health, 1)
    player1Damage = player1.damage + randomDamage()
    newPlayer2Health = player2.health - (player1Damage)
    player2.health = newPlayer2Health
    printPlayerStats(_player2name, _robot2, _weapon2, newPlayer2Health, 2)
    checkHealth(newPlayer1Health, newPlayer2Health)
  }

  function evadeAttack(){
    var evadeAttacks = Math.round(Math.random()*2)
    if (player1.weapon.evasion > 0){
      if (evadeAttacks === 1){

        player1.weapon.evasion --
      }
    } else if (player2.weapon.evasion > 0){
      if (evadeAttacks === 1){
        
        player2.weapon.evasion --
      }
    } else {
      attack()
    }
  }

  // function attack2 (){
  //   $(".attack").on("click", attack(player2, player1))
  //   //
  // }


  function showAttack(damage1, player1Name, damage2, player2Name){
    $('#damageModal').modal("show")
    $(".modal-title").html("<h2> Ouch! </h2>")
    $(".modal-body").html(`<p> ${player1Name} dealt ${damage1} damage </p> <p> ${player2Name} dealt ${damage2} damage </p>`)
    // $('#damageModal').on('hidden.bs.modal', nextFunction)
  }

  function checkHealth(player1Health, player2Health){
    if (player1Health <= 0 && player1Health < player2Health){
      console.log("player 2 is the winner")
      $('#endModal').modal("show")
      $(".modal-title").html(`${player2.name} is the Winner!`)
      $(".modal-body").html(`<p> ${player1.name}'s health: ${player1.health}</p> <p> ${player2.name} health: ${player2.health}</p>`)
    } else if (player1Health <=0 && player1Health === player2Health){
      console.log("Tie")
      $('#endModal').modal("show")
      $(".modal-title").html("It was a tie!")
      $(".modal-body").html(`<p> ${player1.name}'s health: ${player1.health}</p> <p> ${player2.name} health: ${player2.health}</p>`)
    } else if (player2Health <=0 && player2Health < player1Health) {
      console.log("player 1 is the winner")
      $('#endModal').modal("show")
      $(".modal-title").html(`${player1.name} is the Winner!`)
      $(".modal-body").html(`<p> ${player1.name}'s health: ${player1.health}</p> <p> ${player2.name} health: ${player2.health}</p>`)
    } else {
      showAttack(player2Damage, player1.name, player1Damage, player2.name)
    }
  }

  function randomDamage(){
    var randomDamage = Math.round(Math.random()*20)-10
    return randomDamage
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



