// ---Dependencys
import React from 'react';
import { Steps } from 'antd';
import {
  ShopOutlined,
  SafetyOutlined,
  IdcardOutlined,
  InboxOutlined
} from '@ant-design/icons';

const { Step } = Steps;

interface Props {
  isMovil: boolean;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function BuySteps ( props: Props ) : React.ReactElement {
  const { isMovil } = props
  return (
    <>
      <h4 className="steps-title">
        En 
        {' '}
        <span>4</span>
        {' '}
        sencillos pasos
      </h4>
      <Steps direction={isMovil ? 'vertical' : 'horizontal'}>
        <Step
          status="finish"
          title="Elige"
          description="Excelentes opciones disponibles."
          icon={<ShopOutlined />}
        />
        <Step
          status="finish"
          title="Compra segura"
          icon={<SafetyOutlined />}
          description="Elige débito, crédito, efectivo o a contra-entrega"
        />
        <Step
          status="finish"
          title="Recolección"
          description="¿Donde quieres recibir o recoger tu compra?"
          icon={<IdcardOutlined />}
        />
        <Step
          status="finish"
          title="Entrega"
          description="Recibe el producto :)"
          icon={<InboxOutlined />}
        />
      </Steps>
    </>
  );
}

export default BuySteps;
