import React, {useContext} from 'react';
import { GlobalContext } from './GlobalContext';

function Child3() {
    const {count, dispatch} = useContext(GlobalContext)
    return (
        <div>
            Child_3 {count}<br />
            <button onClick = {() => dispatch({type : "RESET"})}>RESET</button>
        </div>
    )
}

export default Child3
