import ScrollToTop from "./pages/ScrollToTop.js";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Mapp from "./pages/map";
import { HashRouter,BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Rooms" element={<Rooms/>}/> 
        <Route path="/Map" element={<Mapp/>}/> 
        
      </Routes>
      
    </HashRouter>
  );
};
export default App;
