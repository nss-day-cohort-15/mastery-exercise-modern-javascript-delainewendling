describe("The attack function decreases health", function(){

it("Player should be able to deal and receive damage", function(){
    let robot1 = new BattleDome.Robot.Player()
    let robot2 = new BattleDome.Robot.Player()
    robot1.damage = 30
    robot2.damage = 40
    robot1.health = 150
    let robot2Health = 160

    expect(robot1.attack(robot2)).toBeLessThan(robot2Health)
  });

it()

})