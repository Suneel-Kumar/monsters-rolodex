import React, { createContext, useReducer } from 'react'

const countReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "SUB":
            return state - 1;
        case "RESET":
            return 0;
        default:
            throw new Error;
    }
}

let initialValue = 1;
export const GlobalContext = createContext({ count: initialValue, dispatch: () => null })

function ContextProvider({ children }) {
    const [count, dispatch] = useReducer(countReducer, initialValue)
    return (
        <GlobalContext.Provider value={{ count, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;


// import React, { useReducer } from 'react';
// const countReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD":
//             return state + 1
//         case "SUB":
//             return state - 1
//         case "RESET":
//             return 0
//         default:
//             break;
//     }
// }

// let initialState = 0;
// export const GlobalContext = createContext({ count: initialState, dispatch: () => null })

// function ContextProvider({ children }) {
//     const [count, dispatch] = useReducer(countReducer, initialState)
//     return (
//         <GlobalContext.Provider value={{count, dispatch}}>{children}</GlobalContext.Provider>
//     )
// }

// export default ContextProvider
