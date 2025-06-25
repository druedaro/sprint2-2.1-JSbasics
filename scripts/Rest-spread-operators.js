"use strict"

        console.log('Exercise 1: ');
        const Array1 = ["David", "Sara", "Joel", "Ana"]
        const Array2 = [1, 27, 99, 34]

        const ArrayResult = [...Array1, ...Array2]

        console.log(ArrayResult);

        console.log('Exercise 2: ');
        function suma (...numbers) {
        let result = 0;

        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }

        return result;

        }

        console.log(suma (13, 4));
        console.log(suma (99, 1));



        console.log('Exercise 3: ');
        const objecte1 = {vehicle: 'Coche', marca: 'Ferrari'}
        const objecte2 = {...objecte1}
        console.log(objecte2);

        objecte2.marca = 'Porche'
        console.log("Canvi: ");
        console.log(objecte1);
        console.log(objecte2);


        console.log('Exercise 4: ');
        const Array4 = [2,4,8,10,12,14,16]
        const [element1, element2, ...elements] = Array4

        console.log(element1);
        console.log(element2);
        console.log(elements);


        console.log('Exercise 5: ');
        const sumar = (num1, num2, num3) => num1 + num2 + num3
        const ArraySumar = [1, 2, 3]

        console.log(suma (...ArraySumar));


        console.log('Exercise 6: ');
        const objecte3 = {nom: 'David', cognom: 'Rueda'}
        const objecte4 = {edat: 28, hoobies: 'Bàsquet, gimnàs'}

        const persona = {...objecte3, ...objecte4}

        console.log(persona);