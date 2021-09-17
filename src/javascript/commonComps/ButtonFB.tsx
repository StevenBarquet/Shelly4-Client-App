// ---Dependencys
import React from 'react';
// ---Others
import FBLogo from 'Images/messenger.png';
import { ownerData } from 'Others/store-config';

const { domain, facebookUrl } = ownerData;

// ------------------------------------------ COMPONENT-----------------------------------------
function ButtonFB() : React.ReactElement {
  return (
    <button
      type="button"
      className="png-button"
    >
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <img width="100%" src={FBLogo} alt={domain} />
      </a>
    </button>
  );
}

export default ButtonFB;
