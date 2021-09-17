/* eslint-disable react/jsx-curly-brace-presence */
// ---Dependencys
import React from 'react';
import { Col } from 'antd';
// ---Others
import { ownerData } from 'Others/store-config';
// -----------------------------------------TYPES-----------------------------------
interface Props {
  compName: string;
}
// ----------------------------------------COMPONENT----------------------------------
export default function DevText({ compName }: Props) {
  return (
    <Col span={24}>
      <h1>¡OH NO! LO SENTIMOS</h1>
      <p>
        En estos momentos
        {' '}
        <span>{ownerData.title.shortStoreName}</span>
        {' '}
        no puede mostrarte el módulo
        {' "'}
        <span>{compName}</span>
        {'"'}
      </p>
      <h2>SE ENCUENTRA EN ETAPA DE DESARROLLO</h2>
    </Col>
  );
}
