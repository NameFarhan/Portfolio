import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Redirect from "../projectUrlComponents/Redirect1";
import Home from "../Pages/Home";

const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/project1" element={<Redirect url="https://freebiesfb.netlify.app"/>}></Route>
          <Route path="/project2" element={<Redirect url="https://exclusivecommerce.netlify.app"/>}></Route>
          <Route path="/project3" element={<Redirect url="https://simplytodoapp.netlify.app"/>}></Route>
          <Route path="/project4" element={<Redirect url="https://simplyweather1.netlify.app"/>}></Route>
          <Route path="/project5" element={<Redirect url="https://furnirocommerce.netlify.app"/>}></Route>
        </Routes>
      </BrowserRouter>
    )

};

export default AppRoutes;
