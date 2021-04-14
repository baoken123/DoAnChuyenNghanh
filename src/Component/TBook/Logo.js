import React, { Component } from 'react'
import firebase from 'firebase';

export default class Logo extends Component {
    
    render() {
        return (
            <nav>
            <div className="logo">
                <a href="/">TBOOK.vn</a>
                <a href="/login" className="nav-right">
                {/* <p>{firebase.auth().currentUser.displayName}</p> */}
                Đăng Nhập</a>
            </div>
            </nav>
        )
    }
}
