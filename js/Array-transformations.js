"use strict"
// Exercici 1.5: Array transformations
    // Nivell 1
        // Exercici 1
        console.log('Exercici 1: ');
        const Array1 = [1, 2, 3, 4]
        const result = Array1.map(element => Math.pow(element, 2))

        console.log(result);

        // Exercici 2
        console.log('Exercici 2: ');
        const Array2 = [1, 2, 3, 4]
        const result2 = Array2.filter(element => (element % 2 == 0))

        console.log(result2);

        // Exercici 3
        console.log('Exercici 3: ');
        const Array3 = [1, 10, 8, 11]
        let numPrim = Array3.find(element => (element > 10))
        console.log(numPrim);

        // Exercici 4
        console.log('Exercici 4: ');
        const Array4 = [13, 7, 8, 21]
        let sumArray = Array4.reduce ((acumulador, num) => acumulador + num, 0)

        console.log(sumArray);


    // Nivell 2
        // Exercici 5
        console.log('Exercici 5: ');
        const Array5 = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9]

        const result5 = Array5
        .filter (element => (element >= 10))
        .map (element => (element * 2))
        .reduce ((acumulador, num) => acumulador + num, 0)

        console.log(result5);

    // Nivell 3
        // Exercici 6
        const Array6 = [11, 12, 13, 14]
        let allHigherThan10 = Array6.every (element => element > 10)
        let someHigherThan10 = Array6.some (element => element > 10)

        console.log('Exercici 6: ');
        console.log('Every: ', allHigherThan10);
        console.log('Some: ', someHigherThan10);