"use strict"

        console.log('Exercise 1: ');
        const Array1 = [1, 2, 3, 4]
        const result = Array1.map(element => Math.pow(element, 2))

        console.log(result);

        console.log('Exercise 2: ');
        const Array2 = [1, 2, 3, 4]
        const result2 = Array2.filter(element => (element % 2 == 0))

        console.log(result2);

        console.log('Exercise 3: ');
        const Array3 = [1, 10, 8, 11]
        let numPrim = Array3.find(element => (element > 10))
        console.log(numPrim);

        console.log('Exercise 4: ');
        const Array4 = [13, 7, 8, 21]
        let sumArray = Array4.reduce ((acumulador, num) => acumulador + num, 0)

        console.log(sumArray);


        console.log('Exercise 5: ');
        const Array5 = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9]

        const result5 = Array5
        .filter (element => (element >= 10))
        .map (element => (element * 2))
        .reduce ((acumulador, num) => acumulador + num, 0)

        console.log(result5);

        
        const Array6 = [11, 12, 13, 14]
        let allHigherThan10 = Array6.every (element => element > 10)
        let someHigherThan10 = Array6.some (element => element > 10)

        console.log('Exercise 6: ');
        console.log('Every: ', allHigherThan10);
        console.log('Some: ', someHigherThan10);