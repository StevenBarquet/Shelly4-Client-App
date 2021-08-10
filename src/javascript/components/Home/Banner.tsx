// ---Dependencys
import React from 'react';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  srcImg: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function Banner (props: Props): React.ReactElement {
  const { srcImg } = props;
  return (
    <div>
      <img src={srcImg} width="100%" alt="shelly" />
    </div>
  );
}

export default Banner;
