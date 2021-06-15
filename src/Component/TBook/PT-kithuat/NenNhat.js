import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;

export default function NenNhat() {
    return (
        <div>
            <div className="container-fluid">
            <h2>BÀI 1: NẾN NHẬT LÀ GÌ? </h2>    
                <div className="row">
                    <div className="col-3">
                        <Anchor>
                            <Link href="#nguon-goc" title="1. Nguồn gốc đồ thị nến nhật" />
                            <Link href="#dac-diem" title="2. Các đặt điểm của mô hình nến" />
                            <Link href="#mohinh-nennhat" title="3. Các mô hình nến Nhật cơ bản">
                               
                            </Link>
                            <Link href="#hanche-nennhat" title="4. Hạn chế của các mô hình nến Nhật" />
                            <Link href="#ketluan" title="5. Tổng kết về các mô hình nến Nhật" />
                        </Anchor>
                    </div>
                    <div className="col-9">
                <section id="nguon-goc">
                    <h2>1.nguồn gốc đồ thị nến nhật</h2>
                    <p>Các mô hình nến Nhật Bản có nguồn gốc từ một thương nhân gạo Nhật Bản tên là Munehisa Homma.</p>
                    <p>Munehisa Homma sinh năm 1724 ở thành phố cảng Sakata, đảo Honshu, Nhật Bản trong một gia đình giàu có sở hữu nhiều đồn điền trồng lúa rộng lớn.</p>
                    <p>Sau khi tiếp quản “doanh nghiệp gia đình”, ông đến Osaka để trở thành một nhà đầu cơ gạo vì Osaka khi đó là thị trường buôn bán lúa gạo lớn nhất Nhật Bản. Gạo không chỉ là hàng hóa mà có thể dùng để đổi lấy các đồ dùng sinh hoạt hay các hàng hóa thực phẩm khác. Thậm chí lúa gạo còn được “bán” trước cả khi thu hoạch thông qua các “văn tự bán gạo”. Các văn tự này được trao đổi, mua bán rộng rãi và đơn giản giống như chúng ta mua bán cổ phiếu của các công ty bây giờ.</p>
                    <p>Munehisa Homma cho rằng để giành chiến thắng trong cuộc chơi này thì thông tin là yếu tố quyết định, ai nắm thông tin trước sẽ là người chiến thắng. Munehisa Homma sử dụng hàng trăm người rải khắp các vùng trồng lúa lớn nhất để tạo một mạng lưới thông tin về lúa gạo lớn nhất Nhật Bản bấy giờ…</p>
                    <p>Munehisa Homma phát minh ra một thứ gọi là “đồ thị cây nến” (bây giờ chúng ta gọi là biểu đồ nến Nhật) để biểu hiện biến động giá cả trên thị trường trong nhiều năm liền. Ông vẽ chúng, nghiên cứu, đối chiếu với các tác động của các nhân tố như biến động thời tiết, tình hình kinh tế, chính sách thuế của nhà nước, … để tìm ra quy luật chuyển động giá.</p>
                    <p>Sau nhiều năm nghiên cứu, phi vụ đầu cơ nổi tiếng đi vào lịch sử được gọi tên là “ba ngày mua, một ngày bán”.</p>
                    <p>Trong 3 ngày liên tục, Munehisa Homma chỉ mua vào mà không hề bán ra trong suốt 3 ngày liền, ông nhận được rất nhiều sự tò mò và cả nhạo báng. Trong 3 ngày đó chỉ toàn những thông tin tốt về mùa màng. Đến ngày thứ tư, liên tiếp các thông tin mất mùa từ các nơi đổ về, giá tăng vọt mà không có lúa gạo hay văn tự để mua, tất cả đều phải mua của Homma.</p>
                    <p>Chỉ trong 4 ngày, Munehisa Homma không chỉ trở thành người giàu nhất Nhật Bản mà còn kiểm soát toàn bộ thị trường gạo Nhật Bản lúc bấy giờ.</p>
                    <p>Sau đó, Munehisa Homma đến Tokyo để làm cố vấn tài chính cho Đức Vua và thắng 100 phi vụ đầu cơ liên tục! Từ đó ông được mệnh danh là “Chúa tể thị trường”.
                    200 năm sau, các mô hình nến và biểu đồ nến Nhật mới được giới thiệu đến thế giới phương tây bởi Steve Nison, trong cuốn sách của có tên là Kỹ thuật biểu đồ nến Nhật Bản.</p>
                </section>
                <section id="dac-diem">
                    <h2>2. Các đặc điểm của mô hình nến</h2>
                    <p>Nói về nến Nhật, cách tốt nhất là sử dụng một hình ảnh:</p>
                    <img  width="700" height="500" src="https://sinvest.vn/wp-content/uploads/mo-hinh-nen-nhat-1.png" alt="Mô hình nến Nhật" class="wp-image-16900" />
                    <ul>
                        <li>OPEN: Giá mở cửa</li>
                        <li>CLOSE: Giá đóng cửa</li>
                        <li>LOW: Giá thấp nhất</li>
                        <li>HIGH: Giá cao nhất</li>
                    </ul>
                    <p>Nến Nhật có thể được sử dụng cho bất kỳ khung thời gian nào, cho dù đó là một ngày, một giờ, 30 phút – bất cứ khung thời gian nào bạn muốn! Chúng được sử dụng để mô tả hành động của giá trong khung thời gian đó.</p>
                    <p>Nếu bạn mở biểu đồ D1 (Daily), 1 nến thể hiện hành động giá trong 1 ngày – 24h.</p>
                    <p>Nếu bạn mở biểu đồ H4, 1 nến thể hiện hành động giá trong mỗi 4h. Để biết nến H4 bắt đầu từ khi nào, bạn cần biết thời gian đóng mở cửa thị trường Forex, theo đó cứ cách 4 tiếng từ khi thị trường mở cửa sẽ là 1 nến H4.</p>
                    <p>Giá mở và đóng cửa được xác định dựa vào màu của các mô hình nến Nhật.</p>
                    <ul>
                        <li>Nến tăng (màu xanh lá) có giá mở cửa THẤP HƠN giá đóng cửa.</li>
                        <li>Nến giảm (màu đỏ) có giá mở cửa CAO HƠN giá đóng cửa.</li>
                        <li>Phần giữa khoảng giá mở cửa và đóng cửa gọi là thân nến (body).</li>
                        <li>Các đoạn thẳng trên và dưới thân nến gọi là bóng nến, bóng nến ở trên là upper shadow, bóng nến ở dưới là lower shadow.</li>
                        <li>Giá cao nhất (high) là giá tại bóng trên của nến.</li>
                        <li>Giá thấp nhất (low) là giá tại bóng dưới của nến.</li>
                    </ul>
                </section>
                <section id="mohinh-nennhat">
                    <h1>3. Các mô hình nến Nhật cơ bản</h1>
                    <div id="monhinh-1">
                        <h4>3.1. Mô hình nến Spinning Top - Con xoay</h4>
                        <img width="700" height="500" src="https://sinvest.vn/wp-content/uploads/mo-hinh-nen-nhat-1-1.png"></img>
                        <h5>Nhận dạng mô hình nến Nhật Spinning Top:</h5>
                        <ul>
                            <li>Thân nến nhỏ.</li>
                            <li>Bóng nến trên và dưới dài.</li>
                        </ul>
                        <h5>Ý nghĩa của mô hình nến Nhật Spinning Top:</h5>
                        <ul>
                            <li>Khi thị trường mở cửa, cả phe mua và phe bán đều cố gắng giành quyền kiểm soát (điều này dẫn đến bóng nến trên và dưới dài)</li>
                            <li>Vào cuối phiên, không phe nào có được ưu thế (thân nến nhỏ)</li>
                        </ul>
                        <p>Tóm lại nến Spinning Top cho thấy sự biến động đáng kể trên thị trường, áp lực tranh giành quyền kiểm soát giữa phe mua và phe bán nhưng không có người chiến thắng rõ ràng.</p>
                    </div>
                    <div id="mohinh-2">
                        <h4>3.2. Mô hình nến Marubozu</h4>
                        <img src="https://sinvest.vn/wp-content/uploads/mo-hinh-nen-nhat-2.png"></img>
                        <h5>Nhận dạng mô hình nến Nhật Marubozu:</h5>
                        <ul>
                            <li>Thân nến lớn</li>
                            <li>Không có bóng nến</li>
                        </ul>
                        <h5>Ý nghĩa của mô hình nến Nhật Marubozu:</h5>
                        <ul>
                            <li>Nến Marubozu tăng cho thấy phe mua kiểm soát toàn bộ phiên giao dịch từ đầu đến cuối.</li>
                            <li>Nến Marubozu giảm cho thấy phe bán kiểm soát toàn bộ phiên giao dịch từ đầu đến cuối.</li>
                        </ul>
                    </div>
                    <div id="mohinh-3">
                        <h1>3.3. Mô hình nến Nhật Hammer và Inverted Hammer</h1>
                        <div>
                            <h4>Mô hình nến Hammer (nến Búa)</h4>
                            <img src="https://sinvest.vn/wp-content/uploads/mo-hinh-nen-nhat-3.png"></img>
                            <h5>Nhận dạng nến Hammer:</h5>
                            <ul>
                                <li>Thân nến nhỏ</li>
                                <li>Bóng nến trên rất nhỏ hoặc không có</li>
                                <li>Bóng nến dưới dài</li>
                            </ul>
                            <h5>Ý nghĩa nến Hammer:</h5>
                            <ul>
                                <li>Nến Hammer cho thấy ban đầu phe bán chiếm ưu thế khi giảm mạnh so với điểm mở cửa, nhưng về sau phe mua chiếm lại ưu thế khi đẩy giá lên, tạo bóng dưới nến dài.</li>
                                <li>Nếu nến Hammer xuất hiện trong một xu hướng giảm thì rất có thể đó là dự báo cho một sự đảo chiều tăng.</li>
                            </ul>
                            <h4>Mô hình nến Inverted Hammer (nến Búa ngược)</h4>
                            <img src="https://sinvest.vn/wp-content/uploads/mo-hinh-nen-nhat-4.png"></img>
                            <p>Như tên gọi thì nến Inverted Hammer giống với nến Hammer nhưng xoay ngược lại.</p>
                            <h5>Nhận dạng mô hình nến Inverted Hammer:</h5>
                            <ul>
                                <li>Thân nến nhỏ</li>
                                <li>Bóng nến dưới rất nhỏ hoặc không có</li>
                                <li>Bóng nến dưới dài</li>
                            </ul>
                            <h5>Ý nghĩa mô hình nến Inverted Hammer:</h5>
                            <ul>
                                <li>Nến Inverted Hammer cho thấy ban đầu phe mua chiếm ưu thế khi đẩy giá lên cao so với giá mở cửa, nhưng về sau phe bán lấy lại ưu thế khi đẩy giá xuống tạo thành bóng nến trên dài.</li>
                                <li>Nếu nến Inverted Hammer xuất hiện trong một xu hướng tăng thì rất có thể đó là dự báo cho một sự đảo chiều giảm.</li>
                            </ul>
                        </div>
                    </div>
                    <div id="mohinh-4">
                        <h1>3.4. Mô hình nến Doji</h1>
                        <div>
                            <h4>Mô hình nến Hammer (nến Búa)</h4>
                            <img src="https://sinvest.vn/wp-content/uploads/mo-hinh-nen-nhat-5.png"></img>
                            <h5>Nhận dạng nến Doji:</h5>
                            <p> Doji là nến có giá mở cửa trùng hoặc rất gần với giá đóng cửa.</p>
                            <h5>Ý nghĩa nến Hammer: </h5>
                            <p>Nến Doji cho thấy sự cân bằng giữa phe mua và phe bán. Cả phe mua và phe bán đều không thể giành quyền kiểm soát và kết quả về cơ bản là một trận hòa.</p>
                            <p>Tuy nhiên Doji có 2 biến thể với ý nghĩa khác nhau:</p>
                            <div>
                                <h4>Dragonfly Doji</h4>
                                <img src="https://sinvest.vn/wp-content/uploads/mo-hinh-nen-nhat-6.png"></img>
                                <h5>Nhận dạng Dragonfly Doji:</h5>
                                <p>Không giống như một Doji thông thường giá mở cửa và đóng cửa ở gần giữa cây nến. Dragonfly Doji có giá mở cửa và đóng cửa cùng là giá cao nhất trong phiên.</p>
                                <h5>Ý nghĩa của Dragonfly Doji:</h5>
                                <p>Dragonfly Doji cho thấy phe mua từ chối giá thấp hơn khi tăng áp lực mua vào cho đến thời điểm cuối phiên giao dịch. Qua đó cho thấy phe mua đang có lợi thế lớn hơn khi bước qua phiên giao dịch sau.</p>
                            </div>
                            <div>
                                <h4>Gravestone Doji</h4>
                                <img src="https://sinvest.vn/wp-content/uploads/mo-hinh-nen-nhat-7.png"></img>
                                <h5>Nhận dạng Gravestone Doji:</h5>
                                <p>Gravestone Doji có giá mở cửa và đóng cửa cùng là giá thấp nhất trong phiên.</p>
                                <h5>Ý nghĩa của Gravestone Doji:</h5>
                                <p>Gravestone Doji cho thấy phe bán từ chối giá cao hơn khi tăng áp lực bán ra cho đến thời điểm cuối phiên giao dịch. Qua đó cho thấy phe bán đang có lợi thế lớn hơn khi bước qua phiên giao dịch sau.</p>
                            </div>
                        </div>
                    </div>
                    <div id="hanche-nennhat">
                    <h2>4. Hạn chế của các mô hình nến Nhật</h2>
                        <div>
                            <h4>4.1. Mô hình nến Nhật không thể dự báo xu hướng</h4>
                            <p>Như bạn đã biết, một mô hình nến Nhật chỉ thể hiện giá đóng cửa, giá mở cửa, giá cao nhất và giá thấp nhất trong 1 khoảng thời gian nhất định.</p>
                            <p>Vì vậy các mô hình nến Nhật chỉ cho bạn biết những điều diễn ra trong hiện tại mà thôi.</p>
                            <p>Một mình mô hình nến Nhật sẽ không thể hiện được xu hướng và cũng không giúp bạn xác định được xu hướng hiện tại của thị trường.</p>
                            <p>Ví dụ, mô hình nến hiện tại đang là 1 cây Doji, điều này chỉ có nghĩa rằng phe mua và phe bán đang tạm đình chiến. Bạn không thể nhìn vào mô hình nến Doji để biết bên mua hay bên bán sẽ chiến thắng.</p>
                            <p>Bản thân mô hình nến Nhật là một CÔNG CỤ GIAO DỊCH, hoàn toàn không phải một HỆ THỐNG GIAO DỊCH hoàn chỉnh.</p>
                            <p>Bạn cần nhiều hơn việc chỉ nhìn các mô hình nến Nhật để có thể xác định xu hướng và giao dịch!</p>
                        </div>
                        <div>
                            <h4>4.2. Mô hình nến Nhật không thể hiện rõ chuyển động giá bên trong nó</h4>
                            <p>Bạn hãy quan sát hình bên dưới:</p>
                            <img src="https://sinvest.vn/wp-content/uploads/mo-hinh-nen-nhat-8.png"></img>
                            <p>Bên trái là một mô hình nến D1, bên phải là 2 hành động giá trên H1. Bạn có biết được hành động giá nào ở bên trong nến D1 đó không?</p>
                            <p>Hành động giá bên trong bản thân cây nến QUAN TRỌNG HƠN cây nến đó rất nhiều vì nó cho bạn biết nhiều điều về thị trường hơn.</p>
                        </div>
                    </div>
                    <div id="ketluan">
                        <h2>5. Tổng kết về các mô hình nến Nhật</h2>
                        <p>Qua bài viết này, bạn đã được biết về nguồn gốc của mô hình nến Nhật và các đặc điểm của chúng.</p>
                        <p>Các mô hình nến Nhật được giới thiệu trong bài viết này đều là các mô hình nến đặc trưng và được sử dụng rất nhiều trong giao dịch Forex.</p>
                        <p>Ngoài ra, với những mô hình nến đặc biệt như Doji hay Hammer…, tôi sẽ có những bài viết riêng để hướng dẫn một cách cụ thể cách sử dụng chúng hiệu quả trong giao dịch.</p>
                    </div>
                </section>
            </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p>bài tiếp theo</p>
                    <h2>
                        <a href="/nendaochieu"> BÀI 2: CÁC MÔ HÌNH NẾN ĐẢO CHIỀU</a>
                    </h2>
                </div>
                <div className="col-6">
                    <p>bài tiếp theo</p>
                    <h2>
                        <a href="/nentiepdien"> BÀI 3: CÁC MÔ HÌNH NẾN TIẾP DIỄN</a>
                    </h2>
                </div>
            </div>
        </div>
    )
}

