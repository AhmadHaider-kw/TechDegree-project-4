/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
 * Game.js to create a Game class methods for starting
 *  and ending the game, handling
interactions, getting a random phrase, checking for a win,
 and removing a life from the
scoreboard.
 */

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = this.createphrases();
		this.activePhrase = null;
	}

	/**
	 * Creates phrases for use in game
	 * @return {array} An array of phrases that could be used in the game
	 */
	createphrases() {
		const phrases = [
			new Phrase('entry level '),
			new Phrase('full stack '),
			new Phrase('javascript dev '),
			new Phrase('at uber '),
			new Phrase('in usa'),
		];
		return phrases;
	}

	/**
	 * Selects random phrase from phrases property
	 * @return {Object} Phrase object chosen to be used
	 * 	 * working
	 */
	getRandomPhrase() {
		let randomPhrase =
			this.phrases[Math.floor(Math.random() * this.phrases.length)];
		return randomPhrase;
	}
	/**
	 * Begins game by selecting a random phrase and displaying it to user
	 */
	startGame() {
		//stackoverflow.com/questions/18414384/hide-element-by-class-in-pure-javascript
		document.getElementById('overlay').style.visibility = 'hidden';
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
	checkForWin() {
		let wordMatch = document.getElementsByClassName('hide');
		if (wordMatch.length === 0) {
			return this.gameOver(true);
		} else {
			return false;
		}
	}
	/**
	 * Increases the value of the missed property
	 * Removes a life from the scoreboard
	 * Checks if player has remaining lives and ends game if player is out
	 */
	removeLife() {
		let missedchoices = document.getElementsByClassName('tries');
		missedchoices[this.missed].firstChild.src = 'images/lostHeart.png';
		this.missed++;
		if (this.missed === 5) {
			this.gameOver(false);
		}
	}

	/**
	 * Displays game over message
	 * @param {boolean} gameWon - Whether or not the user won the game
	 */
	gameOver(gameWon) {
		const gameOverMessage = document.getElementById('game-over-message');
		const overlay = document.getElementById('overlay');
		overlay.style.visibility = '';
		overlay.className = '';

		if (gameWon) {
			overlay.classList.add('win');
			gameOverMessage.textContent = 'welldone, play again ';
		} else {
			overlay.classList.add('lose');
			gameOverMessage.textContent = 'hardluck, try again';
		}
		this.RestGame();
	}

	/**
	 * Handles onscreen keyboard button clicks
	 * @param (HTMLButtonElement) button - The clicked button element
	 */
	//
	handleInteraction(button) {
		console.log(button);
		button.disabled = true;
		if (this.activePhrase.checkLetter(button.textContent)) {
			button.classList.add('chosen');
			this.activePhrase.showMatchedLetter(button.textContent);
			this.checkForWin();
		} else {
			button.classList.add('wrong');
			this.removeLife();
		}
	}
	RestGame() {
		let gussedWords = document.querySelector('#phrase ul');
		gussedWords.textContent = '';

		buttons.forEach((button) => {
			button.classList.remove('chosen');
			button.classList.remove('wrong');
			button.disabled = false;
		});
		let hearts = document.querySelectorAll('.tries img');
		hearts.forEach((heart) => {
			heart.src = 'images/liveHeart.png';
			this.missed--;
		});
	}
}
