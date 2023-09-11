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
                            resolve({user: user, message: "Email verification link sent."});
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if(errorCode.localeCompare("auth/email-already-in-use") == 0 ) {
                        reject({message: "this emailid already used"});
                    }
                });
        } catch (error) {
            console.log(error);
        }
    })
}

export const LoginAPI = (values) => {
    // console.log("LoginAPI");
    signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Login Successfully");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode);
        });
}

export const ResetPasswordAPI = (values) => {
    // console.log("ResetPasswordAPI");
    sendPasswordResetEmail(auth, values.email)
        .then(() => {
            console.log("Password reset link sent.");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode);
        });
}