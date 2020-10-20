import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Main } from "./pages/main/index";
import Article from "./pages/articles/index"
import * as serviceWorker from "./serviceWorker";
import { Grommet } from "grommet";
import {grommet} from "grommet/themes"
import {BrowserRouter as Router, Route} from "react-router-dom"
ReactDOM.render(
    <React.StrictMode>
        <Grommet theme={grommet}>
        <Router>
           <Route  exact path="/" component={Main} /> 
           <Route exact path="/articles/:slug" component={Article} />
        </Router>
        </Grommet>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
