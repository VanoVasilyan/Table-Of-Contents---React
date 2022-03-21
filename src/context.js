import React, { useContext, useEffect, useState } from "react";


const AppContext = React.createContext('')

const AppProvider = ({ children }) => {
    const url = 'http://localhost:3001';
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const getUserById = (id) => {
        const currentPerson = data.find(item => item.id === Number(id))
        return currentPerson
    }

    const getData = async () => {
        try {
            const response = await fetch(`${url}/accounts`);
            const data = await response.json()
            setData(data);
            setLoading(false)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getData()
    })

    return <AppContext.Provider value={{
        data,
        loading,
        getUserById
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }