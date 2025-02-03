import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import EMaisPage from "./pages/EMaisPage/EMaisPage.jsx";
import Simulador from "./pages/Simulador/Simulador.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import TradutorEtiqueta from "./pages/TradutorEtiquetas/TradutorEtiqueta.jsx";
import Conscientizacao from "./pages/Concientizacao/Conscientizacao.jsx";



const RoutesApp = ()=>{
    return(
        <HashRouter>
<Routes>
    <Route path="*" element={<Home/>} />
    <Route path="/conscientizacao" element={<Conscientizacao/>} />
    <Route path="/emais" element={<EMaisPage />} />
    <Route path="/simulador" element={<Simulador/>} />  
    <Route path="/tradutor" element={<TradutorEtiqueta/>} />
</Routes>
<Footer/>

        </HashRouter>
    )
}

export default RoutesApp;