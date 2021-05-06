import React, { Component } from 'react';
import {connect} from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Dieuhuong from '../Router/Dieuhuong';


class Nav1 extends Component {
    formAddData = () => {
        this.props.DisplayFormAddData()
        this.props.ChangAddForm()
    }
    render() {
        return (
          <Router>
          <nav>
  <div className="nav">
    <div className="nav-left">
      <nav className="navbar navbar-expand-sm navbar-light">
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
       
        <div className="collapse navbar-collapse" id="collapsibleNavId">
        
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <Link to="/" className="nav-link">HOME
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/Ebook-free" className="nav-link">EBOOK FREE</Link>  
            </li>
            
            <li>
            <a className="nav-link">
              <div className="btn-group">
                  <button className="btn dropdown-toggle btn-chungkhoan" type="" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <a className="nav-link" href="./addbook.html">CHỨNG KHOÁN</a>
                  </button>
                  <div className="dropdown-menu dropdown-menu-left" aria-labelledby="triggerId">
                    <a className="dropdown-item drop-items-chungkhoan" href="/ChungKhoan">Nhận Định</a>
                    <a className="dropdown-item drop-items-chungkhoan" href="/ChungKhoan">Quốc tế</a>
                    {/* <a className="dropdown-item " href="#">Disabled action</a> */}
                  </div>
                </div>
            </a>
            </li>
            <li>
              <Link to="/list-form" className="nav-link">TODO-LIST</Link>    
              
            </li>
            <ul>
        </ul>
          </ul>
         
        </div>
        
      </nav>
    </div>
    
  </div>
  
</nav>
  <Dieuhuong />
</Router>     
            

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        DisplayFormAddData: () => {
            dispatch({type:"CHANGE_EDIT_FORM"})
        },
        ChangAddForm: () => {
            dispatch({type:"CHANGE_ADD_FORM"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav1)