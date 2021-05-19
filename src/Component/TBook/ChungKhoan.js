import React, { Component } from 'react'
import ChungKhoanItem from './ChungKhoanItem';
import Data1 from '../TBook/CrawNews/data1.json';

export default class ChungKhoan extends Component {
    render() {
        return (
            <section className="container-fluid">
              <div>
              <h2 className="container-title">TIN TỨC</h2>
                {
                  Data1.map((value,key)=>{
                  return(
                    <ChungKhoanItem 
                        ImageReader={value.ImageTitleReader}
                        LinkReader={value.LinkTitleReader}
                        titleReader={value.titleReader}
                        timeReader={value.timeReader}

                        // ImageReader1={value.ImageTitleReader1}
                        // LinkReader1={value.LinkTitleReader1}
                        // titleReader1={value.titleReader1}
                        // timeReader1={value.timeReader1}

                        // BoxTitle={value.BoxTitle}
                        // title={value.title}
                        // BoxTitleLink={value.BoxTitleLink}
                        // titleLink={value.titleLink}
                        // ImageTitle={value.ImageTitle}
                        
                    ></ChungKhoanItem>
                      ) 
                    })
                }
              </div>
            </section>
        )
    }
}
