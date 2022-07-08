//add sutes and values of all cards//
const SUITS = ['♥', '♦' ,'♠', '♣']
const VALUES= ['A', '2', '3', '4','5','6','7','8','9','10','J', 'Q', 'K']

//c: Deck-creates the fresh deck of cards within the class Deck//
export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }
    //c: Deck- getter to shorten code for ease later//
    get numberOfCards() {
        return this.cards.length
    }
    
    pop() {
        return this.cards.shift() //shift returns first element pop returns bottom
    }
    push(card) {
        this.cards.push(card)
    }
    //c:Deck-shuffles the cards to a random number
    shuffle() {
        for (let i = this.numberOfCards -1; i > 0; i--) {
            const newIndex = Math.floor(Math.random()* (i+1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex]= this.cards[i]
            this.cards[i]=oldValue
        }
    }
}
//c: Deck- makes the types of cards//
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    get color() {//selects the color of the card suit
        return this.suit ==='♣' || this.suit === '♠' ? 'black' : 'red'
    }
    //c:Deck-creates our card
    // <div class="card red" data-value="9 ♥">
    //♥
    //</div>//inside of class so it knows its a function//
   getHTML() {
         const cardDiv = document.createElement('div')
         cardDiv.innerText = this.suit
         cardDiv.classList.add('card', this.color)
         cardDiv.dataset.value =`${this.value} ${this.suit}`
         return cardDiv
    }
}

//c:Deck -creates fresh deck of cards with each suite and value//
    function freshDeck() {
        return SUITS.flatMap(suit => {
            return VALUES.map(value=> {
             return new Card(suit, value)
             })
         })
    }
