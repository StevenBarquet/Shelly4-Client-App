// ---Dependencys
import React from 'react';
// ---Components
import InDevPage from 'CComps/InDevPage';
// ---Handle html headers
import CustomHelmet from 'CComps/CustomHelmet';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function TrackerPage() {
  const finishDate = new Date('December 17, 2021 03:24:00');
  return (
    <>
      <CustomHelmet pageName="TrackerPage" />
      <InDevPage compName="Rastreo" finishDate={finishDate as unknown as number} />
    </>
  );
}
