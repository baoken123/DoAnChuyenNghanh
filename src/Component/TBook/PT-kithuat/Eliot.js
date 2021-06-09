import React from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;
export default function Eliot() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <Anchor>
                        <Link href="#lichsu" title="1. Lịch sử ra đời lý thuyết sóng Elliott" />                      
                        <Link href="#cautruc" title="2. Cấu trúc mô hình sóng Elliott" />                      
                        <Link href="#3quitac" title="3. Ba quy tắc của sóng Elliott" />                      
                        <Link href="#hientuongsong" title="4. Hiện tượng sóng trong sóng trong lý thuyết sóng Elliott" />                      
                        <Link href="#capdosong" title="5. Cấp độ sóng Elliott" />                      
                        <Link href="#tengoi" title="6. Tên gọi và ký hiệu của 11 dạng mô hình sóng" />                      
                    </Anchor>
                </div>
                <div className="col-9">
                <section id="lichsu">
                    <h2>1. Lịch sử ra đời lý thuyết sóng Elliott</h2>
                    <p><b>Lý thuyết sóng Elliott</b> được đặt theo tên của<b>Ralph Nelson Elliott</b> (28/7/1871 – 15/1/1948). Ông là một kế toán viên chuyên nghiệp và là một tác giả người Mỹ. </p>
                    <p>Bằng việc phân tích dữ liệu lịch sử chứng khoán trong nhiều năm, Elliott kết luận rằng sự chuyển động của thị trường chứng khoán có thể được dự đoán bằng cách quan sát và xác định mô hình sóng lặp đi lặp lại.</p>
                    <p>Sau này lý thuyết sóng không chỉ được áp dụng vào phân tích thị trường chứng khoán mà còn được sử dụng rộng rãi trong các thị trường tài chính khác, thị trường Forex cũng không ngoại lệ.</p>
                    <p><b>Lý thuyết sóng Elliott là sự mô tả chi tiết và cách thức cư xử hành vi của các nhóm người. Nó cho thấy sự thay đổi tâm lý đám đông từ bi quan thành lạc quan và ngược lại theo một mắt xích tự nhiên tạo thành các mô hình riêng biệt có thể đo lường được.</b></p>
                    <p>Một trong những nơi rõ ràng nhất để quan sát hiện tượng này là các thị trường tài chính nơi tâm lý của nhà đầu tư thay đổi được ghi chép lại dưới dạng biến động giá.</p>
                    <p>Elliott đã phân biệt 11 mô hình biến động giá hay còn gọi là các mô hình sóng. Ông đã đặt tên, định nghĩa và minh họa những mô hình này. Ông mô tả cách hình thành các mô hình và những phiên bản lớn hơn của chúng.</p>
                    <p>Lý thuyết sóng Elliott là một tập hợp các mô hình giá và sự giải thích về vị trí có thể xảy ra trong tiến trình phát triển chung của thị trường. Thị trường thường theo các thời kỳ phát triển, luân phiên theo các giai đoạn không tăng trưởng hay suy yếu, xây dựng phân đoạn theo các mô hình tương tự có kích cỡ tăng dần.</p>
                    {/* <img src="https://bpcdn.co/images/2016/05/grade9-elliot.png"></img> */}
                    <p>Năm 1938, Elliott lần đầu tiên xuất bản lý thuyết của mình về các mô hình thị trường trong cuốn sách có tựa đề <b>The Wave Principle.</b></p>
                    <p>Năm 1939, ông tổng kết lý thuyết sóng trong một loạt các bài viết trong tạp chí <b>Financial World.</b></p>
                    <p>Cuối cùng đến năm 1946, Elliott đề cập lý thuyết sóng một cách toàn diện nhất trong tác phẩm lớn cuối cùng của mình <b>Nature’s Laws: The Secret of the Universe.</b></p>
                </section>
                <section id="cautruc">
                    <h2>2. Cấu trúc mô hình sóng Elliott</h2>
                    <p>Lý thuyết sóng Elliott cho thấy rằng thị trường diễn biến theo các mô hình 5 sóng trong xu hướng chủ đạo rồi hồi lại theo các quá trình điều chỉnh 3 sóng hoặc 5 sóng trước khi tiếp tục trở lại xu hướng chủ đạo.</p>
                    <p>Các mô hình trong xu hướng chủ đạo luôn theo các mô hình 5 sóng và được đánh dấu theo các số 1-2-3-4-5. Các mô hình diễn biến ngược với xu hướng chủ đạo nói chung là các mô hình 3 sóng nhưng có thể là các mô hình 5 sóng và được đánh dấu bằng các chữ cái A-B-C (D-E).</p>
                    <p>Trong mô hình sóng Elliott, sóng chủ và sóng điều chỉnh xen kẽ nhau trong mọi cấp độ của xu hướng, trong mọi quy mô thời gian.</p>
                    <p>Một sóng chủ (impulse wave) bao gồm 5 sóng cấp dưới và chuyển động cùng hướng với xu hướng của sóng cấp cao hơn. </p>
                    <p>Một sóng điều chỉnh (corrective wave) luôn gồm 3 sóng cấp dưới và chuyển động ngược hướng với xu hướng của sóng cấp cao hơn.</p>
                    <img src="https://bpcdn.co/images/2016/05/grade9-waves-within-a-wave.png"></img>
                </section>
                <section id="3quitac">
                    <h2>3. Ba quy tắc của sóng Elliott</h2>
                    <p>Một mô hình sóng Elliott hợp lệ phải tuân thủ 3 quy tắc sau:</p>
                    <p>1. Sóng 2 không thoái lui quá điểm bắt đầu sóng 1.</p>
                    <p>2. Sóng 3 không là sóng ngắn nhất trong các sóng chủ 1-3-5.</p>
                    <p>3. Sóng 4 không vi phạm vào khu vực giá của sóng 1.</p>
                </section>
                <section id="hientuongsong">
                    <h2>4. Hiện tượng sóng trong sóng trong lý thuyết sóng Elliott</h2>
                    <p>Theo hình minh họa bên dưới cho thấy cấu trúc hình thành hiện tượng sóng trong sóng của lý thuyết sóng Elliott.</p>
                    <img src="https://lh5.googleusercontent.com/NsJYiA5UVrLfbUIwy9hebXcu_E0bUxY1zWbXBcBUYouFeHnLvd8x3e1Hf33tXKy5vjSEE6kvLijR99zPpnTFWl4Tyly4kgxZciJ1KneJ-lnapGy8LoQyVtg13p1iOL0xkAkyfkI"></img>
                    <p>Mắt xích đầu tiên là mô hình sóng chủ (impulse wave) kết thúc tại đỉnh 1<b>(sóng 1)</b>  Mô hình này cho thấy rằng dao động giá thuộc cấp độ sóng lớn hơn cũng theo hướng đi lên. Nó cũng báo hiệu sự khởi đầu của mắt xích điều chỉnh 3 sóng là <b> sóng 2 </b> Các <b>sóng 3, sóng 4, sóng 5</b> hoàn thành mắt xích sóng chủ lớn hơn là <b>sóng 1</b></p>
                    <p>Cấu trúc sóng chủ của sóng 1 cho thấy dao động giá thuộc cấp độ sóng lớn hơn là <b>sóng 1</b> theo chiều đi lên. Quá trình điều chỉnh ở<b>sóng 2</b> theo sau là <b>sóng 3, sóng 4</b> và <b>sóng 5</b> sẽ hoàn thành mắt xích sóng chủ của cấp độ sóng lớn hơn nữa là <b>sóng 1</b>.</p>
                    <p>Một lần nữa thì quá trình điều chỉnh theo 3 sóng ở cùng cấp độ sóng xảy ra là <b>sóng 2</b>. Cứ thế lần lượt phát triển hoàn thành toàn bộ quá trình. </p>
                </section>
                <section id="capdosong">
                    <h2>5. Cấp độ sóng Elliott</h2>
                    <p>Cấp độ sóng Elliott là thuật ngữ xác định các chu kỳ thời gian để nhà phân tích có thể xác định vị trí của sóng trong cái nhìn tổng quát thị trường. </p>
                    <p>Có 9 cấp độ sóng chính từ chu kỳ thời gian nhiều thế kỷ (Grand super cycle) cho đến chu kỳ chỉ vài phút (Subminuette).</p>
                    <p>1. Grand super cycle</p>
                    <p>2. Super cycle</p>
                    <p>3. Cycle</p>
                    <p>4. Primary</p>
                    <p>5. Intermediate</p>
                    <p>6. Minor</p>
                    <p>7. Minute</p>
                    <p>8. Minuette</p>
                    <p>9. Subminuette</p>
                    <p>Trên thực tế giao dịch bạn cũng không cần nhớ tên những cấp độ sóng này làm gì, chỉ cần bạn nắm vững các lý thuyết giao dịch với sóng Elliott là được.</p>
                </section>
                <section id="tengoi">
                    <h2>6. Tên gọi và ký hiệu của 11 dạng mô hình sóng</h2>
                    <p>1. Mô hình Impulse (được ký hiệu là IM)</p>
                    <p>2. Mô hình Leading Diagonal Triangle (được ký hiệu là LD)</p>
                    <p>3. Mô hình Ending Diagonal Triangle (được ký hiệu là ED)</p>
                    <p>4. Mô hình Zigzag (được ký hiệu là ZZ)</p>
                    <p>5. Mô hình Double Zigzag (được ký hiệu là DZ)</p>
                    <p>6. Mô hình Triple Zigzag (được ký hiệu là TZ)</p>
                    <p>7. Mô hình Flat (được ký hiệu là FL)</p>
                    <p>8. Mô hình Double Three (được ký hiệu là D3)</p>
                    <p>9. Mô hình Triple Three (được ký hiệu là T3)</p>
                    <p>10. Mô hình Contracting Triangle (được ký hiệu là CT)</p>
                    <p>11. Mô hình Extending Triangle (được ký hiệu là ET)</p>
                </section>
                </div>
            </div>
        </div>
    )
}
