function veletlenSzin() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }

        function fill(selector) {
            const elemek = document.querySelectorAll(selector);

            elemek.forEach(function (elem) {
                elem.style.backgroundColor = veletlenSzin();
            });
        }

        document.getElementById("gomb-cim").addEventListener("click", function () {
            fill("#fo-cim");
        });

        document.getElementById("gomb-dobozok").addEventListener("click", function () {
            fill(".doboz");
        });

        document.getElementById("gomb-torzs").addEventListener("click", function () {
            fill("body");
        });