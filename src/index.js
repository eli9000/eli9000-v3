import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
