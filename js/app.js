/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * app.js to create a new instance of the `Game` class and add event listeners for the start
button and onscreen keyboard buttons.
 */

let game;
let startbutton = document.getElementById('btn__reset');
startbutton.addEventListener('click', function () {
	game = new Game();
	game.startGame();
});

//www.codeinwp.com/snippets/add-event-listener-to-multiple-elements-with-javascript/
let buttons = document.querySelectorAll('.key');
buttons.forEach((button) => {
	button.addEventListener('click', function () {
		game.handleInteraction(button);
	});
});
