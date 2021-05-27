import React, { Component } from 'react'
import Data from '../TBook/CrawHome/data.json';
import HomeItem from './HomeItem';
import { Spin } from "antd";
import { logDOM } from '@testing-library/dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:"",
      Description:"",
      time:"",
      date:"",
      data : Data,
    }
  }

  componentDidMount() {
    const rp = require("request-promise");
    const cheerio = require("cheerio");
    const fs = require("fs");
    const axios = require('axios');
    const { S_IFLNK } = require("constants");

    axios.get('https://vietstock.vn/chung-khoan.htm').then( async (Response) =>  {
    const section = [];
    const $  = await cheerio.load(Response.data);

    $("#channel-container .row").each((index , element )=>{
        
        const title =  $(element).find(".channel-title a").text().trim();
        const link =  $(element).find(".channel-title a").attr("href");
        const image =  $(element).find(".thumb .img-responsive").attr("src");
        const time =  $(element).find(".meta .date").text();
        const Description =  $(element).find(".channel-head").text();
        
        section.push({
            title,image,time,link,Description
        }); 
    });

    fs.writeFileSync('data.json', JSON.stringify(section))
    console.log(section);
   })
  }
  isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ 
        [name]:value
    })
  }
  AddData = (title,Description,time,date) =>{
    var item ={};
    item.title = title;
    item.Description = Description;
    item.time = time;
    item.date = date

    var items = this.state.data;
    items.push(item)
    this.setState({
      data:items
    })
    console.log(this.state.data);
    alert("thêm bảng tin thành công");
  }
    render() {  
      
        return ( 
              <div className="container">
               {/* <div className="col-8">
                    <form>
                        <h1>Thêm Bảng Tin</h1>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Tên Tiêu Đề</label>
                          <input onChange={(event) => {this.isChange(event)}} name="title"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="điền tiêu đề" />
                          <label htmlFor="exampleInputPassword1">Tên Nội Dung</label>
                          <textarea  onChange={(event) => {this.isChange(event)}}name="Description" type="password" className="form-control" id="exampleInputPassword1" placeholder="nội dung" /> 
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col">
                              <label htmlFor="exampleInputPassword1">Thời Gian Thêm</label>
                              <input onClick={(event) => {this.isChange(event)}} name="time" type="time" id="time"></input>
                            </div>
                            <div className="col">
                              <label htmlFor="exampleInputPassword1">Ngày Thêm</label>
                              <input onClick={(event) => {this.isChange(event)}} name="date" type="date" id="date"></input>
                            </div>
                          </div>
                          
                        </div>
                        
                        <button onClick={()=>{this.AddData(this.state.title,this.state.Description,this.state.time)}} type="button" className="btn btn-primary">Thêm</button>
                      </form>

                    </div> */}
                <h2 className="container-title">Bảng Tin Chung</h2>
                  <div className="row">
                    <div className="col">
                    {
                    Data.map((value,key)=>{
                    return(
                      <HomeItem
                            Title={value.title} 
                            Description={value.Description}
                            link= {value.link}
                            time={value.time}
                            image={value.image}
                            
                      ></HomeItem>                                     
                        ) 
                      })
                  }
                    </div>
                </div>         
              </div>
             
        )
      
    }
}
