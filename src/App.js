import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/search">
                        <h1>This is a search page</h1>
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
