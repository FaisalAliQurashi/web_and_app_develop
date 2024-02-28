import {auth,signInWithEmailAndPassword} from "./firebase.js";
const register = () => {
    const email = document.getElementById("inputEmail4").value
    const password = document.getElementById("inputPassword4").value
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("ures-->",user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("error--->",error)
        });
    // console.log(email, password)
}
let rejisterBtn = document.getElementById("rejisterBtn");
rejisterBtn.addEventListener("click", register)
// rughtuyh
// gihgueity@gmail.com