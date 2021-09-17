// ---Dependencys
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
// ---ComonComponents
import DateBox from 'CComps/InDevPage/CountDown/DateBox';
// ---Components
// import AuthValidate from 'Comp/Master/AuthValidate';

// -----------------------------------------TYPES-----------------------------------
interface Props {
  finishDate: number;
  isMovil: boolean;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function CountDown({ finishDate, isMovil }: Props) : React.ReactElement {
  const [count, setCount] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });
  useEffect(() => {
    const intervalId = setInterval(() => { // assign interval to a variable to clear it.
      updateCountDown();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  // ------------------------MAIN METHODS---------------
  function updateCountDown() {
    const today = Date.now();
    const days = getDays(today);
    const hours = getHours(today);
    const mins = getMin(today);
    const secs = getSecs(today);
    setCount({
      days, hours, mins, secs
    });
  }
  // ------------------------AUX METHODS---------------
  function getDays(today: number) {
    const diffTime = Math.abs(finishDate - today);
    const dayInMs = 1000 * 60 * 60 * 24;
    const diffDays = Math.ceil(diffTime / dayInMs);
    return diffDays - 1;
  }
  function getHours(today: number) {
    const diffTime = Math.abs(finishDate - today);
    const hoursInMs = 1000 * 60 * 60;
    const diffHours = Math.ceil(diffTime / hoursInMs);
    const hours = (diffHours % 24) - 1;
    return hours;
  }
  function getMin(today: number) {
    const diffTime = Math.abs(finishDate - today);
    const minsInMS = 1000 * 60;
    const diffHours = Math.ceil(diffTime / minsInMS);
    const mins = (diffHours % 60) - 1;
    return mins;
  }
  function getSecs(today: number) {
    const diffTime = Math.abs(finishDate - today);
    const secInMs = 1000;
    const diffHours = Math.ceil(diffTime / secInMs);
    const secs = (diffHours % 60);
    return secs;
  }
  // ---Grid
  const grid = {
    xs: 6,
    sm: 5,
    md: 6,
    lg: 5,
    xl: 4,
    xxl: 3
  };
  // ------------------------RENDER------------------
  return (
    <Row className={isMovil ? 'date-box-movil' : 'date-box'} justify="center">
      <Col {...grid}>
        <DateBox label="DÍAS" value={count.days} />
      </Col>
      <Col {...grid}>
        <DateBox label="HORAS" value={count.hours} />
      </Col>
      <Col {...grid}>
        <DateBox label="MINUTOS" value={count.mins} />
      </Col>
      <Col {...grid}>
        <DateBox label="SEGUNDOS" value={count.secs} />
      </Col>
    </Row>
  );
}
