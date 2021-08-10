// ---Dependencys
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingOutlined } from '@ant-design/icons';
// ---ComonComponents
import ButtonMlg from 'Utils/ButtonMlg';

// ------------------------------------------ COMPONENT-----------------------------------------
function ButtonProd (): React.ReactElement {
  return (
    <Link to="/productos">
      <div className="center-block">
        <ButtonMlg
          label="Ver catálogo ahora"
          htmlType="button"
          variant="yellow"
          size="small"
          widthB="220px"
          icon={<ShoppingOutlined />}
        />
      </div>
    </Link>
  );
}

export default ButtonProd;
