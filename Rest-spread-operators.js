"use strict"

// Exercici 1.4: Rest & Spread operators
    // Nivell 1
        // Exercici 1
        // Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.
        const Array1 = ["David", "Sara", "Joel", "Ana"]
        const Array2 = [1, 27, 99, 34]

        const ArrayResult = [...Array1, ...Array2]

        console.log('Exercici 1: ');
        console.log(ArrayResult);

        // Exercici 2
        // Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
        function suma (...numbers) {
        const result = 0;

        for (const i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }

        return result;

        }

        console.log('Exercici 2: ');
        console.log(suma (13, 4));
        console.log(suma (99, 1));



    // Nivell 2
        // Exercici 3
        // Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
        const objecte1 = {vehicle: 'Coche', marca: 'Ferrari'}
        const objecte2 = {...objecte1}
        console.log('Exercici 3: ');
        console.log(objecte2);

        objecte2.marca = 'Porche'
        console.log("Canvi: ");
        console.log(objecte1);
        console.log(objecte2);


        // Exercici 4
        // Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
        const Array4 = [2,4,8,10,12,14,16]
        const [element1, element2, ...elements] = Array4

        console.log('Exercici 4: ');
        console.log(element1);
        console.log(element2);
        console.log(elements);


    // Nivell 3
        // Exercici 5
        // Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.
        const sumar = (num1, num2, num3) => num1 + num2 + num3
        const ArraySumar = [1, 2, 3]

        console.log('Exercici 5: ');
        console.log(suma (...ArraySumar));


        // Exercici 6
        // Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.
        const objecte3 = {nom: 'David', cognom: 'Rueda'}
        const objecte4 = {edat: 28, hoobies: 'Bàsquet, gimnàs'}

        const persona = {...objecte3, ...objecte4}

        console.log('Exercici 6: ');
        console.log(persona);