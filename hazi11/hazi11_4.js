/*
	4. //-[Alert]-//
	Készítsetek egy saját Alert ablakot, mely a képernyő közepén jelenik meg mindig és megmutat egy üzenetet. myAlert("Üzenet szövege") Továbbá tartalmazzon egy OK gombot, melyre klikkelve eltűnik az ablak. Amíg az ablak a képernyőn van, a tartalmat takarja el egy félig áttetsző div.
*/

import { myAlert } from './alert.js';

const btn = document.getElementById('alertBtn');

btn.addEventListener('click', () => {
    myAlert('Ez egy ALERT ablak, kattints a gombra vagy üss ENTER-t a bezáráshoz!');
});