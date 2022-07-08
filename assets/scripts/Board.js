import Player from './Player.js';

export default class Board {
    constructor() {
        this._elPartie = document.querySelector('[data-js-partie]');
        this._elForm = this._elPartie.querySelector('form');
        this._elInputNbJoueur = this._elForm['nombre-joueur'];
        this._elBtnSubmit = this._elForm['submit'];
        this._elPlayersParent = this._elPartie.querySelector('[data-js-players]');

        this.init(); 
        
        // console.log(this._elForm);
        //console.log(this._elInputNbJoueur.value);
        // console.log(this._elBtnSubmit);
        //console.log(this._elPlayersParent);
 
    }

    init() {
        this._elBtnSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            
            for (let i = 1; i <= this._elInputNbJoueur.value; i++) {
                let player =  {
                    numero: i
                }

                this.addPlayer(player);
            }
        }.bind(this));
    }


    addPlayer(player) {

        let playerDOM = `
                            <div class="player" data-js-player="${player.numero}">
                                <h2>Joueur ${player.numero}</h2>
                                <ul data-js-cards></ul>
                                <p>Total : <span data-js-point>0</span></p>
                                <button data-js-player-cta="hit">Jouer</button>
                                <button data-js-player-cta="stay">Stop</button>
                            </div>
                        `;

        this._elPlayersParent.insertAdjacentHTML('beforeend', playerDOM);

        new Player (this._elPlayersParent.lastElementChild);
    }
    
}

new Board();