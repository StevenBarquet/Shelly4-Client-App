// ---Dependencys
import React from 'react';
import { Col } from 'antd';
// ---Others
import image from 'Images/indev.png';
import { ownerData } from 'Others/store-config';

// ----------------------------------------COMPONENT----------------------------------
export default function DevImage() {
  return (
    <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={8}>
      <img width="100%" src={image} alt={ownerData.domain} />
    </Col>
  );
}
