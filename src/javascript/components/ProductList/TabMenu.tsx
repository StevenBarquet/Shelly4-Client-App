// ---Dependencys
import React, { ReactElement } from 'react';
import { Tabs } from 'antd';
// ---Others
import { tabMenu } from 'Others/global-data'

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
  hystoryPush: (path: string) => any;
  currentCat: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function TabMenu (props: Props) : ReactElement {
  const { currentCat } = props
  
  return (
    <>
      <Tabs activeKey={currentCat} onChange={(key)=>props.hystoryPush('/productos?categoria=' + key)}>
        {tabMenu.map((category) => (
          <TabPane tab={category.label} key={category.value}>
            {props.children}
          </TabPane>
          ))}
      </Tabs>
    </>
  );
}

export default TabMenu;