import React from "react";
import {Provider} from "react-redux";
import {HashRouter, Route, Router, Switch} from "react-router-dom";
import store from "../redux/store";

import Home from "./Home";
import Watched from "../containers/Watched";
import WishList from "../containers/WishList";
import Movie from "../containers/Movie";

export default function Main() {
    return(
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/watched' component={Watched}/>
                    <Route exact path='/wishlist' component={WishList}/>
                    <Route path='/:imdbID' component={Movie}/>
                </Switch>
            </HashRouter>
        </Provider>
    )
}