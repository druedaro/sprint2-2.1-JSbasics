"use strict"

// Exercici 1.4: Rest & Spread operators
    // Nivell 1
        // Exercici 1
        console.log('Exercici 1: ');
        const Array1 = ["David", "Sara", "Joel", "Ana"]
        const Array2 = [1, 27, 99, 34]

        const ArrayResult = [...Array1, ...Array2]

        console.log(ArrayResult);

        // Exercici 2
        console.log('Exercici 2: ');
        function suma (...numbers) {
        let result = 0;

        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }

        return result;

        }

        console.log(suma (13, 4));
        console.log(suma (99, 1));



    // Nivell 2
        // Exercici 3
        console.log('Exercici 3: ');
        const objecte1 = {vehicle: 'Coche', marca: 'Ferrari'}
        const objecte2 = {...objecte1}
        console.log(objecte2);

        objecte2.marca = 'Porche'
        console.log("Canvi: ");
        console.log(objecte1);
        console.log(objecte2);


        // Exercici 4
        console.log('Exercici 4: ');
        const Array4 = [2,4,8,10,12,14,16]
        const [element1, element2, ...elements] = Array4

        console.log(element1);
        console.log(element2);
        console.log(elements);


    // Nivell 3
        // Exercici 5
        console.log('Exercici 5: ');
        const sumar = (num1, num2, num3) => num1 + num2 + num3
        const ArraySumar = [1, 2, 3]

        console.log(suma (...ArraySumar));


        // Exercici 6
        console.log('Exercici 6: ');
        const objecte3 = {nom: 'David', cognom: 'Rueda'}
        const objecte4 = {edat: 28, hoobies: 'Bàsquet, gimnàs'}

        const persona = {...objecte3, ...objecte4}

        console.log(persona);