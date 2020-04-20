//sass
import "normalize.css";
import "./assets/general/style.sass";
//react
import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./assets/components/app/jsx/App.jsx";

render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById("app")
);
