import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [toy, seToy] = useState([]);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => seToy(data))
    },[]) 

    const createUser = (email,password) => {
        
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        
        return signInWithEmailAndPassword(auth,email,password)

    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    },[])

    const authInfo = {
         user,
         loading,
         createUser,
         signIn,
         googleSignIn,
         logOut,
         toy
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;