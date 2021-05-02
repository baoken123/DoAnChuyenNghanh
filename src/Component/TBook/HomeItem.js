import React, { Component } from 'react'


export default class HomeItem extends Component {
    constructor(props) {
        super(props);    
    }
    render() {
        return (
            <section className="container-fluid">
                 <div className="row">
                     <div className="col-9">
                     <div class="card-deck">
                        <img class="card-img-top" src={this.props.image} alt="Card image cap" />
                        <div class="card-body">
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
                        <div className="col-3">
                            {/* <h3>Tin Chính</h3>
                            <ul>
                                <li>
                                    <div className="thumb">
                                        <img src={this.props.image}></img>
                                    </div>
                                </li>
                            </ul> */}
                        </div>
                     </div>
            </section>
            
            
         
        )
    }
}
