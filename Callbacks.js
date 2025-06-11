"use strict"
// Exercici 1.3: Callbacks
    // Nivell 1
        // Exercici 1
        // Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.
        const processar = (nombre, callback) => callback (nombre)
        const greetings = nombre => console.log(`Hola ${nombre}`);

        processar ("David", greetings);

        // Exercici 2
        // Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.
        const calculadora = (num1, num2, callback) => callback (num1, num2)

        console.log(calculadora (1,2, (a,b) => a+b));


    // Nivell 2
        // Exercici 3
        // Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.
        const esperarISaludar = (nom, callback) => setTimeout(() => callback(nom), 2000)

        esperarISaludar('David tornarà en 2 segons', (message) => console.log(message));

        // Exercici 4
        // Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.
        const names = ["David", "Sara", "Alex", "Anna"]

        function processarElements(array, callback) {
        for (const i = 0; i < array.length; i++) {
            callback(array[i]);
        }
        }

        processarElements(names, (name) => {
        console.log(`Bon dia, ${name}!`);
        });




    // Nivell 3
        // Exercici 5
        // Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.
        const processarCadena = (chain, callback) => callback (chain.toUpperCase())

        processarCadena ('David té una PS5', (message) => console.log(message))
        