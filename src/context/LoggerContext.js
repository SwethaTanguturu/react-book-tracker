import React, {createContext,useState} from 'react';

export const LoggerContext = createContext();

export const LoggerProvider = ({children}) => {
    const [logs,setLogs] = useState([]);

    const addLogs = (message) => {
        setLogs(prev => [...prev, `${new Date().toString()} : ${message}`]);
    }

    return(
        <LoggerContext.Provider value={{logs,addLogs}}>
            {children}
        </LoggerContext.Provider>
    )
}