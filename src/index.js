import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router';

import 'material-components-web/dist/material-components-web.css';

import reducer from './reducers';
import App from './App';
import AddExpense from './containers/AddExpense';
import EditExpense from './containers/EditExpense';

import './index.css';

const history = createBrowserHistory();

const store = createStore(connectRouter(history)(reducer),
	composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history),
		)
	)
);


ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Switch>
					<Route exact path="/" component={App}/>
					<Route path="/add" component={AddExpense}/>
					<Route path="/edit/:id" component={EditExpense}/>
				</Switch>
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
