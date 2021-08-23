// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Others
import { ownerData } from 'Others/store-data.json';
import { appData } from 'Others/global-data.json';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  pageName: 'HomePage' | 'ProductListPage';
}
// ------------------------------------------ COMPONENT-----------------------------------------
function CustomHelmet (props: Props) : React.ReactElement {
  const { pageName } = props;
  const { pagesData } = appData;
  const { title } = ownerData;
  const name = pagesData[pageName].title;
  return (
    <Helmet>
      <title>{`${title.shortStoreName} | ${name}`}</title>
    </Helmet>
  );
}

export default CustomHelmet;
