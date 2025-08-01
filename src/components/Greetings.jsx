import React from 'react'


//name is a prop; props are properties/parameters/arguments 
function Greetings({name}) {

    return (
        <div>Hello, {name}</div>
    )
}

export default Greetings