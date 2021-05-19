import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Iframe from 'react-iframe';

export default class HomeItem extends Component {
    constructor(props) {
        super(props);    
    }
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "../JS.js";
        script.async = true;
    
        document.body.appendChild(script);
        document.getElementById("ABC");  
    }
    render() {
        return (
            <section className="container-fluid">
                 <div className="row">
                     <div className="col">
                     <div class="card-deck">
                        <img class="card-img-top" src={this.props.image} 
                         alt="Card image cap" />                      
                        <div class="card-body">
                            {/* <a href="#">
                                <span>{this.props.groupTitle}</span>
                            </a> */}
                             <h5> <a href={this.props.link} class="card-title" target="_blank">{this.props.Title}</a></h5>
                            <p class="card-text card-text-desscription">{this.props.Description}</p>
                            <p class="card-title card-time">{this.props.time}</p>
                                <span>
                                <a href={this.props.stockLink} class="card-title" target="_blank" rel="noopener">{this.props.stock}</a>
                                </span>
                                <span class="color-up p-l-xs">{this.props.stockIdex}</span>
                        </div>
                        </div>                    
                        </div>                       
                        
                </div>                       
                                       
            </section>
            
            
         
        )
    }
}
