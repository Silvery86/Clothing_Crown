// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxHG9kQQWkmo9U9Kyfl0FamOW4d4scrtI",
  authDomain: "crown-clothing-54216.firebaseapp.com",
  projectId: "crown-clothing-54216",
  storageBucket: "crown-clothing-54216.appspot.com",
  messagingSenderId: "124723778300",
  appId: "1:124723778300:web:fab6df3cd238032dfafd79"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = getDoc(userDocRef);
    
// Check if users is exist or not
// if exist just return the userDoc
// if not create user Doc in database
    if(!(await userSnapshot).exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            })
        } catch(error){
            console.log("error creating user", error.message);
        }
    }
}
