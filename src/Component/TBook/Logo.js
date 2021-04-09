import React, { Component } from 'react'

export default class Logo extends Component {
    render() {
        return (
            <nav>
            <div className="logo">
                <a href="/">TBOOK.vn</a>
                <a href="/login" className="nav-right">SIGN-IN</a>
            </div>
            </nav>
        )
    }
}
