import { auth,onAuthStateChanged,signOut } from "./firebase.js";

let name = document.getElementById("name")
let email = document.getElementById("email")
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user---->",user)
    if(location.pathname!=="/profil.html"){
        window.location= "profile.html"
    }
    name.innerHTML= user.email.slice(0,user.email.indexOf("@"));
    email.innerHTML=user.email
  } else {
    
    console.log("not login")
    if(location.pathname!=="/index.html"){
        window.location="index.html"
    }
  }
});
let logouts = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign Out")
        location = "index.html"
      }).catch((error) => {
        // An error happened.
        console.log("error--->",error)
      });
}
let logout = document.getElementById("logotbtn")
 logout && logout.addEventListener("click",logouts)

// rughtuyh
// gihgueity@gmail.com