import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const SingupAPI = (values) => {
    console.log(values);
    return new Promise((resolve, reject) => {
        try {
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    console.log(user);

                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            console.log("Email verification link sent.");
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode);
                });
        } catch (error) {
            console.log(error);
        }
    })
}