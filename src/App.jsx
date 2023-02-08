import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./assets/global/global.css"
const App = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
     );
}
 
export default App;