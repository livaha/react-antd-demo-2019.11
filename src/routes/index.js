import React from "react";
import { Switch,  Route,Redirect} from "react-router-dom";
import ListUpdate from '../components/ListUpdate';
import HookMovie from '../components/HookMovie';
import {Empty} from 'antd'


export default function Routes(){
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <HookMovie/>
                </Route>
                <Route path="/list">
                    <ListUpdate/>
                </Route>
                <Route path="/404">
                    <Empty />
                </Route>
                <Redirect to="/404" />

            </Switch>
        </div>
    )
}