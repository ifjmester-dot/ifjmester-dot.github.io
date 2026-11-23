/*
	3. //-[Rendszerező]-//
	Tegyük fel, hogy elkezdesz egy tanfolyamot, mely például hétfőn, és szerdán van. Tudod a kezdeti időpontot és a lejárati időpontot, és kiváncsi vagy, hogy mely dátumokon vagy foglalt.
	Ekkor írsz egy Javascript függvényt, mely megkap egy dátumintervallumot, és egy tömben a hét azon napjait, amelyeknek dátumaira kiváncsiak vagyunk az adott intervallumban.
	filterDatesByDay(startDate, endDate, weekdays):array[Date] A kimenet egy tömb, a meghatározott napok dátumaivel.
*/

function filterDatesByDay(startDate, endDate, weekdays) {
    const result = [];

    const dayMap = {
        "vasárnap": 0,
        "hétfő": 1,
        "kedd": 2,
        "szerda": 3,
        "csütörtök": 4,
        "péntek": 5,
        "szombat": 6
    };

    const targetDayNumbers = weekdays.map(day => dayMap[day.trim().toLowerCase()]);

    const current = new Date(startDate);
    current.setHours(12, 0, 0, 0);

    const end = new Date(endDate);
    end.setHours(12, 0, 0, 0);

    while (current <= end) {
        if (targetDayNumbers.includes(current.getDay())) {
            result.push(new Date(current));
        }
        current.setDate(current.getDate() + 1);
    }

    return result;
}

// --- Tesztelés ---
const foglaltNapok = filterDatesByDay("2026-10-23", "2026-12-10", ["hétfő", "szerda"]);

console.log(foglaltNapok);

foglaltNapok.forEach(datum => {
    console.log(datum.toLocaleDateString('hu-HU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'long'
    }));
});