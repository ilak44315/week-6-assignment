const expect = chai.expect;

describe("Team Class", function() {
    it("should save the name to the name property", function() {
        // Arrange
        const newTeamName = "Lakers";
        // Act
        const newTeam = new Team(newTeamName)
        // Assert
        expect(newTeam.name).to.equal(newTeamName)
    })
    it("should add a valid player", function() {
        // Arrange
        const newTeam = new Team("Lakers")
        // Act
        newTeam.addPlayer(new Player("Mia", "defense"))
        // Assert
        expect(newTeam.players.length).to.equal(1)
        expect(newTeam.players[0].name).to.equal("Mia")
        expect(newTeam.players[0].position).to.equal("defense")
    })
})