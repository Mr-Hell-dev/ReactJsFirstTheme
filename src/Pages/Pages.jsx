import React from 'react';
import Home from "../Components/Home/Home";
import { Switch, Route } from "react-router-dom";

const Pages = () => {



    return (
        <>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </>
    )
}

export default Pages;
