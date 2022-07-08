//import Game from './Game.js';
import Card from './Card.js';

export default class Player {
    constructor() {
        this._elPartie = document.querySelector('[data-js-partie]');
        this._elPlayersParent = this._elPartie.querySelector('[data-js-players]');
        this._elCtas = this._elPlayersParent.querySelectorAll('[data-js-player-cta]');
        this._elCards = this._elPlayersParent.querySelector('[data-js-cards]');
        this._elPoints = this._elPlayersParent.querySelector('[data-js-player-point]');

        // this._totalPoints = this._elPoints.value;
        this.init();   
    }

    init() {
        for (let i = 0; i < this._elCtas.length; i++) {
            this._elCtas[i].addEventListener('click', function(e) {
                let cta = e.target.dataset.jsPlayerCta;
                this.manageCtas(cta);
                console.log(this._elPoints)
            }.bind(this));
            
        }
    } 
    
    manageCtas(cta) {
        switch (cta) {
            case 'hit':
                let nbHits = new Card();
                this.injectCard(nbHits)
                this._elPoints.textContent = this._totalPoints;

                if (this._totalPoints == 21 || this._totalPoints > 21) this.endGame(this._totalPoints);
                break;
            case 'stay':
                this._el.classList.add('stay');
                break;
        }
    }


    injectCard(nbHits) {
        let cardDOM = `<li>${nbHits}</li>`;
        this._elCards.insertAdjacentHTML('beforeend', cardDOM);

        new Card (this._elCards.lastElementChild);
    }

}

new Player();