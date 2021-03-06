import React, { useState } from 'react'

function HooksUseState() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}

export default HooksUseState
