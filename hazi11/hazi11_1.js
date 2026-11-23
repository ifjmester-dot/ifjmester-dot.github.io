/*
	1. //-[Gondoltam egy számra]-//
	Készíts egy egyszerű tippelős játékot. A program generáljon egy véletlen számot 1 és 10 között. 
	Addig kérjünk be tippeket(számokat), amíg a tipp nem egyezik a "gondolt" (a program elején generált random) számmal. 
	Ha a játékos eltalálta, a program álljon le és írja ki: "Gratulálok! A számost sikerült 'x' lépésben kitalálnod.". 
	Az 'x' helyére generáljátok be, hogy hány tipp kellett a játékosnak a megfejtéshez.
	(Mivel már tudtok DOM-ot, ne promptal kérjétek be a számokat, hanem készítsetek hozzá egy felületet. 
	Alert helyett pedig használjátok a saját alert modulotokat. amit az előző feladatban oldottatok meg.)
*/

import { myAlert } from './alert.js';

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const restartBtn = document.getElementById('restartBtn');

let secretNumber;
let attempts;

function initGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
        attempts = 0;
        feedback.textContent = '';
        guessInput.value = '';
        guessInput.disabled = false;
        guessBtn.disabled = false;
        restartBtn.style.display = 'none';
        guessInput.focus();
    }

function checkGuess() {
    const guess = parseInt(guessInput.value, 10);

       if (isNaN(guess) || guess < 1 || guess > 10) {
       feedback.textContent = 'Kérlek, 1 és 10 közötti számot adj meg!';
           return;
        }

            attempts++;

            if (guess === secretNumber) {
                guessInput.disabled = true;
                guessBtn.disabled = true;
                feedback.textContent = '';
                restartBtn.style.display = 'block';
                
                myAlert(`Gratulálok! A számost sikerült ${attempts} lépésben kitalálnod.`);
            } else if (guess < secretNumber) {
                feedback.textContent = 'A gondolt szám nagyobb!';
            } else {
                feedback.textContent = 'A gondolt szám kisebb!';
            }

            guessInput.value = '';
            guessInput.focus();
        }

        guessBtn.addEventListener('click', checkGuess);
        
        guessInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                checkGuess();
            }
        });

        restartBtn.addEventListener('click', initGame);

        initGame();