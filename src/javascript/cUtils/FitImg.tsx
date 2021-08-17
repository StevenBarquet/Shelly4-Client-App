// ---Dependencys
import React, { useState } from 'react';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  srcImg: string;
  estilo: string;
  alt: string;
  onClick?: ()=> any;
}

interface imgJSX {
  naturalHeight: number;
  naturalWidth: number;
}

interface JSXElement {
  target: {
    img:  imgJSX,
    naturalHeight: number;
    naturalWidth: number;
  };
}
// -------------------------------------------COMPONENT---------------------------------
function FitImg(props: Props) : React.ReactElement {
  const [ratioStyle, setRatioStyle] = useState('ancha');
  const { srcImg, estilo, alt, onClick } = props;
  const onImgLoad = ({ target: img }: JSXElement ) => {
    if (img.naturalHeight > img.naturalWidth) {
      setRatioStyle('alta');
    }
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={estilo + ' ' + ratioStyle}
    >
      <img onLoad={()=> onImgLoad} src={srcImg} alt={alt} />
    </button>
  );
}

export default FitImg;
