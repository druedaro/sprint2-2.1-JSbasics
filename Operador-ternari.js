"use strict"
// Exercici 1.2: Operador ternari
    // Nivell 1
        // Exercici 1
        // Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.
        let potConduir = age => age >= 18 ? 'Pots conduir' : 'No pots conduir'

        console.log(potConduir(15));
        console.log(potConduir(18));

        // Exercici 2
        // Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.
        let numMesGran = (num1, num2) => (num1 >= num2) ? `${num1} es més gran o igual que ${num2}`: `${num2} és més gran`

        console.log(numMesGran(3,4));
        console.log(numMesGran(33,9));


    // Nivell 2
        // Exercici 3
        // Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.
        let tipusNum = num => (num > 0) 
        ? `${num} és positiu` 
        : (num < 0) 
            ? `${num} és negatiu` 
            : `${num} és zero`


        console.log(tipusNum(1));
        console.log(tipusNum(-3));
        console.log(tipusNum(0));

        // Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.
        let trobarMaxim = (a, b, c) => {
            return (a > b) ? (a > c ? a : c) : (b > c ? b : c);
        }

        console.log(trobarMaxim(1, 44, 23));
        console.log(trobarMaxim(99, 89, 23));



    // Nivell 3
        // Exercici 4
        // Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.
        const Numbers = [99, 72, 34, 55, 9]

        function parOImpar (arrNumbers){
            for (let i=0; i < arrNumbers.length; i++) {
                (arrNumbers[i] % 2 == 0) ? console.log(`${arrNumbers[i]} és parell`) : console.log(`${arrNumbers[i]} és imparell`);;
            }
        }

        parOImpar(Numbers)