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
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FPh%C6%B0%C6%A1ng-ph%C3%A1p-m%E1%BB%9Bi-%C4%91%E1%BB%83-giao-d%E1%BB%8Bch-ki%E1%BA%BFm-s%E1%BB%91ng-min.png?alt=media&token=bb6ad800-94f7-4d18-b731-f40ebaf84314" alt="phuong phap moi de giao dich kiem song" />
                </h3>
                <a href="" className="card-text" target="blank">PHƯƠNG PHÁP MỚI ĐỂ GIAO DỊCH KIẾM SỐNG</a>
              </div>
            </div>
          </div>

          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FQuy-tac-so-1-min.png?alt=media&token=8c34857a-1b5b-4f50-a775-3b7762806b5a" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1kjQrueDpEP5zZiFlJBPkt17uHV_b5YzS/view" className="card-text"><p className="card-text">QUY TẮC SỐ 1</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FTam-ly-hoc-dam-dong-1-min.png?alt=media&token=ae5a315f-31d6-44ee-941b-1700ea0b25a8" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1-yY8UdX2BhMVqtNUWew_yrAeMy2SzCWw/view" className="card-text"><p className="card-text">TÂM LÝ HỌC ĐÁM ĐÔNG</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FThink-and-grow-rich-min.png?alt=media&token=2cbf1df4-99bd-4c8b-a5ff-42cfa3b36b65" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1liiTboYjh-EZRgTBY_5TxivUFWueul60/view" className="card-text"><p className="card-text">NGHĨ GIÀU LÀM GIÀU</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FToi-da-kiem-2-trieu-do-tu-thi-truong-chung-khoan-nhu-the-nao-min.png?alt=media&token=a01b7606-2a62-41cf-a730-e6a9a6a36ffe" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/18cpcoArC_BqxB-koswJ3BEIanE93tUBQ/view" className="card-text"><p className="card-text">TÔI ĐÃ KIẾM 2 TRIỆU ĐÔ LA TỪ THỊ TRƯỜNG KHOÁN NHƯ THẾ NÀO</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FTren-dinh-pho-Wall-min.png?alt=media&token=09314381-48c2-49d6-8e9a-72dae6aa2728" alt="" />
                </h3>                                 
                <a href="https://drive.google.com/file/d/16Q7ry-bzp5DXfOr3DWjKN5Ew-voCy5JH/view" className="card-text"><p className="card-text">TRÊN ĐỈNH PHỐ WALL</p></a>                                 
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FTri-tue-tai-chinh-min.png?alt=media&token=72923633-a53a-4d4a-8961-df3c867ca1bb" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1-QZgEXlPqjJXsK-XI526Ud0ACCTC-Okq/view" className="card-text"><p className="card-text">TRÍ TUỆ TÀI CHÍNH</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FTro-bip-tren-pho-Wall-min.png?alt=media&token=461777f9-6292-4376-bf35-b502ee8bcec0" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">TRÒ BỊP TRÊN PHỐ WALL</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FTu-duy-nhanh-va-cham-min.png?alt=media&token=0facba03-6759-4699-bab4-5c1656839ada" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/12pEtfA7wbZ4E6A2NIuJ05ZMi0PNpDK7S/view" className="card-text"><p className="card-text">TƯ DUY NHANH VÀ CHẬM</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2F100-loi-khuyen-dau-tu-Bat-Dong-San-khon-ngoan-nhat-min.png?alt=media&token=6c7a280d-22c4-46c1-8185-214c3a48743a" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/18Kwgk8-p6sp8SMvyjep7Sz7wwSXN0ByJ/view" className="card-text">
                <p className="card-text">DONALD TRUMP CHIẾN LƯỢC ĐẦU TƯ BẤT ĐỘNG SẢN</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FNgay-ca-Buffett-cung-khong-hoan-hao-min.png?alt=media&token=41a03ef4-c654-41fd-9a35-768c0d9a57fd" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1bVRSddpyEtLIh3Cxeaf8YGBfUs4ujy_j/view" className="card-text"><p className="card-text">NGAY CẢ BUFFETT CŨNG KHÔNG HOÀN HẢO</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2F24-bai-hoc-song-con-de-dau-tu-thanh-cong-tren-thi-truong-Chung-Khoan-min.png?alt=media&token=01181f97-868a-4393-a541-90e8370a613c" alt="" />
                </h3>
                <a href="" className="card-text"><p className="card-text">24 BÀI HỌC ĐÊ ĐẦU TƯ THÀNH CÔNG TRÊN THỊ TRƯỜNG CHỨNG KHOÁN</p></a>
              </div>
            </div>
          </div>
          <Router>
            <ul className="pagination">
            <li className="page-item "><a className="page-link" href="#">Previous</a></li>
            <li className="page-item ">
            <a className="page-link" href="/Ebook-free">1</a>
            </li>
            <li className="page-item active">
            <a className="page-link" href="/Ebook-free2">2</a></li>
            <li className="page-item">
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
