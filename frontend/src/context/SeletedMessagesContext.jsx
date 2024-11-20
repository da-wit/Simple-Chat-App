import { createContext, useContext, useState } from "react";

export const SelectedMessagesContext = createContext();

export const useSelectedMessagesContext = () => {
    return useContext(SelectedMessagesContext)
}

export const SelectedMessagesContextProvider = ({children}) => {
    const [selectedMessages,setSelectedMessages] = useState([])
    return <SelectedMessagesContext.Provider value={{selectedMessages,setSelectedMessages}} >{children}</SelectedMessagesContext.Provider>
} 