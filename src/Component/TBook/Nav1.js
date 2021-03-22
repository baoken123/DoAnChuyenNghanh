import React, { Component } from 'react';
import {connect} from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ListForm from '../ListForm';
import EbookFree from '../TBook/EbookFree';
import Home from '../TBook/Home';
class Nav1 extends Component {
    formAddData = () => {
        this.props.DisplayFormAddData()
        this.props.ChangAddForm()
    }
    render() {
        return (
          
          <nav>
          
  <div className="nav">
    <div className="nav-left">
      <nav className="navbar navbar-expand-sm navbar-light">
        {/* <a class="navbar-brand" href="./home.html">TBOOK</a> */}
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
       
        <div className="collapse navbar-collapse" id="collapsibleNavId">
        <Router>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <Link to="/home"><a className="nav-link active">HOME<span className="sr-only">(current)</span></a>
              </Link>
            </li>
            <li className="nav-item ">
            <Link to="/Ebook-free"><a className="nav-link">EBOOK FREE</a></Link>
              
            </li>
            
            {/* <li class="nav-item">
                          <a class="nav-link" href="./addbook.html">ADD BOOK</a>
                      </li> */}
            <li>
            <a className="nav-link">
              <div className="btn-group">
                  <button className="btn dropdown-toggle btn-chungkhoan" type="" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <a className="nav-link" href="./addbook.html">HỌC CHỨNG KHOÁN</a>
                  </button>
                  <div className="dropdown-menu dropdown-menu-left" aria-labelledby="triggerId">
                    <a className="dropdown-item drop-items-chungkhoan" href="./dautu.html">Phân Tích Cơ Bản</a>
                    <a className="dropdown-item " href="#">Disabled action</a>
                  </div>
                </div>
            </a>
            </li>
            <li>
              <Link to="/Todo-list" className="nav-link">TODO-LIST</Link>    
              {/* <a className="nav-link">TODO-LIST</a>          */}
            </li>
            <ul>
        </ul>
          </ul>
          </Router>
        </div>
        
      </nav>
    </div>
    <div className="nav-right">
      <div className="login">
        <a href="#">LOGIN</a>
      </div>
      <div className="cart">
        <a href="#">CART</a>
      </div>
    </div>
  </div>

</nav>
          
            

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