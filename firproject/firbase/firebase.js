import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  import { getAuth,signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBfaRTCnA24yau8B1oQDJT46jtTq4ayQFs",
    authDomain: "first-website-faa26.firebaseapp.com",
    projectId: "first-website-faa26",
    storageBucket: "first-website-faa26.appspot.com",
    messagingSenderId: "127913567035",
    appId: "1:127913567035:web:26ce3b3e1843a1ab608d1e",
    measurementId: "G-TJE29YGR09"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth=getAuth(app);

export{
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,

}
