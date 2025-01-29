import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import EMaisPage from "./pages/EMaisPage";
import Footer from "./componets/Footer";
import Simulador from "./pages/Simulador"
import Conscientizacao from "./pages/Conscientizacao";
import TradutorEtiqueta from "./pages/TradutorEtiqueta";

const RoutesApp = ()=>{
    return(
<BrowserRouter>
<Routes>
    <Route path="*" element={<Home/>} />
    <Route path="/conscientizacao" element={<Conscientizacao/>} />
    <Route path="/emais" element={<EMaisPage />} />
    <Route path="/simulador" element={<Simulador/>} />  
    <Route path="/TradutorEtiqueta" element={<TradutorEtiqueta/>} />
</Routes>
<Footer/>
</BrowserRouter>
    )
}

export default RoutesApp;