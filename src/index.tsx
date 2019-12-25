import * as ReactDOM from 'react-dom'
import * as React from 'react'
import App from './App'
import 'antd/dist/antd.css'

ReactDOM.render(
    <App {...{a: 1, b: 2}}/>
    ,
    document.getElementById('root')
)

// if (module.hot) {
//     module.hot.accept();
// }