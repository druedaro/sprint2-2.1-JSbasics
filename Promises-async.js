"use strict"

// Exercici 1.7: Promises & Async/Await
    // Nivell 1
        // Exercici 1
        // Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
        function promesaHolaMon () {
            let result = 'Hola, món'
            return new Promise (
                (resolve) => {
                    setTimeout(() => resolve (result), 2000)
                }
            )
        }

        // Exercici 2
        // Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
        promesaHolaMon().then ((message) => console.log(message))

        // Exercici 3
        // Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
        function promesaHola (input) {
            return new Promise (
                (resolve, reject) => {
                    setTimeout (() => {
                        if (input == 'Hola') {
                            resolve (input)
                        } else {
                            reject ('Error')
                        }
                    }, 2000)
                }
            )
        }
        let probaPromesa = 'Hola'
        //let probaPromesa = 'Bon día'
        promesaHola (probaPromesa)
            .then ((value) => console.log(value))
            .catch ((error) => console.log(error))

        // Exercici 4
        // Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
        async function AsyncPromesaHolaMon() {
            const result = await promesaHolaMon()
            console.log('Async', result);
        }

        AsyncPromesaHolaMon()


    // Nivell 2
        // Exercici 5
        // Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.
        async function AsyncPromesaHolaMonTryCatch() {
            try {
                const result = await promesaHolaMon()
                console.log('Try', result);
            } catch (error){
                console.log('CatchError', error);
            }
        }
        AsyncPromesaHolaMonTryCatch()


    // Nivell 3
        // Exercici 6
        // Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.
        const promesa2sec = new Promise ((resolve) => {
            setTimeout (() => {
                resolve('First Promise')
            } ,2000);
        });

        const promesa3sec = new Promise ((resolve) => {
            setTimeout(() => {
                resolve ('Second Promise')
            }, 3000);
        });

        Promise.all([promesa2sec,promesa3sec])
            .then(values => {
                console.log('Totes les promeses resoltes:')
                console.log(values)
            })
            .catch(error => console.log('Error:', error))
