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

const player1CardSlat = document.quaerySelector('.player_1-card-slot')

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

player1CardSlot.appendChild(deck.cards[0].getHTML())