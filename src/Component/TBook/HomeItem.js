import React, { Component } from 'react';


export default class HomeItem extends Component {
    constructor(props) {
        super(props);    
    }
    render() {
        return (
            <div>
                <div className="container">
                <div className="row">
               <section className="col">
                     <div class="card-deck">
                        <img class="card-img-top" src={this.props.image} 
                         alt="Card image cap" />                      
                        <div class="card-body">
                             <h5> <a href={`https://vietstock.vn/${this.props.link}`} class="card-title"        target="_blank">{this.props.Title}</a>
                             </h5>
                            <p class="card-text card-text-desscription">{this.props.Description}</p>
                            <p class="card-title card-time">{this.props.time}</p>
                                <span>
                                <a href="" class="card-title" target="_blank" rel="noopener">{this.props.stock}</a>
                                </span>
                                <span class="color-up p-l-xs">{this.props.stockIdex}</span>
                        </div>
                        </div>                                             
                </section>
            </div>
            </div>
            
            </div>
            
            
            
            
         
        )
    }
}
