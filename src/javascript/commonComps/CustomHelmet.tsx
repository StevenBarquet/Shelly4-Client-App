// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Others
import { ownerData } from 'Others/store-config';
import { pagesData } from 'Others/global-data';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  pageName: 'HomePage' | 'ProductListPage' | 'ProductDetailPage' | 'TrackerPage';
}
// ------------------------------------------ COMPONENT-----------------------------------------
function CustomHelmet (props: Props) : React.ReactElement {
  const { pageName } = props;
  const { title } = ownerData;
  const name = pagesData[pageName].title;
  return (
    <Helmet>
      <title>{`${title.shortStoreName} | ${name}`}</title>
    </Helmet>
  );
}

export default CustomHelmet;
