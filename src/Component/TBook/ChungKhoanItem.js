import React, { Component } from 'react'
import {dataNote , storage} from '../Firebase';

export default class ChungKhoanItem extends Component {
    render() {
        return (
            <div>
            <section className="container-fluid">
                 <div className="row">                     
                        <div className="col">                           
                            <div class="card-deck">
                                <img class="card-img-top as" src={this.props.ImageTitleReader}  />
                                <div class="card-body">                              
                                    <h5>
                                        <a href={this.props.LinkReader} class="card-title" target="_blank">
                                        {this.props.titleReader}
                                        </a>
                                    </h5>                    
                                    <p class="card-title card-time">{this.props.timeReader}</p>                                   
                                </div>
                            </div>                                    
                        </div>                        
                     </div>                     
            </section>
            
            
            {/* <section className="container-fluid">
                <div className="row">                     
                            <div className="col">                           
                                <div class="card-deck">
                                    <img class="card-img-top" src={this.props.ImageTitle} alt="Card image cap" />

                                    <div class="card-body">                              
                                        <h2>
                                            <a href={this.props.BoxTitleLink} class="card-title" target="_blank">
                                            {this.props.BoxTitle}
                                            </a>
                                        </h2>                    
                                        <h5>
                                            <a href={this.props.titleLink} class="card-title card-con" target="_blank">
                                            {this.props.title}
                                            </a>
                                        </h5>                    
                                                                                                    
                                    </div>
                                </div>                              
                            </div>
                        </div>
            </section>
             */}
            </div>
            
        )
    }
}
