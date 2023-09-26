import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const SingupAPI = (values) => {
    return new Promise((resolve, reject) => {
        try {
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    console.log(user);

                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ user: user, message: "Email verification link sent."});
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode.localeCompare("auth/email-already-in-use") == 0) {
                        reject({ message: "this emailid already used" });
                    }
                });
        } catch (error) {
            console.log(error);
        }
    })
}

export const LoginAPI = (values) => {
    // console.log("LoginAPI");
    return new Promise((resolve, reject) => {
        try {
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    resolve({ user: user, message: "Login Successfully" });

                    // console.log("Login Successfully");
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

export const LogoutAPI = () => {
    console.log("logoutAPI called");
    return new Promise((resolve, reject) => {
        try {
            signOut(auth).then(() => {
                // Sign-out successful.
                console.log("Sign-out successful");
            }).catch((error) => {
                // An error happened.
            });
        }catch (error) {
            console.log(error);
        }
    })
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