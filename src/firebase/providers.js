import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithRedirect(FirebaseAuth, googleProvider);
        const {displayName, email, uid} = result.user;
        return {
            ok: true,
            //user info
            displayName,
            email,
            uid,
        }
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}