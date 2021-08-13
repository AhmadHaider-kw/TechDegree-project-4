/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/**
 * Phrase.js to create a Phrase class to handle the
 * creation of phrases.
 */

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	/**
	 * Display phrase on game board
	 */
	addPhraseToDisplay() {
		let wordLetters = this.phrase.split('');
		let phraseContainer = document.querySelector('#phrase ul');
		wordLetters.forEach((letter) => {
			if (letter === ' ') {
				phraseContainer.innerHTML += `<li class="space"></li>`;
			} else {
				phraseContainer.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
			}
		});
	}

	/**
	 * Checks if passed letter is in phrase
	 * @param (string) letter - Letter to check
	 */
	checkLetter(letter) {
		//www.w3schools.com/jsref/jsref_includes.asp
		if (this.phrase.includes(letter)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Displays passed letter on screen after a match is found
	 * @param (string) letter - Letter to display
	 *  working
	 */
	showMatchedLetter(letter) {
		let matches = document.querySelectorAll(`.${letter}`);
		matches.forEach((match) => {
			match.classList.add('show');
			match.classList.remove('hide');
		});
	}
}
