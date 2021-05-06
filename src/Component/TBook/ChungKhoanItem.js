import React, { Component } from 'react'

export default class ChungKhoanItem extends Component {
    render() {
        return (
            <section className="container-fluid">
                 <div className="row">                     
                        <div className="col">
                            <div class="card-deck">
                                {/* <img class="card-img-top" src={this.props.ImageReader1} alt="Cardimagecap" /> */}
                                <div class="card-body">                              
                                    <h5>
                                        <a href={this.props.LinkReader1} class="card-title" target="_blank">
                                        {this.props.titleReader1}
                                        </a>
                                    </h5>                    
                                    <p class="card-title card-time">{this.props.timeReader1}</p>                                   
                                </div>
                            </div>

                            <div class="card-deck">
                                {/* <img class="card-img-top" src={this.props.ImageReader} alt="Cardimagecap" /> */}
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
                        {/* <div className="col">
                            <div class="card-deck">
                                <img class="card-img-top" src={this.props.ImageReader1} alt="Cardimagecap" />
                                <div class="card-body">                              
                                    <h5>
                                        <a href={this.props.LinkReader1} class="card-title" target="_blank">
                                        {this.props.titleReader1}
                                        </a>
                                    </h5>                    
                                    <p class="card-title card-time">{this.props.timeReader1}</p>                                   
                                </div>
                            </div>
                        </div> */}
                     </div>
            </section>
        )
    }
}
