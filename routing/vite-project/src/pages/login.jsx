import LoginForm from "../assets/commonent/loginform";
// import SignUp from "./signup";
import Approuter from "../assets/router";
import { Link } from "react-router-dom";
import {auth, signInWithEmailAndPassword } from "../pages/firebace/firebace";
function Login() {
  const userregister = (values) => {
    signInWithEmailAndPassword(auth, `${values.username}@gmail.com`, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user",user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage--->",errorMessage)
      });

  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 p-5">
          <LoginForm userregister={userregister} />
          Don't have an account
          <Link to={'/signup'}>SignUp</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;