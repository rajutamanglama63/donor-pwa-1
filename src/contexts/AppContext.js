import { createContext, useEffect, useState } from "react";

// const [wallet, setWallet] = useState()

const AppContext = createContext()

// const createWallet = () => {
//     setWallet(Math.random())
// }

function AppProvider ({children}) {
    <AppContext.Provider>
        {children}
    </AppContext.Provider>
}

export default AppProvider