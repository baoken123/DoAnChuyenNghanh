import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import EbookFree from '../TBook/EbookFree';
import ListForm from '../ListForm';
import Home from '../TBook/Home';
import Login from '../Login-firebase/Login';
import Ckediter from '../Ckediter';
export default class Dieuhuong extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/list-form" component={ListForm} />
                    <Route  path="/Ebook-free" component={EbookFree} />
                    <Route  path="/login" component={Login} />
                    <Route  path="/ck" component={Ckediter} />
                </Switch>
            </div>
            
        )
    }
}
