import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

console.log(WEB_ENV);

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();

if (module.hot) {
    module.hot.accept();
}
