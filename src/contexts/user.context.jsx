import { createContext, useState, useEffect } from "react"; 
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// actual value you want to access

export const  UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})


// function for all children component of UserContext can have access 
// the value and also can set value of this UserContext
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};

   

    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            if (user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubcribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
