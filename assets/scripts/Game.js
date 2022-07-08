export default class Game {
    constructor() {
        this._elPartie = document.querySelector('[data-js-partie]');
        this._elPlayersParent = this._elPartie.querySelector('[data-js-players]');
        this._elCtas = this._elPlayersParent.querySelectorAll('[data-js-player-cta]');
        this._elBtns = this._elPlayersParent.querySelectorAll('button');
        this._elPlayer = this._elPlayersParent.querySelectorAll('.player');
        this._elPoints = this._elPlayersParent.querySelector('[data-js-player-point]');
        this._totalPoints = parseInt(this._elPoints.value);


        this.init();
    }

    init() {
        for (let i = 0; i < this._elCtas.length; i++) {
            this._elCtas[i].addEventListener('click', function(e) {
                let cta = e.target.dataset.jsPlayerCta;
                this.manageCtas(cta);
                this._elPlayer.classList.add('inactive');

            }.bind(this));
            
        }
    }

    endGame(totalPoints) {
        if (totalPoints == 21) {
            this._el.classList.add('winner');
        } 
    }
   
}

new Game();