import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/Main/app';
import { Provider } from 'unstated';
import * as serviceWorker from './serviceWorker';
import { linkedStores } from './Helpers/Stores/linkedStores';
import history from './routerHistory';
import {Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

console.log('%c STOP!', 'color: red; font-size: 60px');
console.log(
	'%cThis is a browser feature intended for developers. If you happen to have accidentally opened this console, close the current tab and open a new one for your own safety.',
	'font-size: 24px'
);

const stores = linkedStores();
ReactDOM.render(
	<Router history={history}>
		<Provider inject={stores}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
);

serviceWorker.unregister();
