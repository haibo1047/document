import { Radio, Space, Tabs, Button } from 'antd';
import React, { useState, useRef } from 'react';

import {ACTION_ADDTAB, ACTION_DELETETAB, ACTION_TAB_SELECTED, ACTION_TAB_POSITION} from '../../constant'
const { TabPane } = Tabs;


const Apptabs = (props) => {
	const newTabIndex = useRef(0);
	
	const onChange = (key) => {
		props.ACTION_TAB_SELECTED({...props.selected, selectedKey: key})
	};
	
	const changeTabPosition = (e) => {
		props.ACTION_TAB_POSITION({...props.selected, tabPosition: e.target.value});
	}

	const add = () => {
		const newActiveKey = `newTab${newTabIndex.current++}`;
		props.ACTION_ADDTAB({
			title: 'New Tab',
			content: 'New Pane',
			key: newActiveKey,
		})
		console.log('new added key:' , newActiveKey)
		onChange(newActiveKey)
	};
	
	const remove = (targetKey) => {
		props.ACTION_DELETETAB({
			key: targetKey,
		})
		if (props.tabdata.length >1 && props.selected.selectedKey === targetKey) {
			const nextTab = props.tabdata.filter((item)=>{
				if(item.key !== targetKey)
				return true;
			})
			props.ACTION_TAB_SELECTED({...props.selected, selectedKey: nextTab.key})
		}
	};

	const onEdit = (targetKey, action) => {
		console.log('deleting key:', targetKey)
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
				Tab position: {props.selected.tabPosition}
				<Radio.Group value={props.selected.tabPosition} onChange={changeTabPosition}>
					<Radio.Button value="top">top</Radio.Button>
					<Radio.Button value="right">side</Radio.Button>
				</Radio.Group>
			</Space>
			<Tabs tabPosition={props.selected.tabPosition} hideAdd onChange={onChange} activeKey={props.selected.selectedKey} type="editable-card" onEdit={onEdit}>
				{
					props.tabdata.map((item) =>(
						<TabPane tab={item.title} key={item.key} style={{background: 'purple'}}>
							{item.content}
							<br/>
							content
						</TabPane>
					))
				}
			</Tabs>
		</>
	);
};

export default Apptabs;