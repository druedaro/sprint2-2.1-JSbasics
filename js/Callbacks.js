"use strict"
// Exercici 1.3: Callbacks
    // Nivell 1
        // Exercici 1
        console.log('Exercici 1: ');
        const processar = (nombre, callback) => callback (nombre)
        const greetings = nombre => console.log(`Hola ${nombre}`);

        processar ("David", greetings);

        // Exercici 2
        console.log('Exercici 2: ');
        const calculadora = (num1, num2, callback) => callback (num1, num2)

        console.log(calculadora (1,2, (a,b) => a+b));


    // Nivell 2
        // Exercici 3
        const esperarISaludar = (nom, callback) => setTimeout(() => callback(nom), 2000)

        esperarISaludar('Exercici 3: David tornarà en 2 segons', (message) => console.log(message));

        // Exercici 4
        console.log('Exercici 4: ');
        const names = ["David", "Sara", "Alex", "Anna"]

        function processarElements(array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i]);
        }
        }

        processarElements(names, (name) => {
        console.log(`Bon dia, ${name}!`);
        });




    // Nivell 3
        // Exercici 5
        console.log('Exercici 5: ');
        const processarCadena = (chain, callback) => callback (chain.toUpperCase())

        processarCadena ('David té una PS5', (message) => console.log(message))
        