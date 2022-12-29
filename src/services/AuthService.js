import { onAuthStateChanged, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/config';
export const signUpUsingEmailAndPassword = async (email, password) => {
    //Todo- setLoading
    try {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
    catch (error) {
        throw new Error(error)
    }
}
export const signInUsingEmailAndPassword = async (email, password) => {
    //Todo- setLoading
    try {
        return await signInWithEmailAndPassword(auth, email, password)
    }
    catch (error) {
        throw new Error(error)
    }
}
export const signOutUser = async (email, password) => {
    //Todo- setLoading
    try {
        return await signOut(auth)
    }
    catch (error) {
        throw new Error(error)
    }
}
export const signWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
        return await signInWithPopup(auth, provider)
    }
    catch (error) {
        // Handle Errors here.
        throw new Error(error)
        // ...
    };
}
export const resetPasswordWithEmail = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email)
    } catch (error) {
        throw new Error(error)
    }
}
export const isUserLoggedIn = () => {
    const user = auth.currentUser;
    console.log(user)
    if (user) {
        return true
    } else {
        return false
    }
}