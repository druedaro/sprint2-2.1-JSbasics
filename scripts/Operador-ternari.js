"use strict"
        console.log('Exercise 1: ');
        const potConduir = age => age >= 18 ? 'Pots conduir' : 'No pots conduir'

        console.log(potConduir(15));
        console.log(potConduir(18));

        console.log('Exercise 2: ');
        const numMesGran = (num1, num2) => (num1 >= num2) ? `${num1} es més gran o igual que ${num2}`: `${num2} és més gran`

        console.log(numMesGran(3,4));
        console.log(numMesGran(33,9));


        console.log('Exercise 3: ');
        const tipusNum = num => (num > 0) 
        ? `${num} és positiu` 
        : (num < 0) 
            ? `${num} és negatiu` 
            : `${num} és zero`

        console.log(tipusNum(1));
        console.log(tipusNum(-3));
        console.log(tipusNum(0));

        const trobarMaxim = (a, b, c) => {
            return (a > b) ? (a > c ? a : c) : (b > c ? b : c);
        }
        console.log(trobarMaxim(1, 44, 23));
        console.log(trobarMaxim(99, 89, 23));


        console.log('Exercise 4: ');
        const Numbers = [99, 72, 34, 55, 9]

        function parOImpar (arrNumbers){
            for (let i=0; i < arrNumbers.length; i++) {
                (arrNumbers[i] % 2 == 0) ? console.log(`${arrNumbers[i]} és parell`) : console.log(`${arrNumbers[i]} és imparell`);;
            }
        }

        parOImpar(Numbers)