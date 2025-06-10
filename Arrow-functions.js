//Exercici 1.1: Arrow functions

    // Nivell 1
        // Exercici 1
        // Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.
        function add(a, b) {return a + b}
        let addArrow = (a, b) => a + b

        console.log(add(2,3));
        console.log(addArrow(2,3));

        // Exercici 2
        // Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.
        let randomNumber = () => Math.round(Math.random() *100)
        console.log(randomNumber());

        // Exercici 3
        // Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.
        class Person {
            constructor(name) {
                this.name = name;
            }

            greet = () => {
                console.log(`Hola, ${this.name}`);
            }
        }

        let persona = new Person ('David')
        let greetings = persona.greet()

    // Nivell 2
        // Exercici 4
        // Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
        const Numbers = [6, 8, 3, 2, 7, 9]

        let printNumbers = arrNumbers => {
            for (let i = 0; i < arrNumbers.length; i++) {
                console.log(arrNumbers[i]);
            }
        }
        printNumbers(Numbers)


    // Nivell 3
        // Exercici 5
        // Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
        setTimeout(() => {
            console.log("Has esperat 3 segons ^^");
        }, 3000);