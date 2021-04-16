import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class EbookFree2 extends Component {
    render() {
        return (
            <section>
                <div>
  <div className="container-fluid">
    <div className="section-header">
      <h1>DANH SÁCH</h1>
    </div>
    <div className="row container-row">
      {/* <div className="col-2">
        <div className="section-list">
          <div className="list-group">
            <a href="./sanpham.html" className="list-group-item list-group-item-action active">Sách Đầu Tư</a>
            <a href="./sp-dayconlamgiau.html" className="list-group-item list-group-item-action ">Dạy Con Làm Giàu</a>
            <a href="#" className="list-group-item list-group-item-action ">Tâm lý - Tư Duy</a>
            <a href="#" className="list-group-item list-group-item-action">Item</a>
            <a href="#" className="list-group-item list-group-item-action "> item</a>
            <a href="#" className="list-group-item list-group-item-action">Item</a>
            <a href="#" className="list-group-item list-group-item-action "> item</a>
          </div>
        </div>
      </div> */}
      <div className="col-10">
        <div className="row">
         
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FBi-quyet-dau-tu-kinh-doanh-Chung-Khoan-cua-ty-phu-Warren-Buffett-George-Soros-min.png?alt=media&token=aefe067d-33b0-4f1e-aa53-2a376d36cfa3" alt="phuong phap moi de giao dich kiem song" />
                </h3>
                <a href="" className="card-text">BÍ QUYẾT ĐẦU TƯU CHỨNG KHÁNG CỦA WARREN BUFFET VÀ GEORGE SOROS</a>
              </div>
            </div>
          </div>

          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FBuoc-di-ngau-nhien-tren-pho-Wall-min.png?alt=media&token=3a02e3ed-db0d-496e-83ca-21b6644af3c2" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">BƯỚC ĐI NGẪU NHIÊN TRÊN PHỐ WALL</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FTam-ly-thi-truong-chung-khoan-min.png?alt=media&token=f9a7bf3f-ac81-41b4-903e-44116239351e" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">TẤM LÝ THỊ TRƯỜNG CHỨNG KHOÁN</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-tap-1-min.png?alt=media&token=500efede-8467-4794-a74a-972ba59aacf4" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 1</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-tap-2-min.png?alt=media&token=f2ceaf1a-cc7d-42f4-bfbe-4dd67544031a" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 2</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-tap-3-min.png?alt=media&token=3cd016e0-23f3-41a3-8e9a-76b59d293a95" alt="" />
                </h3>                                 
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 3</p></a>                                 
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-tap-4-min.png?alt=media&token=a017326a-ac20-44b6-a016-d436de9bf0ed" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 4</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-tap-5-min.png?alt=media&token=fc09ed93-c2e0-46d6-8a78-a53b6d6aa8f6" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 5</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-tap-6-min.png?alt=media&token=dccb3a11-1c26-4259-b621-b1a008b7d02b" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 6</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-7-min.png?alt=media&token=243dd339-9e3c-42b4-bf4c-43c33cb7f2ee" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 7</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-8-min.png?alt=media&token=e74dfed1-5739-48c5-aa3c-403a79ba2f73" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 8</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-9-min.png?alt=media&token=719dc760-1fcf-419f-aabd-45b1663022b8" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 9</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-tap-10-min.png?alt=media&token=1f4aad97-5732-40fd-9fc4-eb15cba8a0bb" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 10</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-tap-11-min.png?alt=media&token=b95c510c-62d1-4cb1-a04f-a543989bc273" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 11</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-tap-12-min.png?alt=media&token=a6264e65-618f-463a-882f-1e3118bbf927" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 12</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDay-con-lam-giau-13.png?alt=media&token=c5421763-1314-4343-acd4-ee4b4c637e44" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">DẠY CON LÀM GIÀU TẬP 13</p></a>
              </div>
            </div>
          </div>
          <Router>
            <ul className="pagination">
                    <li className="page-item "><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item ">
                    <a className="page-link" href="/Ebook-free">1</a>
                    </li>
                    <li className="page-item ">
                    <a className="page-link" href="/Ebook-free2">2</a></li>
                    <li className="page-item active">
                    <a className="page-link" href="/Ebook-free3">3</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
        </Router>
        </div>                       
      </div>
    </div>
  </div>
  
</div>

</section>

        )
    }
}
