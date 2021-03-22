import React, { Component } from 'react';
import "../src/App.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Nav from './Component/Nav';
import NoteForm from './Component/NoteForm';
import NoteList from './Component/NoteList';
import {connect} from 'react-redux';
import Nav1 from './Component/TBook/Nav1';
import Logo from './Component/TBook/Logo';
import Dieuhuong from './Component/Router/Dieuhuong';
import Home from './Component/TBook/Home';
class App extends Component {
  ShowForm = () => {
    if(this.props.isEdit){
      return <NoteForm />
    }
  }
  render(){
    return (
      <div>
      <Logo />
        {/* <Nav /> */}
        <Nav1 />
        <Router>
        <div className="container">  
          <div className="row">
            <Dieuhuong />
          </div>
        </div>
        </Router>
      </div>
     
      
      );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
export default connect(mapStateToProps)(App)
