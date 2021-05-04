import React, { Component } from 'react'
import Data from './data.json';
import HomeItem from './HomeItem';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
    
    render() {
        return ( 
          <section className="container-fluid">
              <div>
              <h2 className="container">TIN TỨC</h2>
                {
                  Data.map((value,key)=>{
                    return(
                      <HomeItem 
                              Title={value.title}
                              Description={value.Description}
                              link= {value.link}
                              time={value.time}
                              image={value.image}
                              stock ={value.Stock}
                              stockIdex= {value.StockIndex}
                              stockLink= {value.StockLink}
                              groupTitle ={value.groupTitle}
                      ></HomeItem>
                    ) 
                    })
                }
              </div>
            </section>
             
          
        )
      
    }
}
