import React, {useContext} from 'react';
import { GlobalContext } from './GlobalContext';

function Child2() {
    const {count, dispatch} = useContext(GlobalContext)
    return (
        <div>
            Child_2 {count}<br />
            <button onClick={() => dispatch({ type: "SUB" })}>Decrement</button>
        </div>
    )
}

export default Child2
