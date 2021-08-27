// ---Dependencys
import React from 'react';
import { Row, Col, Pagination } from 'antd';
// ---Components
import ProductBox from 'CComps/ProductBox';
// ---Types
import { Product } from '@Reducers/home/customTypes';


// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  productsData?: Array<Product>;
  current?: number;
  onPageChange: (page: number, pageSize?: number) => any;
  showSizeChanger: boolean;
  pageSize?: number;
  total: number;

}
// ------------------------------------------ COMPONENT-----------------------------------------
function MapProudcts(props: Props) : React.ReactElement | null {
  const { productsData, current, onPageChange, showSizeChanger, pageSize, total} = props
  if(productsData && productsData.length> 0)
    return (
      <div className="destacados-cont">
        <Row>
          <Col xs={24} sm={24} lg={24}>
            <Pagination
              style={{ margin: '15px auto 0px auto' }}
              onShowSizeChange={onPageChange}
              pageSizeOptions={['30', '50', '100']}
              showSizeChanger={showSizeChanger}
              current={current ?? 1}
              pageSize={pageSize ?? 30}
              onChange={onPageChange}
              total={total}
            />
          </Col>
        </Row>
        <Row>
          {productsData.map( producto => <ProductBox key={producto._id} producto={producto} />)}
        </Row>
        <Row>
          <Col xs={24} sm={24} lg={24}>
            <Pagination
              style={{ margin: '15px auto 0px auto' }}
              onShowSizeChange={onPageChange}
              pageSizeOptions={['30', '50', '100']}
              showSizeChanger={showSizeChanger}
              current={current ?? 1}
              pageSize={pageSize ?? 30}
              onChange={onPageChange}
              total={total}
            />
          </Col>
        </Row>
      </div>
    );
  return <p>Busqueda sin resultados</p>
}

export default MapProudcts;
