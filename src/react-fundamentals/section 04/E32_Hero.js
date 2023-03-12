import React from 'react'

function Hero({ heroName }) {
    if (heroName === "Joker") {
        throw new Error("Not a hero !")
    }
    return (
        <div>
            <h3>{heroName}</h3>
        </div>
    )
}

export default Hero

/*
    We will render heroNames from this component based on props.
    If props passed has heroName as Joker, it will throw an error.
*/
