import {
		DesktopOutlined,
		FileOutlined,
		PieChartOutlined,
		TeamOutlined,
		UserOutlined,
		SettingOutlined,
		DownOutlined
	} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu ,Dropdown, Space, Button,PageHeader} from 'antd';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {connect} from 'react-redux'
import Apptabs from './components/Apptabs'
import {ACTION_ADDTAB, ACTION_DELETETAB, ACTION_TAB_POSITION, ACTION_TAB_SELECTED} from './constant'
import { action_addtab, action_deletetab, action_tabPosition, action_selectTab } from './store/tabs/action_tabs';
import store from './store/store'
import RTB from './components/RTB'
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
function handleClick2(current){
	const matched = store.getState().tabdata.filter((e) =>{
		if(e.key === current.key){
			return true;
		}
	})
	if(matched.length ===0 ){
		store.dispatch(action_addtab({
			title : current.domEvent.target.innerText,
			content: current.domEvent.target.innerText,
			key: current.key,
		}))
	}
	store.dispatch(action_selectTab({
		...store.getState.selected, selectedKey: current.key
	}))
}
const items = [
	getItem('TrialBalance Management', 'rtb', <PieChartOutlined />),
	getItem('System configuration', 'sysparam', <DesktopOutlined />),
	getItem('User', 'sub1', <UserOutlined />, [
		getItem('Tom', '3'),
		getItem('Bill', '4'),
		getItem('Alex', '5'),
	]),
	getItem('Team', 'sub2', <TeamOutlined />, [
		getItem('Team 1', '6'), 
		getItem('Team 2', '8')
	]),
	getItem('Data Management', 'sub21', <UserOutlined />, [
		getItem('Acct Hierarchy', '25',<UserOutlined />, [
			getItem('Local Acct','123'), 
			getItem('ProdHierMS','124')
		]),
		getItem('Prod Hierarchy', '21',<UserOutlined />, [
			getItem('ProdHier','223'), 
			getItem('local Hiar','224')
		]),
	]),
	getItem('Audit', '9', <FileOutlined />),
	getItem('Setting', '19', <SettingOutlined />),
];
const allsystems = (
	<Menu
		items={[
			{
				label: 'FAIR',
				key: '0',
			},
			{
				type: 'divider',
			},
			{
				label: 'Posting engine',
				key: '1',
			},
			{
				type: 'divider',
			},
			{
				label: 'Regal asia',
				key: '3',
			},
		]}
	/>
);
const App = (props) => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Layout style={{ minHeight: '100vh', }} >
			<Header className="site-layout-background"
				style={{  padding: 0, background: 'orange'}}>
					<div className="site-page-header-ghost-wrapper">
						<PageHeader
							ghost={false}
							title="Title"
							subTitle="This is a subtitle"
							extra={[
								<Button key="3" icon={<UserOutlined />}></Button>,
							]}
						></PageHeader>
					</div>
					<Dropdown overlay={allsystems} trigger={['click']}>
						<a onClick={(e) => e.preventDefault()}>
							<Space>
								Switch Systems
								<DownOutlined />
							</Space>
						</a>
				</Dropdown>
			</Header>
			<Layout className="site-layout">
				<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
					<div className="logo" />
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleClick2}/>
				</Sider>
				<Content style={{ margin: '0 16px', background: 'white'}} >
					{/* <Breadcrumb style={{ margin: '16px 0', }} >
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
						<Breadcrumb.Item>lastname</Breadcrumb.Item>
					</Breadcrumb> */}
					{/* <div className="site-layout-background"
						style={{ padding: 24, minHeight: 360, background: 'grey'}}
					>
						Bill is a cat.
					</div> */}
						<Apptabs {...props}/>
				</Content>
			</Layout>
				{/* <Footer style={{textAlign: 'center', border: 1}} >
					Ant Design ©2018 Created by Ant UED
				</Footer> */}
		</Layout>
	);
};
	
function mapStateToProps(state){
	return {
		tabdata: state.tabdata,
		selected: state.selected
	}
}

function mapDispatchToProps(dispatch){
	return {
		ACTION_ADDTAB: (atab)=>{
			return dispatch(action_addtab(atab))
		},
		ACTION_DELETETAB: (atab)=>{
			return dispatch(action_deletetab(atab))
		},
		ACTION_TAB_POSITION: (position) =>{
			return dispatch(action_tabPosition(position))
		},
		ACTION_TAB_SELECTED: (selected) =>{
			return dispatch(action_selectTab(selected))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
