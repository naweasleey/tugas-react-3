import React from 'react'

const name = 'Irene'
const arrayNama = ['Irene', 'GIsele', 'Dita']

const Pertama = () => {
    return (
        <>
            <button>Count {name}</button>
            {
                arrayNama.map((name) => {
                    return (
                        <button key={name}>Count {name}</button>
                    )

                })
            }

        </>
    )
}

export default Pertama