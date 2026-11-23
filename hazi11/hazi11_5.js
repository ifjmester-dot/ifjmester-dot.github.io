/*
	5. //-[Témaváltó]-//
	Készíts két css fájlt egy kis HTML oldalhoz, emlyek ugyanannak a HTML oldalnak 2 stílusát határozzák meg. Hozz létre egy HTML Select-et, a választható 2 stílussal. Majd dinamikusan töltsd be azt a CSS-t, amelyiket a kliens kiválasztott. Így dinamikusan meg tudod változtatni egy oldal stilusát, anélkül, hogy az oldalt újra kellene töltened.
*/

const styleSelector = document.getElementById('styleSelector');
const themeLink = document.getElementById('theme-link');

styleSelector.addEventListener('change', (event) => {
    // A kiválasztott <option> value értékét (pl. "dark.css") beállítjuk a <link> href-jének
    themeLink.href = event.target.value;
});