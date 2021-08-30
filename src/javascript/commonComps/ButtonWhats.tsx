// ---Dependencys
import React from 'react';
// ---Others
import WhatsLogo from 'Images/whatsapp.png';
import { ownerData } from 'Others/store-config';

const { domain, phoneMain } = ownerData

// ------------------------------------------ COMPONENT-----------------------------------------
function ButtonWhats (props: {id: string}) : React.ReactElement {
  const { id } = props
  const productLink = `https://${domain}/item?id=${id}`
  const message = `¿Hola tendran el siguiente producto disponible?\n${productLink}`;
  const waLink = `https://api.whatsapp.com/send/?phone=52${phoneMain}&text=${encodeURI(message)}&lang=es`
  return (
    <button
      type="button"
      className="png-button"
    >
      <a href={waLink} target="_blank" rel="noopener noreferrer">
        <img width="100%" src={WhatsLogo} alt={domain} />
      </a>
    </button>
  );
}

export default ButtonWhats;
