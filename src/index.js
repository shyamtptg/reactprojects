import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';


import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store/store';

// import { render } from 'react-dom';
//  import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
<Provider store = {store}>
<BrowserRouter>
<App/>
</BrowserRouter>
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
