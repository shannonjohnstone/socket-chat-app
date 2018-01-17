import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/main.css';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

export const store = configureStore();

function render(RootComponent) {
  ReactDOM.render( // eslint-disable-line
    <Provider store={store}>
      <RootComponent />
    </Provider>, document.getElementById('root'));
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRoot = require('./App').default; // eslint-disable-line
    render(NextRoot);
  });
}
// registerServiceWorker();
