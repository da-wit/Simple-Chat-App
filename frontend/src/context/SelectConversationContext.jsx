import { createContext, useContext, useState } from "react";

export const SelectConversationContext = createContext()

export const useSelectConversationContext = () => {
    return useContext(SelectConversationContext);
}

export const SelectConversationContextProvider = ({children}) => {
    const [selected,setSelected] = useState({})

    return <SelectConversationContext.Provider value={{selected,setSelected}}>{children}</SelectConversationContext.Provider>
}
