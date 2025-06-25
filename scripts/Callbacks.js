"use strict"
        console.log('Exercise 1: ');
        const processar = (nombre, callback) => callback (nombre)
        const greetings = nombre => console.log(`Hola ${nombre}`);

        processar ("David", greetings);

        console.log('Exercise 2: ');
        const calculadora = (num1, num2, callback) => callback (num1, num2)

        console.log(calculadora (1,2, (a,b) => a+b));


        const esperarISaludar = (nom, callback) => setTimeout(() => callback(nom), 2000)

        esperarISaludar('Exercise 3: David tornarà en 2 segons', (message) => console.log(message));

        console.log('Exercise 4: ');
        const names = ["David", "Sara", "Alex", "Anna"]

        function processarElements(array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i]);
        }
        }

        processarElements(names, (name) => {
        console.log(`Bon dia, ${name}!`);
        });


        console.log('Exercise 5: ');
        const processarCadena = (chain, callback) => callback (chain.toUpperCase())

        processarCadena ('David té una PS5', (message) => console.log(message))
        