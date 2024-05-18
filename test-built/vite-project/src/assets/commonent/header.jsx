import React from 'react';
import { FaRegBell } from "react-icons/fa";
import "./layoutcss.scss"
import { FaUserTie } from "react-icons/fa";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import AppRupes from './rup';
import AppChart from './chat';
import AppCard from '../../card';


const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);


function Appheader() {

    return (
        <div className="header">
            <div className="first">
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{
                        width: 200,
                    }}
                />
                <div className="icon">
                    <FaRegBell />
                    <FaUserTie />
                </div>
            </div>
            <div className="second">
                <div className="secondd">

                <AppRupes/>
                </div>
                <div className="row seconff">
                    <div className="colf">
                    <AppChart />

                    </div>
                    <div className="cols">
                    <AppCard />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Appheader;