import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Main } from "./pages/main/index";
import * as serviceWorker from "./serviceWorker";
import { Grommet } from "grommet";
import {grommet} from "grommet/themes"
ReactDOM.render(
    <React.StrictMode>
        <Grommet theme={grommet}>
            <Main />
        </Grommet>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
