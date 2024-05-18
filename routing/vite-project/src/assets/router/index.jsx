import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Profile from "../../pages/profile"
// import Login from "../../pages/login";
import AppLayout from "../commonent/layout";
import AppNotFound from "../commonent/notfound";
import Login from "../../pages/login";
import SignUp from "../../pages/signup";
import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../../pages/firebace/firebace";
import { Spin } from "antd";

function Approuter() {

    const [isuser, Setuser] = useState(false)
    const [loader, Setloader] = useState(true)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("user--->", user)
            if (user) {
                Setuser(true)
            } else {
                Setuser(false)
            }
            Setloader(false)
        })

    }, [])
    return (

        <>
        {loader
        ?
        <div className="" style={{padding:200}}>
            <Spin tip="Loading" size="large">
                <div className="Content"/>
            </Spin>
        </div>
        
    
    :
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isuser ? <Navigate to={"/profile"} /> : <Login />} />
                <Route path="/..signup" element={isuser ? <Navigate to={"/profile"} /> : <SignUp />} />
                <Route path="/home" element={
                    <AppLayout>
                        <Home />
                    </AppLayout>} />
                <Route
                    path="/profile"
                    element={isuser ?<AppLayout><Profile /> </AppLayout>
                        :

                        <Navigate to={"/"} />

                    }
                />
                <Route path="*" element={<AppNotFound />} />

            </Routes>
        </BrowserRouter>
}
        </>
    )
}

export default Approuter