import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { getExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import axios from 'axios';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import registerServiceWorker from './components/registerServiceWorker';

const fecthExpenses =  () => {
  axios.get('/expenses_list')
    .then(response => store.dispatch(getExpenses(response.data)));
}

fecthExpenses();

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
registerServiceWorker();
