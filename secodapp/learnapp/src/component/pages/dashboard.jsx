import Applayout from "../layout";
import AppCart from "../Card";
import { useState } from "react";
// import { light } from "@mui/material/styles/createPalette";
function Dashboard() {
    const [todos, settodos] = useState("");
    
    return (
        <div className="main">
            <input type="text"  onChange={(e) => settodos(e.target.value)} />
            <h1>{todos}</h1>
            <button onClick={()=>{
                settodos("")
            }} >Reset</button>
        </div>
    )
}

export default Dashboard;