import {ChakraProvider} from "@chakra-ui/react";
import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import App from "./components/app/App";
import {store} from "./redux/store";
import "./styles/style.css";

const container = document.createElement("main");
document.body.append(container);
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <ChakraProvider>
            <App/>
        </ChakraProvider>
    </Provider>
);
