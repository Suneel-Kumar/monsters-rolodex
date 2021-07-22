import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

function Child1() {
    const { count, dispatch } = useContext(GlobalContext)
    return (
        <div>
            Child_1 {count} <br />
            <button onClick={() => dispatch({ type: "ADD" })}>Increment</button>
        </div>
    )
}

export default Child1;