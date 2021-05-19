import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();