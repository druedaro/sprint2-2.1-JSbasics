//Exercici 1.1: Arrow functions

    // Nivell 1
        // Exercici 1
        // Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fconstxa. Per exemple: function add(a, b) {return a + b;}.
        function add(a, b) {return a + b}
        const addArrow = (a, b) => a + b

        console.log(add(2,3));
        console.log(addArrow(2,3));

        // Exercici 2
        // Funció de fconstxa sense paràmetres: Crea una funció de fconstxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.
        const randomNumber = () => Math.round(Math.random() *100)
        console.log(randomNumber());

        // Exercici 3
        // Ús de 'this' en les funcions de fconstxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fconstxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.
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
        // Funció de fconstxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fconstxa.
        const Numbers = [6, 8, 3, 2, 7, 9]

        const printNumbers = arrNumbers => {
            for (const i = 0; i < arrNumbers.length; i++) {
                console.log(arrNumbers[i]);
            }
        }
        printNumbers(Numbers)


    // Nivell 3
        // Exercici 5
        // Funció de fconstxa amb 'setTimeout': Crea una funció de fconstxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
        setTimeout(() => {
            console.log("Has esperat 3 segons ^^");
        }, 3000);