// import ReactDOM from 'react-dom'
// import App from './App'
// import './index.css'
// const container = document.querySelector("#root")
// ReactDOM.render(<App/>, container);

import App from './App'
import './index.css'
import {createRoot} from 'react-dom/client';
const container = document.querySelector("#root");

const root = createRoot(container);
root.render(<App tab="home" />)