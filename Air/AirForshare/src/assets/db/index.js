import { initializeApp } from "firebase/app";
import { getDatabase,ref, set,onValue,remove} from "firebase/database";
import { getStorage, ref as storageref,uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfaRTCnA24yau8B1oQDJT46jtTq4ayQFs",
  authDomain: "first-website-faa26.firebaseapp.com",
  projectId: "first-website-faa26",
  storageBucket: "first-website-faa26.appspot.com",
  messagingSenderId: "127913567035",
  appId: "1:127913567035:web:26ce3b3e1843a1ab608d1e",
  measurementId: "G-TJE29YGR09",
  databaseURL:"https://first-website-faa26-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const storage = getStorage();


export{
    app,
    ref, 
    set,
    db,
    onValue,
    remove,
    storageref,
    storage,
    uploadBytesResumable, 
    getDownloadURL,

}