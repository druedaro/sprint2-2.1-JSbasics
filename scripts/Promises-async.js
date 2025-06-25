"use strict"

        console.log('Exercise 1 i 2: ');
        function promesaHolaMon () {
            let result = 'Hola, món'
            return new Promise (
                (resolve) => {
                    setTimeout(() => resolve (result), 2000)
                }
            )
        }

        promesaHolaMon().then ((message) => console.log(message))

        function promesaHola (input) {
            return new Promise (
                (resolve, reject) => {
                    setTimeout (() => {
                        console.log('Exercise 3: ');
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

        async function AsyncPromesaHolaMon() {
            const result = await promesaHolaMon()
            console.log('Exercise 4: ');
            console.log('Async', result);
        }

        AsyncPromesaHolaMon()


        async function AsyncPromesaHolaMonTryCatch() {
            try {
                const result = await promesaHolaMon()
                console.log('Exercise 5: ');
                console.log('Try', result);
            } catch (error){
                console.log('CatchError', error);
            }
        }
        AsyncPromesaHolaMonTryCatch()


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
                console.log('Exercise 6: ');
                console.log('Totes les promeses resoltes:')
                console.log(values)
            })
            .catch(error => console.log('Error:', error))
