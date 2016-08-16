describe("The attack function decreases health", function(){

it("Robots should have a health between 75 and 201", function(){
    let robot1 = new BattleDome.Robot.Player()
    robot1.robot = new BattleDome.Factory.Rosie()
    robot1.weapon = new BattleDome.Armory.Duster()
    robot1.health += robot1.robot.health + robot1.weapon.healthBonus

    expect(robot1.health).toBeGreaterThan(74)
    expect(robot1.health).toBeLessThan(202)
})

it("Robots should have a damage between 26 and 70", function(){
    let robot1 = new BattleDome.Robot.Player()
    robot1.robot = new BattleDome.Factory.Rosie()
    robot1.weapon = new BattleDome.Armory.Duster()
    robot1.damage += robot1.robot.strength + robot1.weapon.damage
    expect(robot1.damage).toBeGreaterThan(25)
    expect(robot1.damage).toBeLessThan(71)
})

it("Player should be able to deal and receive damage", function(){
    let robot1 = new BattleDome.Robot.Player()
    let robot2 = new BattleDome.Robot.Player()
    robot1.damage = 30
    robot2.damage = 40
    robot1.health = 150
    let robot2Health = 160

    expect(robot1.attack(robot2)).toBeLessThan(robot2Health)
  });

it("Attck function should deal the correct damage", function(){
    let robot1 = new BattleDome.Robot.Player()
    let robot2 = new BattleDome.Robot.Player()
    robot1.damage = 40
    robot2.damage = 50
    robot1.health = 130
    robot2.health = 140
    let robot2Health = 140

    expect(robot1.attack(robot2)).toBe(robot2Health-robot1.damage)
  });

})