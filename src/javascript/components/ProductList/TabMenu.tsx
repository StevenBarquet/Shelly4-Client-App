// ---Dependencys
import React, { ReactElement } from 'react';
import { Tabs } from 'antd';
// ---Others
import { catalogos } from 'Others/store-data.json'

const { TabPane } = Tabs;
// // ---AUX COMPONENTS
// interface Categorias {
//   label: string;
//   value: string;
// }
// function Tab(params:type) {
  
// }

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  children?: ReactElement | ReactElement[];
}
// ------------------------------------------ COMPONENT-----------------------------------------
function TabMenu (props: Props) : ReactElement {
  const { categorias } = catalogos.productos
  const tabMenu = [
    {}
  ]
  return (
    <>
      <Tabs>
        {categorias.map((category) => (
          <TabPane tab={category.label} key={category.value}>
            {props.children}
          </TabPane>
          ))}
      </Tabs>
    </>
  );
}

export default TabMenu;