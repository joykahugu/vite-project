import React, { useState } from 'react'

function Counter() {
 const [count, setCount] = useState(0);
    return (
        // <div>
        //     <h1>Count: {count}</h1>
        //     <button onClick={() => setCount(count+1)}>Increment</button>
        //      <button onClick={() => setCount(count-1)}>Decrement</button>
        //      <button onClick={() => setCount(0)}>Reset</button>
        //     </div>
        // below example ensures we keep track of previous number to prevent errors 
      <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button> 
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
       </div>

    )
}

export default Counter