import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App";

const container = document.createElement("main");
document.body.append(container);
const root = createRoot(container);
root.render(
    <App/>
);
