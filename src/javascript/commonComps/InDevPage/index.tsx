// ---Dependencys
import React from 'react';
import { Col, Row } from 'antd';
// CommonComponents
import DevImage from 'CComps/InDevPage/DevImage';
import DevText from 'CComps/InDevPage/DevText';
import CountDown from 'CComps/InDevPage/CountDown';
// ---Redux
import { useSelector } from 'react-redux';
// --types
import { ReduxState } from 'Reducers';

// -----------------------------------------TYPES-----------------------------------
interface Props {
  finishDate: number;
  compName: string;
}
// ----------------------------------------COMPONENT----------------------------------
export default function InDevPage(props: Props) {
  // Const, states, hooks
  const { finishDate, compName } = props;
  const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);

  if (isMovil) {
    return (
      <Row className="in-dev-page">
        <Col xs={24} sm={24} md={12} lg={14} xl={14} xxl={16}>
          <Row>
            <DevText compName={compName} />
            <Col span={24}>
              <CountDown isMovil={isMovil} finishDate={finishDate} />
            </Col>
          </Row>
        </Col>
        <DevImage />
      </Row>
    );
  }
  return (
    <Row className="in-dev-page">
      <DevImage />
      <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={16}>
        <Row>
          <DevText compName={compName} />
          <Col span={24}>
            <CountDown isMovil={isMovil} finishDate={finishDate} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
