"use strict"

        console.log('Exercise 1: ');
        function add(a, b) {return a + b}
        const addArrow = (a, b) => a + b

        console.log(add(2,3));
        console.log(addArrow(2,3));

        console.log('Exercise 2: ');
        const randomNumber = () => Math.round(Math.random() *100)
        console.log(randomNumber());

        console.log('Exercise 3: ');
        class Person {
            constructor(name) {
                this.name = name;
            }

            greet = () => {
                console.log(`Hola, ${this.name}`);
            }
        }

        const persona = new Person ('David')
        const greetings = persona.greet()

        console.log('Exercise 4: ');
        const Numbers = [6, 8, 3, 2, 7, 9]

        const printNumbers = arrNumbers => {
            for (let i = 0; i < arrNumbers.length; i++) {
                console.log(arrNumbers[i]);
            }
        }
        printNumbers(Numbers)


        setTimeout(() => {
            console.log('Exercise 5: ');
            console.log("Has esperat 3 segons ^^");
        }, 3000);