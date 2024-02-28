import { auth, signInWithEmailAndPassword } from "./firbase/firebase.js";



const login = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => { 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}


const loginbtn = document.getElementById("loginbtn");
loginbtn && loginbtn.addEventListener("click", login)