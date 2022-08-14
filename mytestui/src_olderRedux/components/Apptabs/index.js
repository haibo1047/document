import { Radio, Space, Tabs, Button } from 'antd';
import React, { useState, useRef } from 'react';

import {ACTION_ADDTAB, ACTION_DELETETAB} from '../../constant'
const { TabPane } = Tabs;


const Apptabs = (props) => {
  console.log('Apptabs props: ', props)
  // const defaultPanes = [];
  const defaultPanes = props.appPanels;
  const [tabPosition, setTabPosition] = useState('top');
  const [activeKey, setActiveKey] = useState(1);
  const [panes, setPanes] = useState(defaultPanes);
  const newTabIndex = useRef(0);


  const onChange = (key) => {
    setActiveKey(key);
  };

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value)
  }

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    props.ACTION_ADDTAB({
      title: 'New Tab',
      content: 'New Pane',
      key: newActiveKey,
    })
    // setPanes([
    //   ...panes,
    //   {
    //     title: 'New Tab',
    //     content: 'New Pane',
    //     key: newActiveKey,
    //   },
    // ]);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey) => {
    const targetIndex = panes.findIndex((pane) => pane.key === targetKey);
    const newPanes = panes.filter((pane) => pane.key !== targetKey);

    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }

    setPanes(newPanes);
  };

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <>
    <Button onClick={add}>ADD</Button>
      <Space style={{ marginBottom: 24, }} >
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="right">side</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs tabPosition={tabPosition} hideAdd onChange={onChange} activeKey={activeKey} type="editable-card" onEdit={onEdit}>
        {
          panes.map((item) =>(
            <TabPane tab={item.title} key={item.key} style={{background: 'purple', height: '100%'}}>
              {item.content}11
            </TabPane>
          ))
        }
      </Tabs>
    </>
  );
};

export default Apptabs;