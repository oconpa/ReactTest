import { createContext, useState } from "react"

const GlobalContext = createContext(undefined)

export const GlobalProvider = ({ children, customValues = {} }) => {
    // Variables
    const [test, setTest] = useState('initial')

    // Actions
    const printTest = () => {
        console.log(test)
    }

    const changeTest = (value) => {
        setTest(value)
        return "Done"
    }

    const data = {
        data: {
            test
        },
        actions: {
            printTest,
            changeTest
        }
    }

    return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}

export default GlobalContext