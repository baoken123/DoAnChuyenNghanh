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
              <Link to="/" className="nav-link">HOME</Link>  
            </li>
            <li className="nav-item ">
              <Link to="/Ebook-free" className="nav-link">EBOOK FREE</Link>  
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/ChungKhoan">NHẬN ĐỊNH</a>  
            </li>
            <li>
              <Link to="/list-form" className="nav-link">TODO-LIST</Link>    
            </li>
            {/* <li className="nav-item ">
              <a className="nav-link" href="/widget">WD`</a>  
            </li> */}
            <li className="nav-item ">
              <a className="nav-link" href="/widgetfolow">FOREX</a>  
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="https://fireant.vn/charts" target="_blank"> VN-INDEX</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/ptconban">PT CƠ BẢN</a>  
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                PT KĨ THUẬT
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/nen-nhat">ĐỒ THỊ NẾN NHẬT</a>
                <a class="dropdown-item" href="/nendaochieu">CÁC MÔ HÌNH NẾN ĐẢO CHIỀU</a>
                <a class="dropdown-item" href="/nentiepdien">CÁC MÔ HÌNH NẾN TIẾP DIỄN</a>

                <a class="dropdown-item" href="/Fibonanci">FIBONANCCI</a>
                <a class="dropdown-item" href="/FiboRetrace">FIBONANCCI RETRACEMENT</a>
                <a class="dropdown-item" href="/FiboExtention">FIBONANCCI EXTENSION</a>

                <a class="dropdown-item" href="/Eliot">SÓNG ELIOT</a>
              </div>
          </li>
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