import ReactDOM from "react-dom/client"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Provider } from 'react-redux'
// import {store} from "./redux/store.jsx"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    {/* <Provider store = {store}> */}
    <App />
  {/* </Provider> */}
  </BrowserRouter> 
)

export default createRoot;