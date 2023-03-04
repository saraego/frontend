import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoutesPrivate from "./privateRoutes"

import Register from "../container/Register";
import Login from "../container/Login";
import Home from "../container/Home";
import Produtos from "../container/CadastraProd";
import ListaProdutos from "../container/ListaProd";


function Routes(){

    return (
        <Router>
            <Switch>
                <Route component={Login} path={'/Login'}/>
                <Route component={Register} path={'/registro'}/>
                <RoutesPrivate exact component={Home} path={'/'}/>
                <RoutesPrivate  component={Produtos} path={'/produtos'}/>
                <RoutesPrivate  component={ListaProdutos} path={'/lista'}/>
            </Switch>
        </Router>
    )
}

export default Routes