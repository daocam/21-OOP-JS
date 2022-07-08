import Board from './Board.js';

let elPartie = document.querySelector('[data-js-partie]'),
    elForm = elPartie.querySelector('form'),
    elInputNbJoueur = elForm['nombre-joueur'],
    elBtnSubmit = elForm['submit'],
    nbJoueur = elInputNbJoueur.value;

// console.log(elPartie);
// console.log(elForm);
// console.log(elInputNbJoueur);
// console.log(elBtnSubmit);
// console.log(nbJoueur);

elInputNbJoueur.addEventListener('input', function() {
    if (elBtnSubmit.classList.contains('inactive'))
        elBtnSubmit.classList.remove('inactive');
});

elBtnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    elPartie.firstElementChild.classList.add('remove');
    elForm.classList.add('remove');
    new Board();
});
