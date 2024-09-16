// example: hook - useState
import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click here!!!!</button>
        </div>
    )
}

export default Counter;