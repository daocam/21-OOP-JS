export default class Card {
    constructor(value, suit) {
        this._suit = suit;
        this._value = value;
    
        this.init();
    }

    init() {
        let values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'],
            suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'],
            cardMap = {
            'Ace': 11,
            'King': 10,
            'Queen': 10,
            'Jack': 10
        }
    }

    randomCard() {
        return Math.floor(Math.random() * (11 - 2)) + 2 + 1;
    }
   
}
