import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {List, notification ,Pagination ,Spin } from "antd";

 function KDKK() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [isShowLoading, setIsShowLoading] = useState(false);
  // Tương tự như componentDidMount và componentDidUpdate:
  // useEffect(() => {
  //     axios.get('https://quanlyminhchungdaotaoapi.herokuapp.com/api/v1/lay-du-lieu/vietstock')
  //     .then(respone => {
  //         setData(respone.data.ListObject)
  //     })
  // },[]);
  useEffect(() => {
    setIsShowLoading(true);
    axios.get(`https://quanlyminhchungdaotaoapi.herokuapp.com/api/v1/lay-du-lieu/vietstockwithpage?pageNumber=${current}`)
      .then(respone => {
          setData(respone.data.ListObject)
          console.log(respone.data);
      }).finally(()=>{setIsShowLoading(false);})
  }, [current])
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
      <Pagination current={current} onChange={(page)=>setCurrent(page)} defaultCurrent={1} total={50} />
      {isShowLoading && <div
              className="cLoading"
              style={{
                height: "100vh",
                width: "100%",
                display: "block",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 999,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <Spin
                size="large"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 999,
                }}
              />
            </div>}
    </div>
    
  );
}
export default KDKK;