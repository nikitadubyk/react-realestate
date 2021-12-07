import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
