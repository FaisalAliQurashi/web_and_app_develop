import React from 'react';
import { Card } from 'antd';
import cardimg from "../src/assets/icons/download.jpeg"
import './App.css'
import AppModal from './assets/commonent/modal';


const { Meta } = Card;
const AppCard = () => (
  <Card className='card-side'
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={cardimg} />}
  >
    <AppModal className='btn' />
  </Card>
);
export default AppCard;