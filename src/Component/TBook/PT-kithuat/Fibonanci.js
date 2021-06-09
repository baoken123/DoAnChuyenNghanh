import React from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;
export default function Fibonanci() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <Anchor>
                        <Link href="#dinh-nghia" title="1. Fibonacci là ai? " />
                        <Link href="#day-so" title="2. Dãy số Fibonacci là gì?" />
                        <Link href="#ti-le-vang" title="3. Tỷ lệ vàng là gì?" />
                        <Link href="#pt-thitruong" title="4. Tỷ lệ Fibonacci trong phân tích thị trường Forex" />
                    </Anchor>
                </div>
                <div className="col-9">
                    <section id="dinh-nghia">
                        <h2>1. Fibonacci là ai?</h2>
                        <p><b>Fibonacci </b>tên đầy đủ là Leonardo Pisano Bogollo (khoảng 1170 – khoảng 1250), là một nhà toán học người Ý, được xem là “nhà toán học tài ba nhất thời Trung Cổ”. </p>
                        <p>Từ khi còn bé, Fibonacci đã đi đến cơ sở kinh doanh của cha mình để giúp việc. Đây chính là nơi ông học chữ số Hindu.</p>
                        <p>Sau này ông nhận ra rằng chữ số Hindu đơn giản và hiệu quả hơn chữ số La Mã, Fibonacci đã đi khắp Địa Trung Hải để học hỏi những nhà toán học hàng đầu Ả Rập thời đó.</p>
                        <p>Vào năm 1200, ông trở về quê hương và giới thiệu với cộng đồng La-tinh về hệ thập phân, chính là hệ số chúng ta sử dụng ngày hôm nay.</p>
                        <p>Tuy đóng góp rất nhiều cho Toán học nhưng ông được biết đến nhiều nhất với dãy số Fibonacci và Tỷ lệ vàng.</p>
                    </section>
                    <section id="day-so">
                        <h2>2. Dãy số Fibonacci là gì?</h2>
                        <p>Dãy số Fibonacci là một dãy số có quy tắc cực kỳ đơn giản: dãy số bắt đầu từ 0 và 1, số tiếp theo bằng tổng 2 số liền trước.</p>
                        <p>Theo quy tắc này ta sẽ có: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …</p>
                        <p>Và từ dãy số Fibonacci ông lại tiếp tục phát hiện ra TỶ LỆ VÀNG (tiếng Anh là The Golden Ratio) – con số thần kỳ xuất hiện trong vạn vật tự nhiên.</p>
                    </section>
                    <section id="ti-le-vang">
                        <h2>3. Tỷ lệ vàng là gì?</h2>
                        <p>Hai đại lượng được gọi là có tỷ lệ vàng nếu tỷ số giữa <b>tổng của các đại lượng đó với đại lượng lớn hơn bằng tỷ số giữa đại lượng lớn hơn với đại lượng nhỏ hơn. </b></p>
                        <p>Tỷ lệ vàng ký hiệu là φ (đọc là phi).</p>
                        <p>Tỷ lệ vàng được biểu diễn như sau:</p>
                        <img src="https://sinvest.vn/wp-content/uploads/fibonacci-la-gi.png"></img>
                        <p>Phương trình này có nghiệm là một số vô tỷ:</p>
                        <img src="https://sinvest.vn/wp-content/uploads/fibonacci-la-gi-1.png"></img>
                        <p>Liên hệ giữa tỷ lệ vàng và dãy số Fibonacci: 2 số liên tiếp bất kỳ trong dãy Fibonacci đều có tỷ số gần bằng tỷ lệ vàng. 2 số liên tiếp càng lớn thì tỷ số này càng tiệm cận tỷ lệ vàng.</p>
                        <p>Một số tỷ lệ Fibonacci chính có thể được lấy như sau:</p>
                        <ul>
                            <li>0.618 được lấy bằng cách chia bất kỳ số nào trong dãy số Fibonacci cho một số khác đứng ngay sau nó. Ví dụ: 8 chia cho 13 hoặc 55 chia cho 89. </li>
                            <li>0.382 được lấy bằng cách chia bất kỳ số nào trong dãy số Fibonacci cho một số cách số đó 1 vị trí về bên phải. Ví dụ: 34 chia cho 89 hoặc 55 chia cho 144.</li>
                            <li>1.618 (Tỷ lệ vàng) được lấy bằng cách chia bất kỳ số nào trong dãy Fibonacci cho số đứng liền trước nó. Ví dụ: 89 chia cho 55, 144 chia cho 89.</li>
                        </ul>
                        <p>Tỉ lệ vàng xuất hiện một cách dày đặc trong tự nhiên và được con người áp dụng vào rất nhiều mặt trong đời sống.
                        </p>
                        <p>Bạn sẽ dễ dàng nhận ra tỷ lệ này trong rất nhiều tạo vật của thiên nhiên như dương xỉ, hoa, vỏ sò biển, thậm chí là cả những cơn bão.</p>
                        <p>Các công trình nhân tạo khi ứng dụng tỷ lệ vàng vào thiết kế đều tỏ ra hài hòa, cân đối, có sức hút kỳ lạ và đặc biệt là có sức bền rất lớn. Điển hình như kim tự tháp Giza ở Ai Cập, đền Parthenon ở Hi Lạp, bức họa Mona Lisa của Da Vinci …</p>
                        <p>Ngày nay, tỷ lệ vàng xuất hiện hầu hết trong logo của những công ty lớn như Apple, Adidas, Pepsi, Twitter …</p>
                        <p>Đó là lý do tại sao nó đem cho ta sự thoả mãn về mặt thị giác. Đó chính là nét đẹp thuần khiết từ tự nhiên.</p>
                        <p>Mời bạn xem clip dưới về tỷ lệ vàng:</p>
                        <iframe width="640" height="480" src="https://www.youtube.com/embed/VkHiV2SvATk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </section>
                    <section id="pt-thitruong">
                        <h2>4. Tỷ lệ Fibonacci trong phân tích thị trường Forex</h2>
                        <p>Fibonacci là chủ đề quá lớn và đã rất nhiều nghiên cứu về Fibonacci. Tuy nhiên trong phân tích và giao dịch trên thị trường Forex, chúng ta sẽ đề cập đến hai vấn đề: thoái lui và mở rộng.</p>
                        <p>Bạn sẽ sử dụng công cụ Fibonacci Retracement để đo các mức thoái lui đóng vai trò như hỗ trợ và kháng cự tiềm năng khi thị trường điều chỉnh.Căn cứ và các mức thoái lui này bạn sẽ có những điểm vào lệnh tốt.</p>
                        <p>Các mức thoái lui: 0.236, 0.382, 0.5, 0.618 và 0.764.</p>
                        <p>Bạn sẽ sử dụng công cụ Fibonacci Extension để đo các mức giá mà một xu hướng có thể chạm tới. Căn cứ vào đó bạn sẽ đưa ra những điểm chốt lời tối ưu nhất.</p>
                        <p>Các mức mở rộng: 0.236, 0.382, 0.5, 0.618, 0.764, 1, 1.618, 2.618, 3.618 và 4.618.</p>
                        <p>Hầu hết các nền tảng giao dịch Forex hiện nay đều có công cụ Fibonacci Retracement và Fibonacci Extension.</p>
                        <p>Các mức Fibonacci sẽ được hiển thị trên biểu đồ nến nên bạn sẽ không cần phải thực hiện bất kỳ tính toán nào. Việc của bạn là sử dụng nó thật tốt.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
