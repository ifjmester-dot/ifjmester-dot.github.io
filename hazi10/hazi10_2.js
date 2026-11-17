function createSecretStore(secretPassword, secretData) {

    return {
        read(password) {
            if (password === secretPassword) {
                return secretData;
            }
            return "Hibás jelszó!";
        },

        update(password, newData) {
            if (password === secretPassword) {
                secretData = newData;
                return "Sikeres módosítás!";
            }
            return "Hibás jelszó!";
        }
    };
}

// --- Tesztelés  ---

const myStore = createSecretStore("jelszo", "Titkos adat");

console.log(myStore.read("asd"));     
console.log(myStore.read("jelszo")); 

console.log(myStore.update("jelszo", "Új titkos adat")); 
console.log(myStore.read("jelszo")); 

console.log(myStore.secretData); 
myStore.secretData = "Feltörve"; 
console.log(myStore.read("jelszo")); 