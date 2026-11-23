/*
	2. //-[Napkereső]-//
	Írj függvényt, mely megkap egy dátumot, és megmondja, hogy az a hét mely napjára esik. (Ezzel megtudhatod, hogy milyen napon születtél, ha nem tudod :) )
*/

function getDayOfWeek(dateInput) {
    const date = new Date(dateInput);

    if (isNaN(date)) {
        return "Érvénytelen dátum!";
    }

    const days = [
        "vasárnap",
        "hétfő",
        "kedd",
        "szerda",
        "csütörtök",
        "péntek",
        "szombat"
    ];

    return days[date.getDay()];
}