import React from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;
export default function FiboRetracement() {
    return (
        <div className="container-fluid">
            <h2>BÀI 2: HƯỚNG DẪN SỬ DỤNG FIBONACCI RETRACEMENT TÌM ĐIỂM VÀO TỐI ƯU</h2>
            <div className="row">
                <div className="col-3">
                    <Anchor>
                        <Link href="#Fibo-retrace" title="1. Fibonacci Retracement là gì?" />
                        <Link href="#CacMuc" title="2. Các mức Fibonacci Retracement" />
                        <Link href="#DiemVaoLenh" title="3. Tìm điểm vào lệnh với Fibonacci Retracement">
                            <Link href="#3.1" title="3.1. Cách giao dịch" />
                            <Link href="#3.2" title="3.2. Ví dụ điểm vào trên thực tế" />
                            <Link href="#3.3" title="3.3. Sử dụng công cụ Fibonacci Retracement độc lập không phải lúc nào cũng hiệu quả" />
                        </Link>
                        <Link href="#4" title="4. Cách 1: Fibonacci Retracement + hỗ trợ và kháng cự">
                            <Link href="#4.1" title="4.1. Cơ sở phương pháp" />
                            <Link href="#4.2" title="4.2. Ví dụ thực tế" />
                        </Link>
                        <Link href="#5" title="5. Cách 2: Fibonacci Retracement + trend line">
                            <Link href="#5.1" title="5.1. Cơ sở phương pháp" />
                            <Link href="#5.2" title="5.2. Ví dụ thực tế" />
                        </Link>
                        <Link href="#6" title="6. Cách 3: Fibonacci Retracement + mô hình nến Nhật">
                            <Link href="#6.1" title="6.1. Cơ sở phương pháp" />
                            <Link href="#6.2" title="6.2. Ví dụ thực tế" />
                        </Link>
                        <Link href="#7" title="7. TỔNG KẾT FIBONACCI RETRACEMENT" />
                    </Anchor>
                </div>
                <div className="col-9">
                    <section id="Fibo-retrace">
                        <h2>1. Fibonacci Retracement là gì?</h2>
                        <p>Điều đầu tiên bạn nên biết về công cụ Fibonacci là nó hoạt động tốt nhất khi thị trường ngoại hối đang có xu hướng.</p>
                        <p>Chúng ta đều biết giá không di chuyển theo một đường thẳng, mà thay vào đó là những bước tiến và lùi một cách “ngoằn ngoèo”.</p>
                        <p>Ý tưởng ở đây là khi bạn xác định được một xu hướng lên, bạn không thể cứ “nhảy vào mua” là được. Bạn sẽ cần chờ những thời điểm giá giảm điều chỉnh và “tóm lấy” nó.</p>
                        <p>Fibonacci Retracement là công cụ kỹ thuật đưa ra những “gợi ý” giúp bạn biết đâu là những khu vực đảo chiều tiềm năng khi thị trường trong xu hướng điều chỉnh. Từ đó bạn có thể tham gia thị trường ở mức giá tốt nhất, tối ưu lợi nhuận cao nhất.</p>
                        <img loading="lazy" class="aligncenter size-full wp-image-17465" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" width="1203" height="649"/>
                    </section>
                    <section id="CacMuc">
                        <h2>2. Các mức Fibonacci Retracement</h2>
                        <p>Các mức Fibonacci Retracement mặc định là 0.236, 0.382, 0.5, 0.618, 0.764.</p>
                        <p>Để thấy các mức này bạn cần kéo thước đo từ điểm bắt đầu đến điểm kết thúc của đoạn xu hướng.</p>
                        <p >Với xu hướng tăng: bạn kéo thước đo từ điểm thấp nhất lên đến điểm cao nhất của đoạn xu hướng.</p>
                        <p>Các mức Fibonacci Retracement hiện ra trên biểu đồ chính là các khu vực hỗ trợ tiềm năng. Xu hướng tăng sẽ tiếp diễn mà khi giá tăng điều chỉnh chạm tới một trong các mức hỗ trợ đó.</p>
                        <p >Với xu hướng giảm: bạn kéo thước đo từ điểm cao nhất xuống điểm thấp nhất của đoạn xu hướng.</p>
                        <p>Các mức Fibonacci Retracement hiện ra trên biểu đồ chính là các khu vực kháng cự tiềm năng. Xu hướng giảm sẽ tiếp diễn mà khi giá tăng điều chỉnh chạm tới một trong các mức kháng cự đó.</p>
                        <p><strong>Lưu ý:</strong> Tôi khuyên bạn nên hạn chế vào lệnh ở các mức Fibonacci Retracement thấp là 0.236 và 0.382 vì 2 lý do:</p>
                        <ol><li>Lệnh giao dịch có tỷ lệ Risk:Reward không tốt, về lâu dài sẽ bất lợi cho bạn.</li><li>Theo quan sát thực tế nhiều năm trên thị trường Forex, tôi nhận thấy các mức Fibonacci Retracement mà tại đó giá đảo chiều nhiều nhất là 0.5, 0.618 và 0.764.</li></ol>
                    </section>
                    <section id="DiemVaoLenh">
                        <h2>3. Tìm điểm vào lệnh với Fibonacci Retracement</h2>
                        <h3 id="3.1">3.1. Cách giao dịch</h3>
                        <h4 id="h-b-c-1-x-c-nh-xu-h-ng">Bước 1: Xác định xu hướng</h4>
                        <p>Một số cách xác định xu hướng tôi đã trình bày trong các bài học trước là: Cách Xác Định Xu Hướng Với Trend Line, Cách Xác Định Xu Hướng Với Channel, Cách xác định xu hướng khi sử dụng các đường MA cắt nhau.</p>
                        <p>Khi sử dụng Fibonacci Retracement, nếu bạn xác định nhầm xu hướng – bạn die!</p>
                        <p>Vì vậy điều quan trọng trước khi cứ vẽ bừa vẽ bậy thước đo Fibonacci Retracement trên biểu đồ là XÁC ĐỊNH ĐÚNG XU HƯỚNG. Chỉ có xác định đúng xu hướng thì mới có câu chuyện “vào lệnh khi giá điều chỉnh” đúng không?</p>
                        <p>Nếu chúng ta sử dụng Fibonacci Retracement để canh MUA trong XU HƯỚNG GIẢM, thì bạn có đặt lệnh mua ở mức Fibonacci Retracement nào cũng sẽ thua lỗ.</p>
                        <h4 id="TimDiemLoi">Bước 2: Tìm điểm vào lệnh, đặt dừng lỗ và chốt lời</h4>
                        <p>Sau khi xác định được xu hướng chính, kéo thước đo Fibonacci từ điểm bắt đầu đến điểm kết thúc của đoạn xu hướng. Những mốc Fibonacci Retracement hiện ra trên biểu đồ chính là những khu vực vào lệnh tiềm năng.</p>
                        <p>Dừng lỗ: SL được đặt ở ngay dưới đáy của đoạn xu hướng tăng hoặc đỉnh của đoạn xu hướng giảm.</p>
                        <p>Chốt lời: Với điểm vào lệnh bằng Fibonacci Retracement, bạn sẽ được học cách đặt TP bằng <strong>Fibonacci Extension</strong> ở bài sau.</p>
                        <h3 id="3.2">3.2. Ví dụ điểm vào trên thực tế</h3>
                        <h4 id="h-v-d-1-c-p-euraud-khung-d1">Ví dụ 1: Cặp EURAUD khung D1</h4>
                        <div class="wp-block-image"><figure class="aligncenter"><a href="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-1.png" target="_blank" rel="noopener noreferrer"><img loading="lazy" width="1172" height="690" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-1.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17467"/></a></figure></div>
                        <p>Ở ví dụ này ta thấy sau khi giá đảo chiều bằng 2 phiên tăng rất mạnh áp đảo xu hướng giảm “rù rờ” trước đó, giá đã giảm điều chỉnh về mức 0.618. Nếu bạn đặt lệnh ở mức này thì bạn đã tối ưu được điểm vào của mình một cách tối đa.</p>
                        <h4 id="h-v-d-2-c-p-gbpjpy-khung-h4">Ví dụ 2: Cặp GBPJPY khung H4</h4>
                        <div class="wp-block-image"><figure class="aligncenter"><a href="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-2.png" target="_blank" rel="noopener noreferrer"><img loading="lazy" width="1324" height="709" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-2.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17468"/></a></figure></div>
                        <p>Sau khi giá phá vỡ kênh xu hướng tăng, xu hướng được xác nhận đảo chiều từ xu hướng tăng sang xu hướng giảm. Bạn có thể giao dịch bằng kênh xu hướng đã được học hoặc chờ đợi một nhịp điều chỉnh để áp dụng Fibonacci Retracement như trên hình.</p>
                        <p>Liệu bạn có bao giờ chửi thề “có nhiều mức thế thì biết chọn mức đ** nào mà đặt lệnh?”</p>
                        <p>Đúng vậy.</p>
                        <h3 id="3.3">3.3. Sử dụng công cụ Fibonacci Retracement độc lập không phải lúc nào cũng hiệu quả</h3>
                        <p>Chúng ta xem Fibonacci Retracement như là một công cụ tuyệt vời để tối ưu hóa điểm vào lệnh của mình. Tuy nhiên giống như các công cụ kỹ thuật khác, không phải lúc nào nó cũng hiệu quả, đặc biệt là khi nó hành động riêng lẻ.</p>
                        <p>Đôi khi giá có thể đạt mức 0.5 hoặc 0.618 trước khi quay trở lại xu hướng bạn dự đoán. Đôi khi giá chỉ đạt mức 0.382 là đã quay đầu để tiếp tục xu hướng chính trong khi bạn đang đặt lệnh chờ ở mức 0.764.</p>
                        <p>Nếu dùng công cụ Fibonacci Retracement riêng lẻ, bạn sẽ khó biết được nơi chính xác giá sẽ dừng chân.</p>
                        <p>Giống như việc để Lionel Messi một mình đi bóng qua 5 hậu vệ đối phương rồi đánh bại nốt thủ môn và ghi bàn.</p>
                        <p>Có thể nhiều lần Messi đã làm được, nhưng để mọi chuyện dễ dàng hơn thì Messi cần phối hợp nhịp nhàng với những người đồng đội nữa.</p>
                        <img loading="lazy" class="aligncenter size-full wp-image-17469" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-3.jpg" alt="Hướng dẫn sử dụng Fibonanci Retracement" width="990" height="557"></img>
                        <p>Tương tự như vậy, bạn nên sử dụng công cụ Fibonacci Retracement kết hợp với các công cụ kỹ thuật khác để đạt hiệu quả tốt nhất trong việc tìm điểm vào lệnh.</p>
                        <p>Tôi sẽ đưa ra 3 cách chọn mức Fibonacci Retracement tiềm năng nhất, nơi có xác suất cao nhất là điểm đảo chiều của xu hướng điều chỉnh:</p>
                        <ul><li>Cách 1: Kết hợp Fibonacci Retracement với hỗ trợ và kháng cự.</li><li>Cách 2: Kết hợp Fibonacci Retracement với trend line.</li><li>Cách 3: Kết hợp Fibonacci Retracement với nến Nhật.</li></ul>
                        <p>Đến với cách đầu tiên …</p>
                    </section>
                    <section id="4">
                        <h2 id="4.1">4. Cách 1: Fibonacci Retracement + hỗ trợ và kháng cự</h2>
                        <h3 id="h-4-1-c-s-ph-ng-ph-p" class="ftwp-heading">4.1. Cơ sở phương pháp</h3>
                        <p>Ở bài học về <span ><a href="https://sinvest.vn/ho-tro-va-khang-cu-la-gi/">hỗ trợ và kháng cự</a></span>, bạn đã được biết giá thường sẽ phản ứng ở những vùng hỗ trợ và kháng cự.</p>
                        <p>Ví dụ trong một xu hướng lên, khi giá gặp một ngưỡng kháng cự mạnh thì thường giá sẽ có phản ứng giảm với kháng cự đó. Cho dù xu hướng có tiếp tục lên hay không thì sự phản ứng hầu như luôn có.</p>
                        <p>Vì vậy việc kết hợp hỗ trợ và kháng cự với Fibonacci Retracement là một trong những cách tốt nhất để biết điểm dừng và quay đầu của giá.</p>
                        <p><strong>Những mức Fibonacci Retracement trùng với vùng hỗ trợ và kháng cự sẽ có xác suất là điểm quay đầu của giá cao hơn các mức khác.</strong></p>
                        <p>Lưu ý: Những vùng hỗ trợ và kháng cự mạnh và gần nhất (gần về thời gian, không phải gần về biên độ) sẽ có ý nghĩa nhiều hơn những vùng kháng cự mạnh nhưng ở xa giá hiện tại. Kiểu như là “nước xa không cứu được lửa gần” vậy.</p>
                        <h3 id="4.2" class="ftwp-heading">4.2. Ví dụ thực tế</h3>
                        <h4 id="h-v-d-1-c-p-usdjpy-khung-d1">Ví dụ 1: Cặp USDJPY khung D1</h4>
                        <img loading="lazy" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-4.png" alt="Hướng dẫn sử dụng Fibonanci Retracement"/>
                        <p>Trong xu hướng xuống của cặp USDJPY khung D1, giá điều chỉnh về mức 0.618.</p>
                        <p>0.618 là mức Fibonacci Retracement có kháng cự tạo bởi một vùng đáy ngay gần đó, những mức Fibonacci Retracement khác không có kháng cự gần nào.</p>
                        <p>Vì mốc 0.618 có nhiều lợi thế hơn những mốc khác nên xác suất cao giá sẽ quay đầu tại mốc 0.618.</p>
                        <p>Bạn cứ tưởng tượng câu chuyện có 5 thằng bạn cùng thích 1 bạn gái trong lớp. Cả 5 thằng chẳng thằng nào nổi trội hơn thằng nào, đều học hành bình thường, đẹp trai bình thường. Cuối cùng bạn gái chọn thằng X vì nhà thằng X to hơn mấy thằng kia.</p>
                        <p>Ở ví dụ trên cũng thế. Có thể nói xác suất giá dừng tại các mức Fibonacci Retracement là như nhau nhưng chỉ cần mức nào đó có sự trợ giúp bởi vùng hỗ trợ và kháng cự thì mức đó có xác suất cao hơn. <em>Lưu ý là xác suất cao hơn chứ không phải là xác suất 100%.</em></p>
                        <p>Chúng ta hãy xem xét các ví dụ khác. Ví dụ 2: Cặp USDJPY</p>
                        <img loading="lazy" class="aligncenter size-full wp-image-17471" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-5.png" alt="Hướng dẫn sử dụng Fibonanci Retracement"></img>
                        <p>Ở ví dụ này ta có thể thấy giá lại chọn mức Fibonacci Retracement 0.5 ở ngay vùng kháng cự của đỉnh bên trái để đảo chiều.</p>
                        <p>Nếu phải lựa chọn điểm đặt lệnh SELL hoặc SELL LIMIT thì tôi tin chắc bạn cũng sẽ chọn mức Fibonacci Retracement 0.5 “gửi vàng”.</p>
                        <h4 id="h-v-d-3-c-p-gbpaud-khung-h4">Ví dụ 3: Cặp GBPAUD khung H4</h4>
                        <img loading="lazy" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-6.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17472"></img>
                        <p>Ở ví dụ này bạn có thể thấy mức 0.618 được trợ giúp của một vùng hỗ trợ. Đây là mức Fibonacci Retracement rất đẹp để đặt lệnh BUY hoặc BUY LIMIT.</p>
                        <p>Cũng như ví dụ 2, nếu đặt tất cả các mức Fibonacci Retracement lên bàn cân, chúng ta hoàn toàn đặt niềm tin vào mức 0.618.</p>
                        <p>Tuy nhiên …</p>
                        <p>… kết quả thì bạn đã thấy rồi, giá đã quay đầu sớm tại mức 0.382, bỏ lại khuôn mặt thẫn thờ của phe “chờ mua ở 0.618”.</p>
                        <p>Bạn nên nhớ rằng giao dịch là cuộc chơi xác suất, cho dù xác suất đúng có cao bao nhiêu thì xác suất sai vẫn còn đó và cho bạn một cú tát bất cứ lúc nào.</p>
                        <p>Cách tiếp theo …</p>
                    </section>
                    <section id="5">
                        <h2 class="ftwp-heading">5. Cách 2: Fibonacci Retracement + trend line</h2>
                        <h3 id="5.1" class="ftwp-heading">5.1. Cơ sở phương pháp</h3>
                        <p>Một công cụ kỹ thuật khác hỗ trợ và kháng cự, có thể kết hợp tốt với công cụ thoái lui Fibonacci là&nbsp;<span ><a  href="https://sinvest.vn/trend-line-la-gi/">trend line (hay đường xu hướng)</a><span>.</span></span></p>
                        <p>Công cụ Fibonacci Retracement hoạt động tốt nhất khi thị trường đang có xu hướng và bạn xác định chính xác xu hướng đó.</p>
                        <p>Trend line hỗ trợ bạn đi đúng xu hướng, tránh việc “gãy trend” lúc nào mà không biết vì bạn quá mải mê với Fibonacci Retracement.</p>
                        <p>Vẫn là câu hỏi “tôi nên đặt lệnh tại mức Fibonacci Retracement nào?”.</p>
                        <p>Cách lần này là “bạn hãy đặt lệnh tại mức Fibonacci Retracement có sự hỗ trợ từ đường trend line, đây là điểm có xác suất cao giá sẽ quay đầu và tiếp tục xu hướng”.</p>
                        <p class="has-background"><strong>Lưu ý:</strong> Cũng như các công cụ kỹ thuật khác, trend line có cách vẽ và sử dụng mang tính cá nhân rất cao. Nếu bạn gặp khó khăn gì, hãy bình luận phía dưới, tôi rất vui lòng giúp đỡ bạn.</p>
                        <h3 id="5.2" class="ftwp-heading">5.2. Các ví dụ thực tế</h3>
                        <h4 id="h-v-d-1-c-p-gbpusd-khung-h4">Ví dụ 1: Cặp GBPUSD khung H4</h4>
                        <img loading="lazy" width="1272" height="679" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-7.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17473"></img>
                        <p>Khi bạn nhìn vào cặp GBPUSD trên khung H4, bạn nhận ra rằng xu hướng xuống đã rất rõ ràng và bạn muốn tham gia một lệnh SELL ngắn hạn.</p>
                        <p>Bạn lấy thước Fibonacci Retracement từ trong túi ra và bắt đầu đo các mức tiềm năng mà giá sẽ quay đầu, mong muốn một lệnh giao dịch đúng đắn.</p>
                        <p>Các mức Fibonacci Retracement hiện ra trước mắt nhưng bạn vẫn chưa biết chọn sẽ đặt lệnh ở mức giá nào?</p>
                        <p>Bạn nhận ra xu hướng giảm đã hình thành 2 đỉnh trên biểu đồ đường, bạn quyết định vẽ một đường xu hướng nối 2 đỉnh này.</p>
                        <p>Bạn để yên thước Fibonacci Retracement và đường trend line rồi bắt đầu chờ đợi diễn biến giá.</p>
                        <p>Bạn thấy giá điều chỉnh lên đến mức Fibonacci Retracement 0.5 thì gặp trend line kháng cự. Bạn quyết định vào lệnh SELL tại đây.</p>
                        <p>Kết quả lệnh của bạn đã thành công! Lệnh SELL tại mức Fibonacci Retracement 0.5 là rất chính xác.</p>
                        <p>Nếu bạn để ý thêm thì tại mức 0.5 cũng chính là vùng kháng cự của đáy bên trái nữa. Vậy là mức 0.5 này hội tụ thêm cả 2 yếu tố hỗ trợ điểm SELL là kháng cự của giá và kháng cự của trend line.</p>
                        <h4 id="h-v-d-2-c-p-usdcad-khung-h4">Ví dụ 2: Cặp USDCAD khung H4</h4>
                        <img loading="lazy" width="1306" height="717" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-8.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17474"></img>
                        <p>Khi theo dõi cặp USDCAD trên khung H4, bạn thấy một xu hướng tăng đã hình thành với đáy sau cao hơn đáy trước.</p>
                        <p>Bạn vẽ đường trend line nối 2 đáy và sử dụng thước Fibonacci Retracement để chờ đợi giá điều chỉnh tìm điểm BUY.</p>
                        <p>Kết quả là giá giảm điều chỉnh về đúng mức 0.618, nơi có hỗ trợ mạnh từ đường xu hướng.</p>
                        <p>Nếu bạn đặt lệnh BUY hoặc BUY LIMIT ở mức 0.618 thì bạn đã tối ưu điểm vào cực kỳ tốt.</p>
                        <h4 id="h-v-d-3-c-p-euraud-khung-h1">Ví dụ 3: Cặp EURAUD khung H1</h4>
                        <img loading="lazy" width="1321" height="710" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-9.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17475"></img>
                        <p>Khi theo dõi cặp EURAUD trên khung H1, bạn nhận thấy xu hướng tăng đã kết thúc khi trend line tăng bị phá vỡ.</p>
                        <p>Tại điểm phá vỡ trend line tăng bạn có thể SELL ngay theo cách giao dịch với trend line đã học. Tuy nhiên ở bài học này chúng ta chỉ nói về cách giao dịch với Fibonacci Retracement.</p>
                        <p>Sau khi đặt thước đo Fibonacci Retracement và vẽ trend line giảm nối 2 đỉnh, bạn sẽ chờ đợi hành động giá tăng điều chỉnh để vào lệnh SELL.</p>
                        <p>Khi giá tăng lên chạm mức Fibonacci Retracement 0.5, bạn nhận thấy tại đây có một vùng kháng cự của đáy bên trái nên bạn có thể thực hiện một lệnh SELL tại đây.</p>
                        <p class="has-background" ><em><strong>Lưu ý:</strong> Lúc này giá chưa vượt qua mức 0.5 để lên 0.618 nên lệnh SELL tại mức 0.5 này là rất hợp lý. Chúng ta đang theo dõi diễn biến của giá để quyết định ĐẶT LỆNH HAY KHÔNG và nếu có thì ĐẶT LỆNH Ở ĐÂU.</em></p>
                        <p>Khi giá vượt qua mức 0.5 và tăng lên mức 0.618, bạn nhận thấy tại đây giá gặp kháng cự là đường trend line giảm nên bạn có thể đặt một lệnh SELL nữa.</p>
                        <p>Tóm lại ở ví dụ này bạn có 2 cơ hội vào lệnh hợp lý theo 2 cách giao dịch.</p>
                        <p>Ok, cách cuối cùng …</p>
                    </section>
                    <section id="6">
                        <h2>6. Cách 3: Fibonacci Retracement + mô hình nến Nhật</h2>
                        <h3 id="6.1" class="ftwp-heading">6.1. Cơ sở phương pháp</h3>
                        <p data-wpmeteor-mouseover="true" data-wpmeteor-mouseout="true">Ở các bài trước bạn đã biết việc kết hợp công cụ Fibonacci Retracement với hỗ trợ và kháng cự và trend line để tạo ra chiến lược giao dịch đơn giản nhưng rất tuyệt vời.</p>
                        <p data-wpmeteor-mouseover="true" data-wpmeteor-mouseout="true">Bây giờ bạn sẽ được học về sự kết hợp giữa công cụ Fibonacci Retracement với<span > <a href="https://sinvest.vn/nen-nhat/">mô hình nến Nhật</a></span> mà bạn đã được học ở <strong>Level 2: Phân Tích Kỹ Thuật – Căn Bản</strong>.</p>
                        <p>Khi kết hợp công cụ Fibonacci Retracement với các mô hình nến, tôi muốn nói đến chính xác <strong>các mô hình nến đảo chiều</strong>.</p>
                        <p>Khi lực mua hoặc bán của xu hướng điều chỉnh hết theo hành động giá thể hiện qua cấu tạo mô hình nến Nhật, đó là cơ sở về thời điểm giá kết thúc điều chỉnh và tiếp tục xu hướng ban đầu.</p>
                        <h3 id="h-6-2-v-d-th-c-t" class="ftwp-heading">6.2. Ví dụ thực tế</h3>
                        <h4 id="h-v-d-1-c-p-gbpjpy-tr-n-khung-d1">Ví dụ 1: Cặp GBPJPY trên khung D1</h4>
                        <img loading="lazy" width="1297" height="733" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-10.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17476"></img>
                        <p>Trong ví dụ này ta thấy ở mức Fibonacci Retracement 0.764 có xuất hiện mô hình nến đảo chiều Shooting Star, đây là sự khẳng định đảo chiều rất rõ ràng.</p>
                        <h4 id="h-v-d-2-c-p-audusd-khung-d1">Ví dụ 2: Cặp AUDUSD khung D1</h4>
                        <img loading="lazy" width="1289" height="710" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-11.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17477"></img>
                        <p>Ví dụ này tại mức Fibonacci Retracement 0.382 xuất hiện mô hình nến Evening Star với nến Doji ở giữa. Đây là một tín hiệu đảo chiều cực kỳ đẹp.</p>
                        <h4 id="h-v-d-3-c-p-gbpjpy-tr-n-khung-d1">Ví dụ 3: Cặp GBPJPY trên khung D1</h4>
                        <img loading="lazy" width="1335" height="734" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-12.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17478"></img>
                        <p>Trong ví dụ này ta thấy mức Fibonacci Retracement 0.764 có xuất hiện mô hình nến đảo chiều Bullish Engulfing.</p>
                        <h4 id="h-v-d-4-c-p-usdcad-khung-d1">Ví dụ 4: Cặp USDCAD khung D1</h4>
                        <img loading="lazy" width="1284" height="705" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-13.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17479"></img>
                        <p>Ví dụ này ta thấy trong xu hướng giảm điều chỉnh xuất hiện mô hình nến Morning Star với nến Doji quét qua mức Fibonacci Retracement 0.618. Đây là tín hiệu đảo chiều rất tốt.</p>
                        <h4 id="h-v-d-5-c-p-eurusd-khung-d1">Ví dụ 5: Cặp EURUSD khung D1</h4>
                        <img loading="lazy" width="1290" height="729" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-14.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17480"></img>
                        <p>Trong xu hướng giảm điều chỉnh, giá test mức Fibonacci Retracement đến 3 lần thì mới xuất hiện tín hiệu đảo chiều đẹp đó là mô hình nến Bullish Engulfing.</p>
                        <h4 id="h-v-d-6-c-p-gbpusd-tr-n-khung-d1">Ví dụ 6: Cặp GBPUSD trên khung D1</h4>
                        <img loading="lazy" width="1306" height="730" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-15.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" class="wp-image-17481"></img>
                        <p>Trong xu hướng điều chỉnh tăng, xuất hiện mô hình nến Shooting Star tại mức Fibonacci Retracement 0.5, thậm chí đuôi nến quét lên gần mức 0.618. Đây chính là điểm vào rất thuận lợi.</p>
                        <p>Một số mô hình nến đảo chiều nữa chưa được nhắc đến trong các ví dụ nhưng tôi sẽ dừng tại đây vì đó không phải là điều quan trọng.</p>
                        <p>Điều quan trọng ở đây là bạn đã biết Fibonacci Retracement CÓ THỂ KẾT HỢP ĐƯỢC với các mô hình nến đảo chiều để tìm điểm vào tối ưu.</p>                       
                    </section>
                    <section id="7">
                    <h2 class="ftwp-heading">7. TỔNG KẾT FIBONACCI RETRACEMENT</h2>
                    <p>Hãy để tôi tổng kết lại cho bạn về cách sử dụng công cụ Fibonacci Retracement để tìm điểm giá quay đầu trong XU HƯỚNG ĐIỀU CHỈNH.</p>
                    <p>Bạn đã biết công cụ Fibonacci Retracement có thể <strong>tự do hành động</strong> hoặc <strong>có thể kết hợp</strong> với các công cụ kỹ thuật khác, cụ thể là <strong>hỗ trợ và kháng cự</strong>, <strong>trend line</strong> và <strong>mô hình nến Nhật</strong>.</p>
                    <p>Tôi đưa ra lời khuyên cụ thể và rõ ràng ngay bây giờ, đó là: bạn nên <strong>kết hợp đồng thời 3 công cụ</strong>: Fibonacci Retracement + hỗ trợ và kháng cự + mô hình nến Nhật để tìm điểm đảo chiều tối ưu nhất.</p>
                    <p>Tức là tại mức Fibonacci Retracement có hỗ trợ, kháng cự và mô hình nến đảo chiều thì xác suất chiến thắng của lệnh giao dịch tại đó sẽ cao hơn rất rất nhiều.</p>
                    <p>Còn trend line ư?</p>
                    <p>Vì việc vẽ trend line là cả một nghệ thuật chứ không đơn thuần là nối các đỉnh và đáy lại với nhau. Còn các công cụ kia có thể kết hợp một cách hơi máy móc một chút cũng không sao.</p>
                    <p>Trở lại với việc kết hợp Fibonacci Retracement + hỗ trợ và kháng cự + mô hình nến Nhật để tìm điểm đảo chiều tối ưu nhất, tôi sẽ cho bạn xem một ví dụ.</p>
                    <p>Cặp tiền USDJPY trên khung D1.</p>
                    <img loading="lazy" class="aligncenter size-full wp-image-17482" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-16.png" alt="Hướng dẫn sử dụng Fibonanci Retracement" width="1329" height="729"></img>
                    <p>Sau khi bạn xác định xu hướng hiện tại là giảm và chờ sự tăng điều chỉnh để thực hiện lệnh SELL.</p>
                    <p>Tại mức 0.382 xuất hiện mô hình nến Bearish Engulfing nhưng giá vẫn tiếp tục tăng lên các mức Fibonacci Retracement cao hơn.</p>
                    <p>Và khi lên đến mức 0.618, thị trường lại xuất hiện mô hình nến Bearish Engulfing một lần nữa.</p>
                    <p>Tuy nhiên lần này với sự giúp sức của kháng cự mạnh từ đỉnh bên trái thì bộ ba Fibonacci Retracement + hỗ trợ và kháng cự + mô hình nến đảo chiều đã tỏ ra sức mạnh vượt trội.</p>
                    <p>Giống như sức mạnh khuynh đảo giải Ngoại Hạng Anh mùa giải 2018/2019 của bộ ba này:</p>
                    <p><img loading="lazy" class="aligncenter size-full wp-image-17483" src="https://sinvest.vn/wp-content/uploads/huong-dan-su-dung-fibonanci-retracement-17.jpg" alt="Hướng dẫn sử dụng Fibonanci Retracement" width="650" height="336"/></p>
                    <p>Hãy học tiếp bài học tiếp theo về <a href="">cách&nbsp;tìm điểm chốt lời tối ưu với Fibonacci Extension</a>&nbsp;để “kết thúc việc vào lệnh” dang dở mà Fibonacci Retracement đã để lại.</p>
                    </section>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p>bài trước</p>
                    <h2>
                        <a href="/Fibonanci">BÀI 1:FIBONACCI LÀ GÌ?</a>
                    </h2>
                </div>
                <div className="col-6">
                    <p>bài tiếp theo</p>
                    <h2>
                        <a href="/FiboExtention">BÀI 3: HƯỚNG DẪN SỬ DỤNG FIBONACCI EXTENSION ĐỂ CHỐT LỜI HIỆU QUẢ</a>
                    </h2>
                </div>
            </div>
        </div>
    )
}
