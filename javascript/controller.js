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

  $(".name1").on("click", getPlayer1Name);
  $(".name2").on("click", getPlayer2Name);
  $(".robot1").on("click", getPlayer1Robot);
  $(".robot2").on("click", getPlayer2Robot);
  $(".weapon--button1").on("click", sortWeapons1);
  $(".weapon--button2").on("click", sortWeapons2);
  $(".battle--button").on("click", createPlayer1)
  $(".attack").on("click", battleFieldAttack);
  $(".restart").on("click", restart)
  $(".fightAgain").on("click", fightAgain)

  function getPlayer1Name (){
    _player1name = $("#player1-name").val();
    console.log("player 1", _player1name);
  };

  function getPlayer2Name () {
    _player2name = $("#player2-name").val();
    console.log("player 2", _player2name);
  };

  function getPlayer1Robot (e){
    changeSelectedClass(e.currentTarget.children[0], "robot");
    _robot1 = e.currentTarget.classList[0];
    console.log("robot 1", _robot1);
  };

  function getPlayer2Robot (e){
    changeSelectedClass(e.currentTarget.children[0], "robot");
    _robot2 = e.currentTarget.classList[0];
    console.log("robot 2", _robot2);
  };

  function changeSelectedClass (target, name) {
    $(`.${name}`).removeClass("selectedItem");
    $(target).addClass("selectedItem");
  };

  function sortWeapons1 (){
    console.log("robot 1", _robot1);
    $(".weapons").removeClass("selectedRobot");
    $(`.${_robot1}Weapons`).removeClass("hidden").addClass("selectedWeapons");
  };

  function sortWeapons2 (){
    console.log("robot 2", _robot2);
    $(".weapons").removeClass("selectedRobot");
    $(`.${_robot2}Weapons2`).removeClass("hidden").addClass("selectedWeapons");
  };

  function createPlayer1 (){
    var weapon1 = _weapon1.split("-").join("");
    player1 = new BattleDome.Robot.Player(_player1name);
    player1.robot = new BattleDome.Factory[_robot1]();
    player1.weapon = new BattleDome.Armory[weapon1]();
    player1.initialHealth += player1.robot.health + player1.weapon.healthBonus;
    player1.health += player1.robot.health + player1.weapon.healthBonus;
    player1.baseDamage += player1.robot.strength + player1.weapon.damage;
    console.log("player 1", player1);
    console.log("player 1 damage", player1.damage);
    printPlayerStats(_player1name, _robot1, _weapon1, player1.health, 1);
    createProgressBar(player1, "player1")
    createPlayer2();
  };

  function createPlayer2 (){
    var weapon2 = _weapon2.split("-").join("");
    player2 = new BattleDome.Robot.Player(_player2name);
    player2.robot = new BattleDome.Factory[_robot2]();
    player2.weapon = new BattleDome.Armory[weapon2]();
    player2.initialHealth += player2.robot.health + player2.weapon.healthBonus;
    player2.health += player2.robot.health + player2.weapon.healthBonus;
    player2.baseDamage += player2.robot.strength + player2.weapon.damage;
    console.log("player 2", player2);
    console.log("player 2 damage", player2.damage);
    printPlayerStats(_player2name, _robot2, _weapon2, player2.health, 2);
    createProgressBar(player2, "player2")
    showImage(_robot1, _robot2)
  };


  function printPlayerStats (name, robot, weapon, playerHealth, number){
      $(`.player${number}bot`).html("")
      $(`.player${number}bot`).append(`<h1> ${name} </h1> <p> A ${robot} robot wielding a ${weapon}.`);
      $(`.player${number}Health`).html(`<h3> HEALTH: <small> ${playerHealth} </h3>`);
  };

  function updateHealth (playerHealth, number){
    $(`.player${number}Health`).html(`<h3> HEALTH: <small> ${playerHealth} </h3>`);
  };

  function showImage (robot1, robot2){
    var robot_1 = robot1.toLowerCase()
    var robot_2 = robot2.toLowerCase()
    $('.player1bot').append(`<img src="images/${robot_1}.jpg" class="playerImg">`)
    $('.player2bot').append(`<img src="images/${robot_2}.jpg" class="playerImg">`)
  }

  function battleFieldAttack (){
    console.log("inside battle function");
    player1.attack(player2);
    player2.attack(player1);
    console.log("player 1 health", player1.health);
    console.log("player 2 health", player2.health);
    updateHealth(player1.health, 1);
    updateHealth(player2.health, 2);
    createProgressBar(player1, "player1")
    createProgressBar(player2, "player2")
    checkHealth(player1.health, player2.health);
  };

  function restart(){
    location.reload()
    $(".ouch").html("");
    $(".stats").html("");
  }

  function fightAgain(){
    $('#endModal').modal("hide");
    player1.health = player1.initialHealth
    player2.health = player2.initialHealth
    $(".ouch").html("");
    $(".stats").html("");
    printPlayerStats(_player1name, _robot1, _weapon1, player1.health, 1)
    printPlayerStats(_player2name, _robot2, _weapon2, player2.health, 2)
    createProgressBar(player1, "player1")
    createProgressBar(player2, "player2")
    showImage(_robot1, _robot2)
  }

  function createProgressBar (player, name) {
    $(`.${name}Progress`).html("")
    var totalHealth = `${name}Health`
    if (name === "player1"){
      playerHealthPercentage = Math.floor(player1.health/player1.initialHealth*100)
    } else {
      playerHealthPercentage = Math.floor(player2.health/player2.initialHealth*100)
    }
    $(`.${name}Progress`).append(`<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="${player.health}" aria-valuemin="0" aria-valuemax="${player.initialHealth}" id="${name}ProgressBar" style="width: ${playerHealthPercentage}%">
      <span> ${playerHealthPercentage}% Health </span>
      </div>`)
  }
  // function evadeAttack(){
  //   var evadeAttacks = Math.round(Math.random()*2)
  //   if (player1.weapon.evasion > 0){
  //     if (evadeAttacks === 1){

  //       player1.weapon.evasion --
  //     }
  //   } else if (player2.weapon.evasion > 0){
  //     if (evadeAttacks === 1){
  //       player2.weapon.evasion --
  //     }
  //   } else {
  //     attack()
  //   }
  // }

  function showAttack(damage1, player1Name, damage2, player2Name){
    $(".ouch").html("<h2> Ouch! </h2>");
    $(".stats").html(`<p> ${player1Name} dealt ${damage1} damage </p> <p> ${player2Name} dealt ${damage2} damage </p>`);
  };

  function checkHealth(player1Health, player2Health){
    if (player1Health <= 0 && player1Health < player2Health){
      console.log("player 2 is the winner");
      $('#endModal').modal("show");
      $(".modal-title").html(`${player2.name} is the Winner!`);
      $(".modal-body").html(`<p> ${player1.name}'s health: ${player1.health}</p> <p> ${player2.name} health: ${player2.health}</p>`);
    } else if (player1Health <=0 && player1Health === player2Health){
      console.log("Tie");
      $('#endModal').modal("show");
      $(".modal-title").html("It was a tie!");
      $(".modal-body").html(`<p> ${player1.name}'s health: ${player1.health}</p> <p> ${player2.name} health: ${player2.health}</p>`);
    } else if (player2Health <=0 && player2Health < player1Health) {
      console.log("player 1 is the winner");
      $('#endModal').modal("show");
      $(".modal-title").html(`${player1.name} is the Winner!`);
      $(".modal-body").html(`<p> ${player1.name}'s health: ${player1.health}</p> <p> ${player2.name} health: ${player2.health}</p>`);
    } else {
      showAttack(player1.damage, player1.name, player2.damage, player2.name);
    }
  }

  controller.getPlayer1Weapon = function(e){
    console.log("player 1 weapon", e.currentTarget.classList[0]);
    console.log("target", e.currentTarget);
    changeSelectedClass(e.currentTarget, "weapon");
    _weapon1 = e.currentTarget.classList[0];
    console.log("weapon 1", _weapon1);
  };

  controller.getPlayer2Weapon = function(e){
    console.log("player 2 weapon", e.currentTarget.classList[0]);
    changeSelectedClass(e.currentTarget, "weapon");
    _weapon2 = e.currentTarget.classList[0];
    console.log("weapon 2", _weapon2)
  }
  return controller;

})(BattleDome || {});



