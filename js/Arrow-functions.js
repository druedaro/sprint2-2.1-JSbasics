//Exercici 1.1: Arrow functions

    // Nivell 1
        // Exercici 1
        console.log('Exercici 1: ');
        function add(a, b) {return a + b}
        const addArrow = (a, b) => a + b

        console.log(add(2,3));
        console.log(addArrow(2,3));

        // Exercici 2
        console.log('Exercici 2: ');
        const randomNumber = () => Math.round(Math.random() *100)
        console.log(randomNumber());

        // Exercici 3
        console.log('Exercici 3: ');
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

    // Nivell 2
        // Exercici 4
        console.log('Exercici 4: ');
        const Numbers = [6, 8, 3, 2, 7, 9]

        const printNumbers = arrNumbers => {
            for (let i = 0; i < arrNumbers.length; i++) {
                console.log(arrNumbers[i]);
            }
        }
        printNumbers(Numbers)


    // Nivell 3
        // Exercici 5
        setTimeout(() => {
            console.log('Exercici 5: ');
            console.log("Has esperat 3 segons ^^");
        }, 3000);