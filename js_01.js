const nevMezo = document.getElementById("nev");
        const cimMezo = document.getElementById("cim");
        const telefonMezo = document.getElementById("telefon");
        const tabla = document.getElementById("tabla");

        function sorLetrehoz(nev, cim, telefon) {
            const sor = document.createElement("div");
            sor.className = "sor";

            [nev, cim, telefon].forEach(function (ertek) {
                const cella = document.createElement("div");
                cella.className = "cella";
                cella.appendChild(document.createTextNode(ertek));
                sor.appendChild(cella);
            });

            return sor;
        }

        document.getElementById("hozzaad").addEventListener("click", function () {
            const nev = nevMezo.value.trim();
            const cim = cimMezo.value.trim();
            const telefon = telefonMezo.value.trim();

            if (nev === "" || cim === "" || telefon === "") {
                alert("Kérlek, töltsd ki mind a 3 mezőt!");
                return;
            }

            tabla.appendChild(sorLetrehoz(nev, cim, telefon));

            nevMezo.value = "";
            cimMezo.value = "";
            telefonMezo.value = "";
            nevMezo.focus();
        });