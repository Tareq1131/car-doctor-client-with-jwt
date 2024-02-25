import { Outlet } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import Navbar from "../pages/Shared/NavBar/Navbar"


function Main() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Main
