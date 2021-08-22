// ---Dependencys
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  changeResponsiveFlag,
  updatePath,
  updateParams
} from 'Actions/appInfo';
import { ReduxState } from 'Reducers';
// ---Components
import ClientMenu from 'Comp/NavBar/ClientMenu';
import GlobalComponents from 'Comp/NavBar/GlobalComponents';
// ---Others
import logo from 'Images/logoStoreL.png';
import isMovilDetector from 'Others/isMovilDetector';

// ------------------------------------------ COMPONENT-----------------------------------------
const NavbarCont = withRouter(props => {
  const currentPath = props.location.pathname;
  const urlParams = props.location.search;
  // Redux States
  const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const updateResponsiveData = (flag: boolean) => dispatchR(changeResponsiveFlag(flag));
  const updateCurrentPath = () => dispatchR(updatePath(currentPath));
  const updateCurrentParams = () => dispatchR(updateParams(urlParams));

  const responsiveData = isMovilDetector();
  useEffect(() => {
    updateResponsiveData(responsiveData);
  }, [responsiveData]);

  useEffect(() => { updateCurrentPath() }, [currentPath]);
  useEffect(() => { updateCurrentParams() }, [urlParams]);

  return (
    <>
      <ClientMenu currentPath={currentPath} isMovil={isMovil} logo={logo} />
      <GlobalComponents />
    </>
  );
});

export default NavbarCont;
