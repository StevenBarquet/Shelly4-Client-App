// ---Dependencys
import React from 'react';
import { Row, Col } from 'antd';
import { ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons';
// ---Utils
import ButtonMlg from 'Utils/ButtonMlg';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  onAddAndFinish?: ()=> any;
  onAddToCart?: ()=> any;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function Actions(props: Props): React.ReactElement | null {
  // ----------------------- hooks, const, props y states
  const { onAddAndFinish, onAddToCart } = props
  
  // ----------------------- Render
  return (
    <Row gutter={[0, 6]}>
      <Col className="center-block" span={24}>
        <ButtonMlg
          onClick={onAddAndFinish}
          label="Agregar y finalizar compra"
          variant="blue"
          htmlType="button"
          size="big"
          icon={<ShoppingOutlined />}
          widthB="300px"
        />
      </Col>
      <Col className="center-block" span={24}>
        <ButtonMlg
          label="Agregar al carrito"
          variant="yellow"
          htmlType="button"
          size="big"
          onClick={onAddToCart}
          icon={<ShoppingCartOutlined />}
          widthB="300px"
        />
      </Col>
    </Row>
  )
}

export default Actions;
