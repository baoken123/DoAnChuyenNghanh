import React from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;
export default function FiboExtention() {
    return (
        <div className="container-fluid">
            <h2>BÀI 3: HƯỚNG DẪN SỬ DỤNG FIBONACCI EXTENSION ĐỂ CHỐT LỜI HIỆU QUẢ</h2>
            <div className="row">
                <div className="col-3">
                    <Anchor>
                        <Link href="#1" title="1. Fibonacci Extension là gì?" />
                        <Link href="#2" title="2. Các mức Fibonacci Extension" />
                        <Link href="#3" title="3. Cách vẽ Fibonacci Extension"/>
                        <Link href="#4" title="4. Cách đặt chốt lời bằng Fibonacci Extension">
                            <Link href="#4.1" title="4.1. Cách 1: Fibonacci Extension + hỗ trợ và kháng cự"/>
                            <Link href="#4.2" title="4.2. Cách 2: Fibonacci Extension + kênh giá"/>
                            <Link href="#4.3" title="4.3. Cách 3: Fibonacci Extension + mô hình nến Nhật"/>
                        </Link>
                        <Link href="#5" title="5. Tổng Kết Fibonacci"/>
                    </Anchor>
                </div>
                <div className="col-9">
                    <h2 id="1">1. Fibonacci Extension là gì?</h2>
                    <p>Bạn đã học cách sử dụng để <a href="https://sinvest.vn/huong-dan-su-dung-fibonacci-retracement/">Fibonacci Retracement</a> để tìm điểm vào lệnh tối ưu trong xu hướng điều chỉnh.</p>
                    <p>Ở bài này chúng tôi giới thiệu đến bạn một công cụ Fibonacci khác, đó là Fibonacci Extension để tìm điểm chốt lời một cách hợp lý sau khi bạn đã vào lệnh bằng công cụ Fibonacci Retracement.</p>
                    <p>Trong một xu hướng, nếu như bạn sử dụng công cụ Fibonacci Retracement để tìm ĐIỂM DỪNG của XU HƯỚNG ĐIỀU CHỈNH thì công cụ Fibonacci Extension sẽ dùng để tìm ĐIỂM DỪNG của giá khi XU HƯỚNG CHÍNH quay trở lại.</p>
                    <p>Công cụ Fibonacci Retracement để tìm điểm dừng của xu hướng điều chỉnh nên được dùng để tìm ĐIỂM VÀO.</p>
                    <p></p><p>Công cụ Fibonacci Extension để tìm điểm dừng của xu hướng chính nên được dùng để tìm ĐIỂM RA hay ĐIỂM CHỐT LỜI.</p>
                    <p><img loading="lazy" class="aligncenter size-full wp-image-17486" src="https://sinvest.vn/wp-content/uploads/fibonacci-extension-la-gi.png" alt="Fibonacci Extension là gì?" width="1233" height="720"/></p><p></p>
                    <img src="https://sinvest.vn/wp-content/uploads/2019/09/fibonacci-extension-1-min.png" alt="" class="wp-image-12152"/>
                    <h2 id="2" class="ftwp-heading">2. Các mức Fibonacci Extension</h2>
                    <p>Các mức mặc định của thước đo Fibonacci Extension là: 0, 0.236, 0.382, 0.5, 0.618, 0.764, 1, 1.236, 1.618, 2.618, 3.618 và 4.618.</p>
                    <p>Các mức chốt lời tiềm năng là từ <strong>0.618 đến 1.618</strong>.</p>
                    <p>Các mức dưới 0.618 có biên độ lợi nhuận khá thấp. Tỷ lệ Risk:Reward không được tốt sẽ làm bạn bất lợi về lâu dài.</p>
                    <p>Các mức trên 1.618 thường rất khó để giá đạt được, chỉ những xu hướng rất dài mới có thể chốt lời ở các mức này.</p>
                    <h2 id="3" class="ftwp-heading">3. Cách vẽ Fibonacci Extension</h2>
                    <p>Để vẽ Fibonacci Extension cần có 3 điểm:</p>
                    <ul><li>1 là điểm đầu đoạn xu hướng</li><li>2 là điểm cuối đoạn xu hướng</li><li>3 là điểm đảo chiều của nhịp điều chỉnh</li></ul>
                    <p>Trong xu hướng tăng, chúng ta cần 2 đáy và 1 đỉnh như trên hình mẫu.</p>
                    <p>Trong xu hướng giảm, chúng ta cần 2 đỉnh và 1 đáy.</p>
                    <p>Cách vẽ: Kéo thước đo Fibonacci Extension từ điểm 1 đến điểm 2 và cuối cùng là điểm 3 (như hình).</p>
                    <p class="has-very-light-gray-background-color has-background">Lưu ý: Công cụ Fibonacci Extension đo các mức giá (theo chiều ngang) nên trên hình mẫu chúng tôi lấy điểm thứ 3 dịch sang 1 bên để bạn dễ quan sát, ý nghĩa là như nhau.</p>
                    <h2 id="4" class="ftwp-heading">4. Cách đặt chốt lời bằng Fibonacci Extension</h2>
                    <p>Cũng như Fibonacci Retracement, có nhiều mức Fibonacci và chúng ta cần biết mức Fibonacci Extension nào sẽ là nơi chốt lời hợp lý để tối ưu lợi nhuận.</p>
                    <p>Và chúng ta đã thống nhất việc sử dụng công cụ Fibonacci một cách độc lập là không mang lại hiệu quả cao nhất.</p>
                    <p>Trong khi chúng ta đều là những người thông minh với hàng loạt vũ khí trong tay phải không?</p>
                    <p>Chúng tôi sẽ đưa ra 3 cách chọn mức Fibonacci Extension tiềm năng nhất để chốt lời, đó là:</p>
                    <ul><li>Cách 1: Kết hợp Fibonacci Extension với hỗ trợ và kháng cự.</li><li>Cách 2: Kết hợp Fibonacci Extension với kênh giá.</li><li>Cách 3: Kết hợp Fibonacci Extension với nến Nhật.</li></ul>
                    <h2 id="4.1" class="ftwp-heading">4.1. Cách 1: Fibonacci Extension + hỗ trợ và kháng cự</h2>
                    <h4 id="h-c-s-ph-ng-ph-p">Cơ sở phương pháp</h4>
                    <p>Sau khi bạn xác định được 3 điểm để vẽ Fibonacci Extension, bạn có thể thấy các mức chốt lời tiềm năng.</p>
                    <p>Bạn hãy chú ý những <a href="https://sinvest.vn/ho-tro-va-khang-cu-la-gi/">hỗ trợ và kháng cự</a> gần giá hiện tại và vẽ chúng ra.</p>
                    <blockquote class="wp-block-quote"><p>Những mức Fibonacci Extension nằm ngay vùng hỗ trợ và kháng cự sẽ là điểm chốt lời lý tưởng hơn những mức khác.</p></blockquote>
                    <p>Giả sử trong một xu hướng tăng, bạn đã vào lệnh BUY bằng công cụ Fibonacci Retracement.</p>
                    <p>Khi giá tăng theo xu hướng và gặp một ngưỡng kháng cự mạnh thì thường giá sẽ có phản ứng ban đầu là giảm với kháng cự đó.</p>
                    <p>Nếu bạn may mắn thì giá sẽ chỉ phản ứng giảm nhẹ rồi phá kháng cự để tiếp tục xu hướng tăng.</p>



                    <p>Nhưng nếu bạn không gặp may thì giá có thể đảo chiều tại kháng cự đó luôn và bạn mất sạch lợi nhuận đã có rồi tự nhủ “giá như chốt lãi tại kháng cự đó thì ngon rồi”.</p>



                    <p>Cho dù xu hướng có tiếp tục lên hay không thì sự phản ứng hầu như luôn có. Vậy nên chốt lãi tại ngưỡng hỗ trợ và kháng cự mạnh luôn là lựa chọn KHÔNG SAI.</p>



                    <p class="has-very-light-gray-background-color has-background">Cụ thể hơn, có 2 mức chốt lời theo Fibonacci Extension mà chúng tôi khuyên bạn nên chú ý: 1. Mức Fibonacci Extension ở ngay gần vùng hỗ trợ/kháng cự của đáy/đỉnh 2.<br></br>2. Mức Fibonacci Extension ở vùng hỗ trợ/kháng cự tiếp theo khi giá phá đáy/đỉnh 2.</p>



                    <p>Để rõ ràng hơn, chúng ta sẽ đi vào ví dụ thực tế cách đặt chốt lời với Fibonacci Extension.</p>



                    <h4 id="h-v-d-th-c-t">Ví dụ thực tế</h4>



                    <p></p><p><strong>Ví dụ 1: Cặp USDJPY khung D1</strong></p>
                    <p><img loading="lazy" class="aligncenter size-full wp-image-17488" src="https://sinvest.vn/wp-content/uploads/fibonacci-extension-la-gi-1.png" alt="Fibonacci Extension là gì?" width="1265" height="725"/></p><p></p>



                    <img src="https://sinvest.vn/wp-content/uploads/2019/09/image-62-min.png" alt="" class="wp-image-12153"/>



                    <p>Ở ví dụ này ta thấy các mức đặt chốt lời hợp lý là:</p>



                    <ol><li>Mức Fibonacci Extension 0.618 ở hỗ trợ của đáy 2.</li><li>Mức Fibonacci Extension 1.618 ở hỗ trợ mạnh của đáy phía trước (trên hình).</li></ol>



                    <p>Nếu bạn chọn mức chốt lời theo cách đầu tiên, có thể bạn sẽ tiếc khi giá chạy đến mức 1.618.</p>



                    <p>Tuy nhiên nếu bạn quyết định đặt chốt lời theo cách 2, thị trường có thể đảo chiều trước khi đến điểm chốt lời của bạn.</p>



                    <p>Lời khuyên: Bạn có thể chọn giữa 2 cách hoặc bạn có thể chốt lời một nửa volume khi giá chạm mức chốt lời theo cách 1 và nuôi một nửa volume đến mức chốt lời theo cách 2.</p>



                    <p></p><p><strong>Ví dụ 2: Cặp EUR/USD khung D1</strong></p>
                    <p><img loading="lazy" class="aligncenter size-full wp-image-17489" src="https://sinvest.vn/wp-content/uploads/fibonacci-extension-la-gi-2.png" alt="Fibonacci Extension là gì?" width="1327" height="727"/></p><p></p>



                    <figure class="wp-block-image"><img src="https://sinvest.vn/wp-content/uploads/2019/09/ví-dụ-2-fibonacci-extension-1-min.png" alt="" class="wp-image-12154"/></figure>



                    <p>Ở ví dụ này ta thấy các mức đặt chốt lời hợp lý là:</p>



                    <ol><li>Mức Fibonacci Extension 0.618 ở kháng cự của đỉnh 2.</li><li>Mức Fibonacci Extension 0.764 ở kháng cự mạnh (trên hình).</li></ol>



                    <p>Vì bạn phải lựa chọn 1 trong 2 cách chốt lời như trên nhưng 2 mức này khá gần nhau nên bạn có thể lựa chọn cách 1 để an toàn hơn.</p>



                    <p>Cho dù thực tế xu hướng cặp EUR/USD khung D1 tiến đến mức Fibonacci Extension 1.618 nhưng bạn cũng đã thấy vùng kháng cự mạnh tại mức 0.764 đã làm tốt công việc như thế nào.</p>



                    <p></p><p>Nếu bạn đặt chốt lời tại mức Fibonacci Extension 0.764 thì bạn còn có thể vào thêm lệnh BUY nữa khi giá giảm về mức 0.236 ngay hỗ trợ từ trend line (như hình dưới). Lợi nhuận của bạn sẽ được tối ưu rất tốt.</p>
                    <p><img loading="lazy" class="aligncenter size-full wp-image-17490" src="https://sinvest.vn/wp-content/uploads/fibonacci-extension-la-gi-3.png" alt="Fibonacci Extension là gì?" width="1314" height="723"/></p><p></p>



                    <figure class="wp-block-image"><img src="https://sinvest.vn/wp-content/uploads/2019/09/image-61-min.png" alt="" class="wp-image-12155"/></figure>



                    <p>Sorry bạn đây là bài học về cách CHỐT LỜI chứ không phải bài học về cách VÀO LỆNH nên tôi sẽ không đi vào chi tiết.</p>



                    <p>Chúng ta tiếp tục …</p>



                    <h2 id="4.2" class="ftwp-heading">4.2. Cách 2: Fibonacci Extension + kênh giá</h2>



                    <p>Với phần này, chúng tôi muốn đưa ví dụ trước – giải thích sau để bạn tiếp thu thuận lợi hơn.</p>



                    <p></p><p>Ví dụ: Cặp USD/CAD khung D1.</p>
                    <p><img loading="lazy" class="aligncenter size-full wp-image-17491" src="https://sinvest.vn/wp-content/uploads/fibonacci-extension-la-gi-4.png" alt="Fibonacci Extension là gì?" width="1306" height="726"/></p><p></p>



                    <figure class="wp-block-image"><img src="https://sinvest.vn/wp-content/uploads/2019/09/image-64-min.png" alt="" class="wp-image-12156"/></figure>



                    <p>Trong ví dụ này, bạn có thể chốt lời theo cách 1 ở mức Fibonacci Extension 0.764 hoặc chốt lời theo cách 2 ở mức Fibonacci Extension 1.0 (đây là nơi giá chạm uptrend line của <a href="https://sinvest.vn/kenh-gia-la-gi/">kênh giá</a> tăng).</p>



                    <p>Chắc hẳn xem ví dụ trên bạn cũng hiểu “sơ sơ” cách 2 rồi đúng không?</p>



                    <p>Mặc dù chúng tôi đã có thể dừng cách 2 ở đây để tiết kiệm thời gian và làm việc khác. Nhưng chúng tôi muốn truyền đạt kiến thức cho bạn một cách CHI TIẾT nhất có thể.</p>



                    <p>Vì chúng tôi biết rằng nếu chúng tôi hướng dẫn chi tiết bao nhiêu, bạn sẽ bớt đổ mồ hôi và tiền bạc trên thị trường Forex khốc liệt này bấy nhiêu.</p>



                    <h4 id="h-c-s-ph-ng-ph-p-1">Cơ sở phương pháp</h4>



                    <p>Bạn còn nhớ cách vẽ và sử dụng kênh giá trong giao dịch không? Nếu bạn đang mơ hồ về kênh giá, có thể xem lại đầy đủ về kênh giá <a href="https://sinvest.vn/kenh-gia-la-gi/">tại đây</a>.</p>



                    <p class="has-very-light-gray-background-color has-background">Chúng tôi sẽ nhắc lại một số nội dung để phục vụ bài học này:<br></br>1. Kênh giá bao gồm 2 đường trend line song song, trend line nằm trên là uptrend line, trend line nằm dưới là downtrend line.<br></br>2. Kênh giá bao trọn phần lớn của giá trong một xu hướng.<br></br>3. Trong một thị trường có xu hướng, kênh giá có thể sử dụng để vào lệnh và cả chốt lời.</p>



                    <p>Theo lý thuyết bạn có thể SELL khi giá chạm uptrend line, chốt lời ở downtrend line. Và ngược lại BUY khi giá chạm downtrend line, chốt lời ở uptrend line.</p>



                    <p>Tuy nhiên trên thực tế chúng tôi khuyên bạn:</p>



                    <ul><li>Trong xu hướng LÊN với kênh giá TĂNG, uptrend line chỉ dùng để CHỐT LỜI LỆNH BUY chứ không dùng để vào lệnh SELL (ngược xu hướng).</li><li>Trong xu hướng XUỐNG với kênh giá GIẢM, downtrend line chỉ dùng để CHỐT LỜI LỆNH SELL chứ không dùng để vào lệnh BUY (ngược xu hướng).</li></ul>



                    <p class="has-very-light-gray-background-color has-background">Mức Fibonacci Extension tại vùng hỗ trợ và kháng cự của kênh giá sẽ là điểm chốt lời lý tưởng hơn những mức khác.</p>



                    <h4 id="h-v-d-th-c-t-1">Ví dụ thực tế</h4>



                    <p></p><p><strong>Ví dụ 1: Cặp USD/JPY khung D1.</strong></p>
                    <p><img loading="lazy" class="aligncenter size-full wp-image-17492" src="https://sinvest.vn/wp-content/uploads/fibonacci-extension-la-gi-5.png" alt="Fibonacci Extension là gì?" width="1302" height="714"/></p><p></p>



                    <figure class="wp-block-image"><img src="https://sinvest.vn/wp-content/uploads/2019/09/image-63-min.png" alt="" class="wp-image-12157"/></figure>



                    <p>Ở ví dụ này, theo cách kết hợp Fibonacci Extension và kênh giá thì mức Fibonacci Extension 1.0 là điểm chốt lời hợp lý.</p>



                    <p>Lưu ý:</p>



                    <p>Khi thị trường tạo đỉnh 3, bạn vẽ được kênh giá với uptrend line nối đỉnh 1 và đỉnh 3.</p>



                    <p>Tuy nhiên khi thị trường lên xuống biên độ nhỏ tạo đỉnh A và đỉnh B nằm ngoài kênh giá thì bạn cần ĐIỀU CHỈNH kênh giá cho hợp lý (như hình).</p>



                    <p></p><p><strong>Ví dụ 2: Cặp EUR/AUD khung D1.</strong></p>
                    <p><img loading="lazy" class="aligncenter size-full wp-image-17493" src="https://sinvest.vn/wp-content/uploads/fibonacci-extension-la-gi-6.png" alt="Fibonacci Extension là gì?" width="1338" height="728"/></p><p></p>



                    <figure class="wp-block-image"><img src="https://sinvest.vn/wp-content/uploads/2019/09/image-65-min.png" alt="" class="wp-image-12158"/></figure>



                    <p>Ở ví dụ này, điểm chốt lời hợp lý là mức Fibonacci Extension 1.0, nơi có kháng cự từ kênh giá.</p>



                    <p>Tiếp theo hãy đến với cách cuối cùng.</p>



                    <h2 id="4.3" class="ftwp-heading">4.3. Cách 3: Fibonacci Extension + mô hình nến Nhật</h2>



                    <h4 id="h-c-s-ph-ng-ph-p-2">Cơ sở phương pháp</h4>



                    <p>Hoàn toàn tương tự như cách kết hợp <a href="https://sinvest.vn/huong-dan-su-dung-fibonacci-retracement/">Fibonacci Retracement</a> và <a href="https://sinvest.vn/nen-nhat/">mô hình nến Nhật</a> để tìm điểm vào lệnh.</p>



                    <p>Bạn sẽ sử dụng <a href="https://sinvest.vn/mo-hinh-nen-dao-chieu-tang/">mô hình nến đảo chiều</a> cùng với Fibonacci Extension để tìm điểm chốt lời tối ưu.</p>



                    <p>Khi lực mua hoặc bán của xu hướng chính yếu dần theo hành động giá thể hiện qua cấu tạo mô hình nến Nhật, đó là cơ sở về thời điểm giá kết thúc xu hướng chính và đảo chiều.</p>



                    <h4 id="h-v-d-th-c-t-2">Ví dụ thực tế</h4>



                    <p></p><p><strong>Ví dụ 1: Cặp AUD/CHF khung W1</strong></p>
                    <p><img loading="lazy" class="aligncenter size-full wp-image-17495" src="https://sinvest.vn/wp-content/uploads/fibonacci-extension-la-gi-7.png" alt="Fibonacci Extension là gì?" width="1327" height="728"/></p><p></p>



                    <figure class="wp-block-image"><img src="https://sinvest.vn/wp-content/uploads/2019/09/image-66-min.png" alt="" class="wp-image-12160"/></figure>



                    <p>Sau khi thị trường có phiên giảm cực kỳ mạnh với cây nến giảm rất dài, bạn sử dụng Fibonacci Retracement để tìm điểm vào.</p>



                    <p>Giá giảm đến mức Fibonacci Extension 0.764 rồi quay đầu, đóng phiên với cây Doji rất bất lợi cho lệnh SELL của bạn.</p>



                    <p>Sau khi cây Dọi này xuất hiện bạn nên lập tức đóng lệnh giao dịch của mình vì phe mua đã cho thấy áp lực rất mạnh mẽ.</p>



                    <p>Nếu muốn tối ưu thêm một chút lợi nhuận, bạn có thể vào khung giao dịch nhỏ hơn để chốt lệnh khi giá xuống thêm trước khi chính thức đảo chiều.</p>



                    <p></p><p><strong>Ví dụ 2: Cặp AUD/CAD khung D1</strong></p>
                    <p><img loading="lazy" class="aligncenter size-full wp-image-17494" src="https://sinvest.vn/wp-content/uploads/fibonacci-extension-la-gi-8.png" alt="Fibonacci Extension là gì?" width="1281" height="715"/></p><p></p>



                    <figure class="wp-block-image"><img src="https://sinvest.vn/wp-content/uploads/2019/09/image-67-min.png" alt="" class="wp-image-12161"/></figure>



                    <p>Ở ví dụ này khi giá lên gần mức Fibonacci Extension 1.0 thì xuất hiện mô hình nến đảo chiều Evening Star, tại đây bạn nên chốt lời ngay sau khi mô hình nến hoàn thành.</p>



                    <h2 id="5" class="ftwp-heading">5. Tổng Kết Fibonacci</h2>



                    <p>Các công cụ Fibonacci khi hoạt động độc lập thì sẽ không mang lại hiệu quả cao.</p>



                    <p>Vì vậy bạn đã được hướng dẫn kết hợp Fibonacci với các công cụ khác như hỗ trợ và kháng cự, trend line, kênh giá và mô hình nến Nhật.</p>
                    <p>
                        <strong>Các bước giao dịch với Fibonacci:</strong>
                       <p>#1. Đầu tiên bạn cần xác định đúng xu hướng.</p>
                       <p>#2. Tiếp theo bạn sử dụng công cụ Fibonacci Retracement để tìm điểm vào chính xác. </p>
                       <p>Điểm dừng lỗ được đặt ở ngay dưới đáy của đoạn xu hướng tăng hoặc đỉnh của đoạn xu hướng giảm. </p>
                       <p>#3. Với điểm vào lệnh đó, bạn sử dụng công cụ Fibonacci Extension để tìm điểm chốt lời tối ưu.</p>
                    </p> 
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p>bài trước</p>
                    <h2>
                        <a href="/Fibonanci">BÀI 1:FIBONACCI LÀ GÌ</a>
                    </h2>
                </div>
                <div className="col-6">
                    <p>bài trước</p>
                    <h2>
                        <a href="/FiboRetrace">BÀI 2: HƯỚNG DẪN SỬ DỤNG FIBONACCI RETRACEMENT TÌM ĐIỂM VÀO TỐI ƯU</a>
                    </h2>
                </div>
            </div>
        </div>
    )
}
