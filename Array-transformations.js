"use strict"
// Exercici 1.5: Array transformations
    // Nivell 1
        // Exercici 1
        // Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.
        const Array1 = [1, 2, 3, 4]
        const result = Array1.map(element => Math.pow(element, 2))

        console.log('Exercici 1: ', result);

        // Exercici 2
        // Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.
        const Array2 = [1, 2, 3, 4]
        const result2 = Array2.filter(element => (element % 2 == 0))

        console.log('Exercici 2: ', result2);

        // Exercici 3
        // Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.
        const Array3 = [1, 10, 8, 11]
        let numPrim = Array3.find(element => (element > 10))
        console.log('Exercici 3: ', numPrim);

        // Exercici 4
        // Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.
        const Array4 = [13, 7, 8, 21]
        let sumArray = Array4.reduce ((acumulador, num) => acumulador + num, 0)

        console.log('Exercici 4: ', sumArray);


    // Nivell 2
        // Exercici 5
        // Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

        // - Filtra els nombres majors o iguals a 10.

        // - Multiplica cada nombre filtrat per 2.

        // - Calcula la suma dels nombres filtrats i multiplicats per 2.

        // - La funció ha de retornar el resultat de la suma.

        const Array5 = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9]

        const result5 = Array5
        .filter (element => (element >= 10))
        .map (element => (element * 2))
        .reduce ((acumulador, num) => acumulador + num, 0)

        console.log('Exercici 5: ', result5);

    // Nivell 3
        // Exercici 6
        // Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament
        const Array6 = [11, 12, 13, 14]
        let allHigherThan10 = Array6.every (element => element > 10)
        let someHigherThan10 = Array6.some (element => element > 10)

        console.log('Exercici 6: ');
        console.log('Every: ', allHigherThan10);
        console.log('Some: ', someHigherThan10);