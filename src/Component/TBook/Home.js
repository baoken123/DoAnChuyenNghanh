import React, { Component } from 'react'
import Data from '../TBook/CrawHome/data.json';
import Data1 from '../TBook/CrawNews/data1.json';
import HomeItem from './HomeItem';
import ChungKhoanItem from './ChungKhoanItem';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
    render() {
        return ( 
          <section className="container-fluid">
              <div>
              <h2 className="container-title">Bảng Tin Chung</h2>
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
