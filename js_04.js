const operandus1 = document.getElementById("operandus1");
        const operandus2 = document.getElementById("operandus2");
        const operator = document.getElementById("operator");
        const eredmeny = document.getElementById("eredmeny");

        function szamol(a, muvelet, b) {
            switch (muvelet) {
                case "+":
                    return a + b;
                case "-":
                    return a - b;
                case "*":
                    return a * b;
                case "/":
                    if (b === 0) {
                        return "Nullával nem osztunk!";
                    }
                    return a / b;
            }
        }

        document.getElementById("egyenlo").addEventListener("click", function () {
            if (operandus1.value === "" || operandus2.value === "") {
                eredmeny.textContent = "Adj meg két számot!";
                return;
            }

            const a = parseFloat(operandus1.value);
            const b = parseFloat(operandus2.value);

            eredmeny.textContent = szamol(a, operator.value, b);
        });