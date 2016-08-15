describe("The attack function decreases health", function(){

  it("Player should be able to deal damage", function(){
    let robot1 = new BattleDome.Robot.Rosie()
    let robot2 = new BattleDome.Robot.WallE()

    attack()
    expect(robot2.initialHealth).toBeGreaterThan(robot2.health)
  });

  it("Player should be able to receive damage", function(){

  });

})