// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
// ---CommonComps
import ButtonFB from 'CComps/ButtonFB';
import ButtonWhats from 'CComps/ButtonWhats'

// ------------------------------------------ TYPES-----------------------------------------
// ------------------------------------------ COMPONENT-----------------------------------------
function Questions(props: {id: string}): React.ReactElement | null {
  // ----------------------- hooks, const, props y states
  const { id } = props
  // ----------------------- Render
  return (
    <Row>
      <Col span={24}>
        <h6>
          <span>Hey!</span>
          Puedes preguntar aquí tus dudas:
        </h6>
      </Col>
      <Col span={10}>
        <ButtonFB />
      </Col>
      <Col span={10}>
        <ButtonWhats id={id} />
      </Col>
    </Row>
  )
}

export default Questions;
