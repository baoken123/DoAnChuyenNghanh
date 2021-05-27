import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {List, notification } from "antd";

 function KDKK() {
  const [data, setData] = useState([]);

  // Tương tự như componentDidMount và componentDidUpdate:
  useEffect(() => {
      axios.get('https://quanlyminhchungdaotaoapi.herokuapp.com/api/v1/lay-du-lieu/vietstock')
      .then(respone => {
          setData(respone.data.ListObject)
      })
  },[]);

  return (
    <div>
      <List
        itemLayout="vertical" 
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.Url}
            extra={<img width={272} alt="" src={`${item.Image}`} />}
          >
            <List.Item.Meta
              title={
                <a
                  href={`https://vietstock.vn${item.Url}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.Title}
                  {/* {item.Time} */}
                </a>
              }
              description={item.Time}
            />
            {item.QuickContent}
          </List.Item>
        )}
      />
      
    </div>
  );
}
export default KDKK;