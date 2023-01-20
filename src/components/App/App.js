import "../../index.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <div className="page">
        <Switch>
            <Route exact path="/">
                <Main />
                <Footer />
            </Route>
            <Route path="*">
                <NotFoundPage />
            </Route>
        </Switch>
    </div>
  );
}
