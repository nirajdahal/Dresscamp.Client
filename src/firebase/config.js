import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
export const firebaseConfig = {
    apiKey: "AIzaSyCqAlqPJPfSY87fvE9RkR8aiK_z8r0e5Rw",
    authDomain: "dresscamp-f3608.firebaseapp.com",
    projectId: "dresscamp-f3608",
    storageBucket: "dresscamp-f3608.appspot.com",
    messagingSenderId: "680031080878",
    appId: "1:680031080878:web:7e143d0d1366a9d33ff83f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
