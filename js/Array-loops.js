"use strict"
// Exercici 1.6: Array loops

    // Nivell 1
        // Exercici 1
        const noms = ['Anna', 'Bernat', 'Clara'];

        console.log('Exercici 1: ');
        noms.forEach(element => console.log(element))

        // Exercici 2
        console.log('Exercici 2: ');
        for (let nom of noms) {
            console.log(nom);
        }

        // Exercici 3
        const numeros = [1, 2, 3, 4, 5, 6]

        console.log('Exercici 3: ');
        const numParells = numeros.filter(num => num % 2 == 0)
        console.log('Numeros parells: ', numParells);


    // Nivell 2
        // Exercici 4
        const obj = {nom: 'Ona', edat: 25, ciutat: 'Barcelona'};

        console.log('Exercici 4: ');
        for (let clau in obj) {
            console.log(`${clau}: ${obj[clau]}`);
        }

        // Exercici 5
        const numeros2 = [1, 2, 3, 4, 5, 6];

        console.log('Exercici 5: ');
        for (let numero of numeros2) {
            if (numero == 5) {
                console.log(numero);
                break
            }
            console.log(numero);
        }


    // Nivell 3
        // Exercici 6
        const noms2 = ['Anna', 'Bernat', 'Clara']

        console.log('Exercici 6: ');
        let index = 0;
        for (let nom of noms2) {
            console.log(`Index ${index}: ${nom}`);
            index ++;
        }