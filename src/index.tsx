import "@fontsource/roboto";
import "@material-design-icons/font/filled.css";
import "@materializecss/materialize/dist/css/materialize.min.css";
import "@materializecss/materialize/dist/js/materialize.min";
import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App";
import "./styles/style.css";

const container = document.createElement("main");
document.body.append(container);
const root = createRoot(container);
root.render(
    <App/>
);
