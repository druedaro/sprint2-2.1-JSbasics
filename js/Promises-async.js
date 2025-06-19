"use strict"

// Exercici 1.7: Promises & Async/Await
    // Nivell 1
        // Exercici 1
        console.log('Exercici 1 i 2: ');
        function promesaHolaMon () {
            let result = 'Hola, món'
            return new Promise (
                (resolve) => {
                    setTimeout(() => resolve (result), 2000)
                }
            )
        }

        // Exercici 2
        promesaHolaMon().then ((message) => console.log(message))

        // Exercici 3
        function promesaHola (input) {
            return new Promise (
                (resolve, reject) => {
                    setTimeout (() => {
                        console.log('Exercici 3: ');
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
        async function AsyncPromesaHolaMon() {
            const result = await promesaHolaMon()
            console.log('Exercici 4: ');
            console.log('Async', result);
        }

        AsyncPromesaHolaMon()


    // Nivell 2
        // Exercici 5
        async function AsyncPromesaHolaMonTryCatch() {
            try {
                const result = await promesaHolaMon()
                console.log('Exercici 5: ');
                console.log('Try', result);
            } catch (error){
                console.log('CatchError', error);
            }
        }
        AsyncPromesaHolaMonTryCatch()


    // Nivell 3
        // Exercici 6
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
                console.log('Exercici 6: ');
                console.log('Totes les promeses resoltes:')
                console.log(values)
            })
            .catch(error => console.log('Error:', error))
