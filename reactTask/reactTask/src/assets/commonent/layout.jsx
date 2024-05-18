import logo from "../icons/logo.jpeg"
import "./layoutcss.scss"
import React from 'react';
import { HiOutlineChartBar } from "react-icons/hi";
import { CiCirclePlus } from "react-icons/ci";
import { SiBookstack } from "react-icons/si";
import { CiCreditCard1 } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

 function AppLayout(){
    return(
        <div className="side-bar">
            <img className="logo" src={logo} alt="" />
            <div className="dashboard" >
            <HiOutlineChartBar />
            Dashboard
            </div>
            <div className="creatcourse">
            <CiCirclePlus />
            Creat New Course
            </div>
            <div className="Mycourse">
            <SiBookstack />
            My Courses
            </div>
            <div className="Earning">
            <CiCreditCard1 />
            Earning
            </div>
            <div className="Message">
            <AiOutlineMessage />
            Message
            </div>
            <div className="Setting">
            <IoSettingsOutline />
            Settings
            </div>


        </div>
    )
 }

 export default AppLayout;