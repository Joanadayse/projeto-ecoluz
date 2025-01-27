
import GlobalStyle from "../GlobalStyle";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import EMaisPage from "./pages/EMaisPage";
import Home from "./pages/Home";



function App() {
  return (
    <>
    <GlobalStyle/>
     <Header/>
     {/* <Home/> */}
     <EMaisPage/>
     <Footer/>
    </>
  );
}

export default App;
