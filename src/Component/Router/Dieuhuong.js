import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import EbookFree from '../TBook/EbookFree';
import ListForm from '../ListForm';
import Home from '../TBook/Home';
import Login from '../Login-firebase/Login';
import EbookFree2 from '../TBook/EbookFree2';
import EbookFree3 from '../TBook/EbookFree3';
import ChungKhoan from '../TBook/ChungKhoan';
export default class Dieuhuong extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/list-form" component={ListForm} />
                    <Route  path="/Ebook-free" component={EbookFree} />
                    <Route  path="/Ebook-free2" component={EbookFree2} />
                    <Route  path="/Ebook-free3" component={EbookFree3} />
                    <Route  path="/login" component={Login} />
                    <Route  path="/ChungKhoan" component={ChungKhoan} />
                    
                </Switch>
            </div>
            
        )
    }
}
