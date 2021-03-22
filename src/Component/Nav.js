import React, { Component } from 'react';
import {connect} from 'react-redux';

class Nav extends Component {
    formAddData = () => {
        this.props.DisplayFormAddData()
        this.props.ChangAddForm()
    }
    render() {
        return (
            <section className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <a className="navbar-brand" href="#">ToDolist</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse " id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0  justify-content-around float-left">
                <li className="nav-item active">
                    <a className="nav-link" href="#"><span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                    <a onClick={()=> this.formAddData()} className="nav-link" href="#">THÊM MỚI</a>
                </li>
                </ul>
            </div>
            </section>

        )
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
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
