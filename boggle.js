class Die {
    // letters = array of strings of letters on this die
    constructor(letters) {
        this.allLetters = letters;
        this.currentLetter = letters[0]
    }

    reroll() {
        const randomIndex = Math.floor(Math.random() * this.allLetters.length)
        this.currentLetter = this.allLetters[randomIndex];
    }
}

class Board {
    constructor() {
        this.dice = [];
        for(let i = 0; i < 9; i++) {
            this.dice.push( new Die(["A", "R", "C", "D", "E", "N"]) ) // all dice will have the same sides
        }
    }

    shuffle() {
        // shuffle die locations in array
        this.dice.sort(() => (Math.random() > 0.5) ? 1 : -1)
        // reroll each die
        for(const die of this.dice) {
            die.reroll();
        }
    }
}

class Game {
    constructor() {
        this.board = new Board();
    }

    start() {
        this.board.shuffle()
        
    }
}

const game = new Game();
game.start();