import SignupForm from "../assets/commonent/sinupform";
import { Link } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../pages/firebace/firebace";
// import { auth } from "firebase/auth";
function SignUp() {

    const registerUser = (values) => {
        // console.log("value",values)
        
        createUserWithEmailAndPassword(auth, `${values.username}@gmail.com`, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user",user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 p-5">
                    <SignupForm registerUser={registerUser}/>
                    Already have an account
                    <Link to={'/'}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;