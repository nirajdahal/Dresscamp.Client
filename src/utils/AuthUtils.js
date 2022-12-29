import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/config'
import { useDispatch } from "react-redux"
import { SET_ACTIVE_USER } from "../redux/slice/authSlice"
//This function is amazing. The onAuthStateChanged provided by firebase acts like a global context which is fired everytime the user is logged in. 
//It gets called automatically when auth changes
export const ProcessLoginState = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(SET_ACTIVE_USER({
                    email: user.email,
                    userName: user.displayName ? user.displayName : user.email,
                    userId: user.uid
                }))
            } else {
                //remove user from the store
            }
        })
    }, [])
}