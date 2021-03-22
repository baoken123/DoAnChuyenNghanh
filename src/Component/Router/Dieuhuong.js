import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import EbookFree from '../TBook/EbookFree';
import ListForm from '../ListForm';
import Home from '../TBook/Home';
export default class Dieuhuong extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route  path="/listform" component={ListForm} />
                <Route  path="/Ebook-free" component={EbookFree} />
                {/* <Route path="/Ebook-free"><EbookFree /></Route> */}
            </Switch>
        )
    }
}
