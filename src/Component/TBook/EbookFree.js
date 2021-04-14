import React, { Component } from 'react'
import {dataNote , storage} from '../Firebase';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class EbookFree extends Component {
  constructor () {
    super()
    this.state = {
      acmongkhunghoang: '',
      DayConLamGiau:''
    }
    this.getImage("https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FAc-mong-dai-khung-hoang-1929-min.png?alt=media&token=4f6a4444-226d-4cdc-9b32-5383883e5c7f");
  }
  
  GetAllImage = (images) => {
    const { state } = this
    storage.child('image-book/').listAll().then((image)=>{
      image.items.forEach((imageRef) => {
        imageRef.getDownloadURL().then((url)=>{
          
        state[images] = url
        this.setState(state)
        console.log(images);
        }).catch((error) => {
          console.log(error);
          
        })
      })
    })
  }

  getImage = (image) => {
    
    storage.child(`${image}.png`).getDownloadURL().then((url) => {  
      this.state[image] = url
      this.setState(this.state)
    }).catch((error) => {
      console.log(error);
      
    });
  }


    render() {
      console.log(this.GetAllImage);
        return (
            <section>
                <div>
  <div className="container-fluid">
    <div className="section-header">
      <h1>DANH SÁCH</h1>
    </div>
    <div className="row">
      <div className="col-2">
        {/* <div className="section-list">
          <div className="list-group">
            <a href="./sanpham.html" className="list-group-item list-group-item-action active">Sách Đầu Tư</a>
            <a href="./sp-dayconlamgiau.html" className="list-group-item list-group-item-action ">Dạy Con Làm Giàu</a>
            <a href="./sp-tamli.html" className="list-group-item list-group-item-action ">
            
             Tâm lý - Tư Duy</a>
            <a href="#" class="list-group-item list-group-item-action">Item</a>
                      <a href="#" class="list-group-item list-group-item-action "> item</a>
                      <a href="#" class="list-group-item list-group-item-action">Item</a>
                      <a href="#" class="list-group-item list-group-item-action "> item</a>
          </div>
        </div> */}
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col-xs-1-10 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FAc-mong-dai-khung-hoang-1929-min.png?alt=media&token=bcb921c4-0616-4a55-befb-8821a14b048d"></img>
                </h3>
                <a href="https://drive.google.com/file/d/1auwJzr-vOdMXH6Brb7Nt47ARQlHcLMuI/view" className="card-text" target="blank"><p className="card-text">ÁC MỘNG KHỦNG HOẢNG 1929 PDF</p></a>
                <a href className="card-text" />
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  {/* <img src="./image/Bi-quyet-tay-trang-thanh-trieu-phu-min.png" alt="" /> */}
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FBi-quyet-tay-trang-thanh-trieu-phu-min.png?alt=media&token=7ed4bd59-8ca7-4920-8a7e-5fdea1f44314" alt="asdas"></img>
                </h3>
                <a href="https://drive.google.com/file/d/13CNCWeF2R8SuvU7wuRLt0jfBPkOSahaF/view" className="card-text"><p className="card-text">BỊ QUYẾT TAY TRẮNG THÀNH TRIỆU PHÚ</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FBuffett-dau-tu-nhu-mot-co-gai-min.png?alt=media&token=6cdc54dd-d9e2-4e91-82be-8c368da01fc5" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1Sr6vqoNvDrwDcFh9ie8zwmB20AqdoN_p/view" className="card-text"><p className="card-text">ĐẦU TƯ NHƯ MỘT CÔ GÁI</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FCong-thuc-ky-dieu-chinh-phuc-thi-truong-chung-khoan-min.png?alt=media&token=82162cf1-0140-45d8-ab1e-58a48bdb5af2" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1nam6afuNTDqEDuGrdh_a4jtGtb0Wb1_f/view" className="card-text"><p className="card-text">CÔNG THỨC KỲ DIỆU CHINH PHỤC THỊ TRƯỜNG CHÚNG KHOÁN</p></a>                         
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FCuoc-choi-dau-tu-mao-hiem-min.png?alt=media&token=32496328-43b3-40a4-8fce-1a6084ad5879" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1O-rKEoxpsn49PAQdXDY1PyrkzcE0lHdU/view" className="card-text"><p className="card-text">CUỘC CHƠI ĐẦU TƯ MẠO HIỂM</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FCuoc-noi-day-o-pho-Wall-min.png?alt=media&token=6dd4795c-b25c-4ec4-bd3f-2854dc93e6e8" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1RE2DgZjJu7kJov0xbb181-ksnxdIWG6I/view" className="card-text"><p className="card-text">CUỘC NỖI DẬY Ở PHỐ WALL</p></a>                             
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDanh-bai-pho-wall-min.png?alt=media&token=8340ddde-585b-4052-af6f-0effccc60042" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1uAqpuINuvVcqTr7cqH-Axlu4QfHhMcKC/view" className="card-text"><p className="card-text">ĐÁNH BẠI PHỐ WALL</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FDau-tu-mao-hiem-min.png?alt=media&token=7b8640d8-6a64-4a8c-9c00-87f49276b945" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1SpqJSnF53-qSkXZHbuUdkEIRKDfjO9Jm/view" className="card-text"><p className="card-text">ĐẦU TƯ MẠO HIỂM</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FGiao-dich-lon-min.png?alt=media&token=e631fea8-044e-416c-a2fe-9aa1ca776490" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1PKTKfsl_ZJvQIvAlNJeA7dgZVjXR7W44/view" className="card-text"><p className="card-text">GIAO DỊCH LỚN</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2Fa.png?alt=media&token=ae2d2002-353f-434c-a919-30eb247ee46d" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1lN02C1NuCgy-KnCqCgLVW_9wo1KfV59y/view" className="card-text"><p className="card-text">LUẬT CỦA BUFFETT</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FNhung-ong-trum-tai-chinh-min.png?alt=media&token=55b1dc89-8726-43f2-8e19-2e829b59ef4c" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1OYPqvW7_q8T9Xb3UGn7ebnzXvDD3d9mM/view" className="card-text"><p className="card-text">NHỮNG ÔNG TRÙM TÀI CHÍNH</p></a>
              </div>
            </div>
          </div>
          <div className="col-xs-1-12 col-3">
            <div className="cards">
              <div className="card-body">
                <h3 className="card-title">
                  <img src="https://firebasestorage.googleapis.com/v0/b/data-test-22926.appspot.com/o/image-book%2FPhuong-phap-dau-tu-Warren-Buffett-min.png?alt=media&token=c0678445-71d8-4c96-af0e-82fd28e2456a" alt="" />
                </h3>
                <a href="https://drive.google.com/file/d/1ygIJ-4-F46FtSyoHPXIAcx97a7bVZuNd/view" className="card-text"><p className="card-text">PHƯƠNG PHÁP ĐẦU TƯ WARREN BUFETT</p></a>
              </div>
            </div>
          </div>
        </div>                       
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
          <a className="page-link" href="">2</a></li>
        <li className="page-item"><a className="page-link" href>3</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
  </Router>
     
</div>

</section>
        )
    }
}
