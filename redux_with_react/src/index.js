import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { Store } from './ReduxServices/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider Store={Store}>
     <App/>
   </Provider>
);

