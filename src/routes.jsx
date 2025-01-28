import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import EMaisPage from "./pages/EMaisPage";
import Footer from "./componets/Footer";
import Simulador from "./pages/Simulador"

const RoutesApp = ()=>{
    return(
<BrowserRouter>
<Routes>
    <Route path="*" element={<Home/>} />
    <Route path="/emais" element={<EMaisPage />} />
    <Route path="/simulador" element={<Simulador/>} />
</Routes>
<Footer/>
</BrowserRouter>
    )
}

export default RoutesApp;