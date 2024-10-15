import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
        </Routes>
    )
}

export default AppRoutes