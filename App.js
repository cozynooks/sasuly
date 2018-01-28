import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todoApp from './src/reducers';

import App from './src/containers/App';

const store = createStore(todoApp);


const Sasuly = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Sasuly;
