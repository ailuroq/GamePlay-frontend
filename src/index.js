import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {history} from "./helpers/history";
import {Router} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
