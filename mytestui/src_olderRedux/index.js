import { React } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ReactReduxTest from './ReactReduxTest';
import ReactReduxPerson from './ReactReduxPerson';

import store from './store/store'
// import store from './countstore/store'

import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
		<Provider store={store} >
			<App/>
			{/* <ReactReduxTest/>
			<br/>
			<br/>
			<ReactReduxPerson/> */}
		</Provider>
	);