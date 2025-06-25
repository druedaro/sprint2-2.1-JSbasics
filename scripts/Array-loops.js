"use strict"
        const noms = ['Anna', 'Bernat', 'Clara'];

        console.log('Exercise 1: ');
        noms.forEach(element => console.log(element))

        console.log('Exercise 2: ');
        for (let nom of noms) {
            console.log(nom);
        }

        const numeros = [1, 2, 3, 4, 5, 6]

        console.log('Exercise 3: ');
        const numParells = numeros.filter(num => num % 2 == 0)
        console.log('Numeros parells: ', numParells);


        const obj = {nom: 'Ona', edat: 25, ciutat: 'Barcelona'};

        console.log('Exercise 4: ');
        for (let clau in obj) {
            console.log(`${clau}: ${obj[clau]}`);
        }

        const numeros2 = [1, 2, 3, 4, 5, 6];

        console.log('Exercise 5: ');
        for (let numero of numeros2) {
            if (numero == 5) {
                console.log(numero);
                break
            }
            console.log(numero);
        }


        const noms2 = ['Anna', 'Bernat', 'Clara']

        console.log('Exercise 6: ');
        let index = 0;
        for (let nom of noms2) {
            console.log(`Index ${index}: ${nom}`);
            index ++;
        }