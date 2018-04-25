import React from "react";
import ReactDOM from "react-dom";
import { firebase } from "./firebase/firebase";
import AppRouter, { history } from "./routers/AppRouter";
import LoadingPage from "./components/LoadingPage";
import "normalize.css/normalize.css";
import "toastr/build/toastr.min.css";
import "./styles/styles.scss";

const jsx = <AppRouter />;
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));
renderApp();
