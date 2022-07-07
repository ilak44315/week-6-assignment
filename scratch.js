// function doItManyTimes() {

//     for(let i = 0; i < 3; i++) {
//         doSomething()
//     }
// }

// function doSomething() {

//     for(let i = 0; i < 3; i++) {
//         console.log('something')
//     }
// }

// doItManyTimes();

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer = (player) => {
        if(player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error('You can only add an instance of a Player.')
        }
    }

    describe = () => {
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe = () => {
        return `${this.name} plays ${this.position}.`;
    }
}