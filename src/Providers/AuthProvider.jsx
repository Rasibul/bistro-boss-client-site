import { createContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../FIrebase/firebase.config";


export const AuthContex = createContext(null)
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)

    // googleLogin

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }


    const authInfo = {
        user,
        loading,
        googleLogin
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;