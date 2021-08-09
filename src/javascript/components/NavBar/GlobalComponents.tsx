// --- Dependencys
import React from 'react';
// --- Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Components
import LoadingFullScreen from 'Comp/NavBar/LoadingFullScreen';

// -----------------------------------------COMPONENT-----------------------

function GlobalComponents(): React.ReactElement {
  // Redux States
  const { isLoading } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <>
      <LoadingFullScreen isLoading={isLoading} />
    </>
  );
}

export default GlobalComponents;
