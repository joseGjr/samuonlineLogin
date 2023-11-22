import React from "react";
import { Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Config from './pages/Config'

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>

            <Route exact path="/config" element={<Config/>}></Route>
            <Route exact path="/sobre">
                pagina de sobre

            </Route>
        </Routes>
    );
}