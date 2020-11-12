import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Main } from "./pages/main/index";
import Article from "./pages/articles/index";
import Temoignages, { OneTemoignagesPage } from "./pages/temoignages/index";
import { Connect, Donne } from "./pages/forms/index";
import Search from "./pages/search/index";

import * as serviceWorker from "./serviceWorker";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { apolloClient } from "./apolloClient";
import { ApolloProvider } from "@apollo/client";

const kindButtonTheme = {
    global: {
        colors: {
            brand: "#FB6D2E",
            "brand-contrast": "#FB6929",
            active: "#FB6929",
        },
        font: { family: "Arial" },
    },
    button: {
        default: {
            color: "text",
            border: "#FB6D2E",
            padding: {
                horizontal: "12px",
                vertical: "8px",
            },
        },
        primary: {
            background: { color: "brand" },
            border: { color: "brand", width: "1px" },
            color: "white",
            font: { weight: "bold" },
            padding: {
                horizontal: "12px",
                vertical: "8px",
            },
        },
        secondary: {
            background: { color: "white" },
            border: { color: "brand", width: "1px" },
            color: "brand",
            padding: {
                horizontal: "8px",
                vertical: "4px",
            },
        },
        active: {
            background: { color: "brand-contrast" },
            color: "text",
            secondary: {
                background: "none",
                border: {
                    color: "brand-contrast",
                },
            },
        },
        disabled: {
            opacity: 0.3,
            secondary: {
                border: { color: "text-weak" },
            },
        },
        hover: {
            background: { color: "white" },
            border: { color: "brand", width: "1px" },
            color: "brand",
            secondary: {
                border: { color: "active" },
                background: { color: "brand" },
                color: "white",
            },
        },
    },
};
ReactDOM.render(
    <React.StrictMode>
        <Grommet theme={kindButtonTheme}>
            <ApolloProvider client={apolloClient}>
                <Router>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/articles/:slug" component={Article} />
                    <Route exact path="/temoignages" component={Temoignages} />
                    <Route exact path="/chercher" component={Search} />
                    <Route
                        exact
                        path="/temoignages/:id"
                        component={OneTemoignagesPage}
                    />
                    <Route exact path="/connect" component={Connect} />
                    <Route exact path="/faire-un-don" component={Donne} />
                </Router>
            </ApolloProvider>
        </Grommet>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
