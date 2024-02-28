import { BrowserRouter,Route,Routes } from "react-router-dom";
import Profile from "./profile";
import LoginForm from "./login";
import SignupForm from "./sinup";


function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/signup" element={<SignupForm/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;