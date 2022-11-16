import { createContext, useEffect, useState } from "react";

const initialState = {
    wallet: 1234
}

const AppContext = createContext()

// const createWallet = () => {
//     setWallet(Math.random())
// }

function AppProvider ({children}) {
    <AppContext.Provider value={{wallet: initialState.wallet}}>
        {children}
    </AppContext.Provider>
}

export default AppProvider