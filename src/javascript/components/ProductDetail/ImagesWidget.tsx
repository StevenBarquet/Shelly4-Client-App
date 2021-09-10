// ---Dependencys
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
// ---Types
import { Images } from '@Reducers/productDetail/customTypes'
// ---Utils
import FitImg from 'Utils/FitImg';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  images: Images;
  nombre: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ImagesWidget (props: Props): React.ReactElement | null{
  // ----------------------- hooks, const, props y states
  const { images, nombre } = props;
  const [main, setMain] = useState('');
  const [array, setArray] = useState<string[]>([]);
  // useEffect
  useEffect(()=>{updateMain()}, [images])
  
  // ----------------------- Metodos Aux
  function updateMain() {
    if(images && images.cover){
      setMain(images.cover)
      const newArray = images.extra ? [images.cover, ...images.extra] : [images.cover]
      setArray(newArray)
    }
  }

  // ----------------------- Metodos Principales
  const mapExtraImages = () => {
    if (array.length !== 0) {
      return array.map(element => {
        return (
          <Row>
            <FitImg
              srcImg={element}
              estilo="cover-cont cover-cont-small"
              onClick={() => {
                setMain(element);
              }}
              alt={nombre}
            />
          </Row>
        );
      });
    }
    return null;
  };
  return (
    <Row>
      <Col span={4}>{mapExtraImages()}</Col>
      <Col span={20}>
        <FitImg srcImg={main} estilo="cover-cont cover-cont-big" alt={nombre} />
      </Col>
    </Row>
  );
}

export default ImagesWidget;
