import React from 'react';
import ReactDOM from 'react-dom';

import { init as httpInit } from 'utils/http';

import Providers from 'providers';
import App from './App';

import * as serviceWorker from './serviceWorker';

httpInit();

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
