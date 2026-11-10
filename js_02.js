function sakktablaGeneral(n, celId) {
            const hely = document.getElementById(celId);
            hely.innerHTML = "";

            const tabla = document.createElement("div");
            tabla.className = "sakktabla";

            for (let sor = 0; sor < n; sor++) {
                const sorDiv = document.createElement("div");
                sorDiv.className = "sakk-sor";

                for (let oszlop = 0; oszlop < n; oszlop++) {
                    const mezo = document.createElement("div");
                    mezo.className = "mezo " + ((sor + oszlop) % 2 === 0 ? "vilagos" : "sotet");
                    sorDiv.appendChild(mezo);
                }

                tabla.appendChild(sorDiv);
            }

            hely.appendChild(tabla);
        }

        function oszlopBetu(index) {
            let betu = "";
            index++;
            while (index > 0) {
                const maradek = (index - 1) % 26;
                betu = String.fromCharCode(65 + maradek) + betu;
                index = Math.floor((index - 1) / 26);
            }
            return betu;
        }

        function sakktablaCimkekkel(n, celId) {
            const hely = document.getElementById(celId);
            hely.innerHTML = "";

            const tabla = document.createElement("div");
            tabla.className = "cimkes-tabla";

            for (let sor = 0; sor < n; sor++) {
                const sorDiv = document.createElement("div");
                sorDiv.className = "cimkes-sor";

                const sorszam = document.createElement("div");
                sorszam.className = "cimke sorszam";
                sorszam.textContent = n - sor;
                sorDiv.appendChild(sorszam);

                for (let oszlop = 0; oszlop < n; oszlop++) {
                    const mezo = document.createElement("div");
                    mezo.className = "mezo " + ((sor + oszlop) % 2 === 0 ? "vilagos" : "sotet");
                    sorDiv.appendChild(mezo);
                }

                tabla.appendChild(sorDiv);
            }

            const also = document.createElement("div");
            also.className = "cimkes-sor";

            const sarok = document.createElement("div");
            sarok.className = "cimke ures";
            also.appendChild(sarok);

            for (let oszlop = 0; oszlop < n; oszlop++) {
                const betu = document.createElement("div");
                betu.className = "cimke betu";
                betu.textContent = oszlopBetu(oszlop);
                also.appendChild(betu);
            }

            tabla.appendChild(also);
            hely.appendChild(tabla);
        }

        function mindketTablatGeneral() {
            const n = parseInt(document.getElementById("meret").value, 10);
            if (isNaN(n) || n < 1) {
                alert("Adj meg egy pozitív egész számot!");
                return;
            }
            sakktablaGeneral(n, "tabla1");
            sakktablaCimkekkel(n, "tabla2");
        }

        document.getElementById("general").addEventListener("click", mindketTablatGeneral);
        mindketTablatGeneral();