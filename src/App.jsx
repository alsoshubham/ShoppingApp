import Navbar from "../src/Components/Navbar"
import {Routes} from "react-router-dom"
import { Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import  { Cart } from "./Pages/cart"


const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Cart/>}/>
      </Routes>
    </div>
  )
}
 export default App;