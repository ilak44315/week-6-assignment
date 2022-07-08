//class//
// Cards//
//Deck//
//Players//
//-	Deal 26 Cards to two Players from a Deck. //
//-	Iterate through the turns where each Player plays a Card//
//-	The Player who played the higher card is awarded a point//
//	Ties result in zero points for either Player//
//-	After all cards have been played, display the score.//

import Deck from './deck.js'

const CARD_VALUE_MAP ={
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10":10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
}

const player1CardSlot = document.querySelector('.player_1-card-slot')
const player2CardSlot = document.querySelector('.player_2-card-slot')
const player1DeckElement = document.querySelector('.player_1-deck')
const player2DeckElement = document.querySelector('.player_2-deck')
const text = document.querySelector('.text')


let player1Deck, player2Deck, inRound, stop//global variables accessable everywhere

document.addEventListener('click', ()=> {
    if (stop) {
        startGame()
        return
    }
    
    if (inRound) {
        cleanBeforRound()
    } else {
        flipCards()
    }
})

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)//finds rounded midpoint which splits the deck in half.
    player1Deck = new Deck(deck.cards.slice(0, deckMidpoint))//first 26 cards
    player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))//remaining cards
    inRound = false
    stop = false

  cleanBeforRound()
}
function flipCards() {
    inRound = true
    
    const player1Card = player1Deck.pop()
    const player2Card = player2Deck.pop()

    player1CardSlot.appendChild(player1Card.getHTML())
    player2CardSlot.appendChild(player2Card.getHTML())

    updateDeckCount()

        
    if (isRoundWinner(player1Card, player2Card)) {
        text.innerText = 'Win'
        player1Deck.push(player1Card)
        player1Deck.push(player2Card)
    } else if (isRoundWinner (player2Card, player1Card)) {
        text.innerText = 'Lose'
        player2Deck.push(player1Card)
        player2Deck.push(player2Card)
    } else {
        text.innerText = 'Draw'
        player1Deck.push(player1Card)
        player2Deck.push(player2Card)
    }
    if (isGameOver (player1Deck)) {
        text.innerText = 'Player 1 Wins!!'
        stop = true
    } else if (isGameOver (player2Deck)){
        text.innerText = 'Player 2 Wins!!'
        stop = true
    }
}
function cleanBeforRound(){
    inRound = false
    player1CardSlot.innerHTML = ''
    player2CardSlot.innerHTML = ''
    text.innerText = ''
    updateDeckCount()
}
function updateDeckCount() {
    player1DeckElement.innerText = player1Deck.numberOfCards
    player2DeckElement.innerText = player2Deck.numberOfCards
}
function isRoundWinner(cardOne, cardTwo) {
    return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}

function isGameOver(deck) {
    return deck.numberOfCards ===0
}
