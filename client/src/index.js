import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Home'
import registerServiceWorker from './registerServiceWorker'
global.app = {
    apiRootUrl: 'http://rotopolymers.co.in:9000'
    // apiRootUrl: 'http://localhost:9000'
}
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
