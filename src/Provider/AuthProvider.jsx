import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
 const [loading, setLoading] = useState(true);
 const [user, setUser] = useState(null);


 // sign up
 const signUp = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
 }

 // login
 const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
 }

 
 
 // logout
 const logOut = () => {
  return signOut(auth)
 }

 // observer
 useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
   setLoading(false);
   setUser('current user ==>', currentUser)
  })
  return () => unSubscribe();
 },[])

 const AuthInfo = {
   signIn,
   signUp,
   user,
   loading,
   logOut,
 };

 return (
  <AuthContext.Provider value={AuthInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;