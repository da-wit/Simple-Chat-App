import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext= ()=> {
    return useContext(UserContext)
}

export const UserContextProvider =({children}) => {
    const [users,setUsers] =useState([])
    return <UserContext.Provider value={{users,setUsers}}>{children}</UserContext.Provider>
}

