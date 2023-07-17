import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, updateProfile } from "firebase/auth";
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

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try{
            const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            const {uid} = response.user;

            await updateProfile(FirebaseAuth.currentUser, {displayName});

            return {
                ok: true,
                displayName,
                uid,
                email,
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

export const loginWithEmailPassword = async({email, password}) => {
    try{
        const response = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {displayName, uid} = response.user;
        return {
            ok: true,
            //user info
            displayName,
            uid
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