import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext('')

const AppProvider = ({ children }) => {
    const url = 'http://localhost:3001';
    const [data, setData] = useState([]);

    const getUserById = (id) => {
        const currentPerson = data.find(item => item.id === Number(id))
        return currentPerson
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${url}/accounts`);
                const data = await response.json()
                setData(data);
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])

    return <AppContext.Provider value={{
        data,
        getUserById
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }