import { auth,onAuthStateChanged } from "./firebase.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
      if(user.email==="admin@gmail.com"){
        location.href="./dashbord.html"
        console.log(user)
      }
    } else {
      location.href="index.html"
    }
  });