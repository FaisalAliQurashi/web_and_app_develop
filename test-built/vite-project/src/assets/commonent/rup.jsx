import React from 'react';
import { Card, Col, Row } from 'antd';
import { FaStore } from "react-icons/fa";
import "./layoutcss.scss"


function AppRupes() {
    return (
        <div className="">
            <Row gutter={16}>
            <Col span={6}>
                    <Card bordered={true}>
                        <div className="df">
                        <div className="">
                    <FaStore />
                        </div>
                    <div className="">
                        <h3>$1380,00</h3>
                        <p>Total Revenue</p>
                    </div>
                    </div>
                    </Card>
                </Col><Col span={6}>
                    <Card bordered={true}>
                        <div className="df">
                        <div className="">
                    <FaStore />
                        </div>
                    <div className="">
                        <h3>$1380,00</h3>
                        <p>Total Revenue</p>
                    </div>
                    </div>
                    </Card>
                </Col><Col span={6}>
                    <Card bordered={true}>
                        <div className="df">
                        <div className="">
                    <FaStore />
                        </div>
                    <div className="">
                        <h3>$1380,00</h3>
                        <p>Total Revenue</p>
                    </div>
                    </div>
                    </Card>
                </Col><Col span={6}>
                    <Card bordered={true}>
                        <div className="df">
                        <div className="">
                    <FaStore />
                        </div>
                    <div className="">
                        <h3>$1380,00</h3>
                        <p>Total Revenue</p>
                    </div>
                    </div>
                    </Card>
                </Col>
                
            </Row>
        </div>
    )
}

export default AppRupes;