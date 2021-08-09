// ---Dependencys
import React from 'react';
import { SettingFilled } from '@ant-design/icons';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  isLoading: boolean;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function LoadingFullScreen (props: Props): React.ReactElement | null {
  const { isLoading } = props;
  if (isLoading)
    return (
      <div className="loading-screen">
        <h1>Cargando ...</h1>
        <SettingFilled spin />
      </div>
    );
  return null;
}

export default LoadingFullScreen;
