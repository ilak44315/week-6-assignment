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

const player1CardSlot = document.querySelector('.player_1-card-slot')
const player1CardDeck = document.querySelector('.player_1-deck')
const player2CardSlot = document.querySelector('.player_2-card-slot')
const player2CardDeck = document.querySelector('.player_2-deck')
const text = document.querySelector('.text')


let player1Deck, player2Deck

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)//finds rounded midpoint which splits the deck in half.
    player1Deck = new Deck(deck.cards.slice(0, deckMidpoint))//first 26 cards
    player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

  cleanBeForRound()
}

function cleanBeForRound(){
    player1CardSlot.innerHTML = ''
    player2CardSlot.innerHTML = ''
    text.innerText = ''
}
function updateDeckCount() {
    player1CardDeck.innerText = player1Deck.numberOfCards
    player2CardDeck.innerText = player2Deck.numberOfCards
}
playerCardSlot.appendChild(playerCard.getHTML())
computerCardSlot.appendChild(computerCard.getHTML())