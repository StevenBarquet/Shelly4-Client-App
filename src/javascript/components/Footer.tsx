// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import {
  WhatsAppOutlined,
  FacebookOutlined,
  InstagramOutlined
} from '@ant-design/icons';
// ---Others
import { ownerData } from 'Others/store-config';

const { title, phoneStr, phoneMain, facebookUrl, instagramUrl } = ownerData

const { main, sub } = title;

// ------------------------------------------ COMPONENT-----------------------------------------
const Footer = withRouter(props => {
  const current = props.location.pathname;
  const isAdmin = new RegExp('^[/][m][a][s][t][e][r]');

  if (isAdmin.test(current)) {
    return null;
  }
  return (
    <div className="footer-cont">
      <Row>
        <h2>Contacto</h2>
      </Row>
      <Row>
        <Col xs={24} sm={24} lg={8}>
          <div className="contact">
            <a href={`https://wa.me/52${phoneMain}`} rel="noopener noreferrer" target="_blank">
              <WhatsAppOutlined />
              <span>{phoneStr}</span>
            </a>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className="contact">
            <a href={facebookUrl} rel="noopener noreferrer" target="_blank">
              <FacebookOutlined />
              <span>Facebook</span>
            </a>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div className="contact">
            <a href={instagramUrl} rel="noopener noreferrer" target="_blank">
              <InstagramOutlined />
              <span>Instagram</span>
            </a>
          </div>
        </Col>
      </Row>
      <Row className="footer-logo">
        {main} 
        {' '}
        <span>{sub}</span>
      </Row>
      <Row className="footer-rigths">
        © 2020 
        {' '}
        {main} 
        {' '}
        {sub}
        , Inc. All Rights Reserved. Did you like this site? check 
        {' '}
        <a href="http://forgemytech.com" target="_blank" rel="noopener noreferrer">forgemytech.com</a>
      </Row>
    </div>
  );
});

export default Footer;
