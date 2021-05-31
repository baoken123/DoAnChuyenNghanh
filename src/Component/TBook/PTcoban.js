import React, { Component } from 'react'

export default class PTcoban extends Component {
    render() {
        return (
            <div className="container">
                <h2>Hướng dẫn phân tích cơ bản trong chứng khoán</h2>
                <br></br>
                <p>Phương pháp <b> phân tích cơ bản trong đầu tư chứng khoán </b>là một kỹ thuật dùng để xác định giá trị thực của một chứng khoán bằng cách tập trung vào các yếu tố cơ bản có ảnh hưởng đến hoạt động kinh doan hiện tại và triển vọng phát triển trong tương lai của công ty.</p>
                <p>Trên một phương diện rộng hơn, chúng ta có thể tiến hành phân tích cơ bản để phân tích tổng quan về ngành kinh doanh hoặc nền kinh tế nói chung. Một cách đơn giản, phân tích cơ bản thiên về phân tích tài chính lành mạnh về mặt kinh tế của một thực thể tài chính hơn là phân tích sự giao động về giá của chứng khoán.</p>
                <img className="align-center" src="https://chungkhoanonline.vn/wp-content/uploads/2017/10/phan-tich-chung-khoan.jpg"></img>
                <p>Trong bài viết này, mình sẽ tổng hợp lại các chỉ số tài chính quan trọng khi đầu tư cổ phiếu nhằm cung cấp cho các bạn những kiến thức cơ bản nhất về phương pháp phân tích này.</p>
                <p><b>1. Tỷ số thanh toán hiện hành (Current ratio)</b></p>
                <p><b>Định nghĩa: </b>Cho biết khả năng của một công ty trong việc dùng các tài sản ngắn hạn như tiền mặt, hàng tồn kho hay các khoản phải thu để chi trả cho các khoản nợ ngắn hạn của mình.</p>
                <p>Nếu tỷ số này nhỏ hơn 1 tức là công ty không có đủ khả năng trả hết các khoản nợ trong ngắn hạn.  Tỷ số này phải nằm trong khoảng từ 1-2 thể hiện được khả năng thanh toán hiện hành của doanh nghiệp đảm bảo chi trả các hoản nợ ngắn hạn.</p>
                <p><b>Cách tính:</b>Tỷ số thanh toán hiện hành = (Tài sản ngắn hạn)/(Nợ ngắn hạn)</p>
                <p><em>Ví dụ: </em>Theo BCTC Quý 2/2017 của Công ty Cổ phần Tập đoàn Hòa Phát (mã CK: HPG)</p>
                <ul>
                    <li>Tài sản ngắn hạn là 1.026.563.489.032</li>
                    <li>Nợ ngắn hạn là 575.215.125.577</li>
                </ul>
                <p>Tỷ số thanh toán hiện hành= 1.026.563.489.032/575.215.125.577=1,785</p>
                <p>Nhận định: Công ty có đủ khả năng chi trả các khoản nợ ngắn hạn bằng tài sản ngắn hạn.</p>
                <p><b>2. Tỷ số thanh toán nhanh (Quick ratio)</b></p>
                <p><b>Định nghĩa: </b>Tỷ số thanh toán nhanh cho biết liệu công ty có đủ các tài sản ngắn hạn có tính thanh khoản cao để trả cho các khoản nợ ngắn hạn. Tài sản ngắn hạn thanh khoản cao là tài sản ngắn hạn có thể chuyển thành tiền mặt ngay, bao gồm: Tiền và các khoản tương đương, các khoản phải thu ngắn hạn, các khoản đầu tư ngắn hạn.</p>
                <p>Tỷ số này thường lớn hơn 0,5 là chấp nhận được.</p>
                <p><b><em>Định nghĩa/Cách xác định:</em></b></p>
                <p>Tỷ số thanh toán nhanh = (Tài sản lưu động – Giá trị hàng tồn kho)/(Nợ ngắn hạn).</p>
                <p>Tài sản lưu động – Giá trị hàng tồn kho = Tiền và các khoản tương đương tiền + Các khoản phải thu + Các khoản đầu tư ngắn hạn</p>
                <p>Ví dụ: Theo BCTC quý 2/2017 của Công ty cổ phần Tập đoàn Hòa Phát:</p>
                <ul>
                    <li>Tài sản ngắn hạn là 1.026.563.489.032</li>
                    <li>Giá trị hàng tồn kho là 815.151.607</li>
                    <li>Nợ ngắn hạn là 575.215.125.577</li>
                </ul>
                <p>Khi đó tỷ số thanh toán nhanh = (1.026.563.489.032 – 815.151.607)/575.215.125.577=1,783</p>
                <p>Nhận định: ông ty này có đủ tài sản ngắn hạn để trả cho các khoản nợ ngắn hạn mà không cần phải bán hàng tồn kho.</p>
                <p><b>3. Thu nhập trên cổ phần (EPS)</b></p>
                <p><b> Ý nghĩa: </b>EPS cho biết nhà đầu tư được hưởng lợi nhuận trên mỗi cổ phần họ đang nắm giữ hàng năm là bao nhiêu. Chỉ số này càng cao thì càng được đánh giá tốt vì khi đó khoản thu nhập trên mỗi cổ phiếu sẽ cao hơn.</p>
                <p><em> Định nghĩa/Cách xác định:</em></p>
                <p>EPS = (Lợi nhuận sau thuế – Cổ tức của cổ phiếu ưu đãi) / (KLCP lưu hành bình quân trong kỳ)</p>
                <p>Ví dụ: EPS của mã HPG năm 2016 là 7,16 tức là nhà đầu tư được hưởng 7.160 đồng/1 cổ phần mà họ đang nắm giữ khi đầu tư vào mã HPG năm 2016.</p>
                <p><b>4. P/E</b></p>
                <p><b><em> Ý nghĩa:</em></b>P/E đo lường mối quan hệ giữa giá thị trường (P) và thu nhập cùa mỗi cổ phiếu. P/E cho thấy giá cổ phiếu hiện tại cao hơn thu nhập từ cổ phiếu đó bao nhiêu lần, hay nhà đầu tư phải trả giá cho một đồng thu nhập bao nhiêu</p>
                <p>Nếu hệ số P/E cao thì điều đó có nghĩa là người đầu tư dự kiến tốc độ tăng cổ tức cao trong tương lai; cổ phiếu có rủi ro thấp nên người đầu tư thoả mãn với tỷ suất vốn hoá thị trường thấp; dự đoán công ty có tốc độ tăng trưởng trung bình và sẽ trả cổ tức cao.</p>
                <p><b> Định nghĩa/Cách xác định: </b>P/E = P / EPS</p>
                <p><b>Ví dụ:</b> P/E của mã HPG năm 2016 là 6,03 tức là giá cổ phiếu tại thời điểm đó cao hơn thu nhập từ cổ phiếu là 6,03 lần.</p>
                <p><b>5. Giá trị sổ sách của 1 cổ phiếu (BVPS/Book Value per Share)</b></p>
                <p><b> Ý nghĩa: </b>BVPS được dùng để xác định giá trị của một cổ phiếu theo số liệu trên sổ sách, một nhà đầu tư thường quan tâm đến chỉ tiêu này để so sánh với giá trị thị trường của cổ phiếu.</p>
                <p><b> Định nghĩa/Cách xác định: </b> BVPS = (Tổng tài sản – Tài sản vô hình – Nợ)/ Số lượng cổ phiếu phát hành</p>
                <p>hay BVPS = (Vốn chủ sở hữu – Tài sản vô hình)/Tổng khối lượng cổ phiếu đang lưu hành</p>
                <p>Vi dụ: BVPS của mã HPG năm 2016 là 23.55 tức là giá trị trên sổ sách của mã HPG năm 2016 là 23.550 đồng/1 cổ phiếu.</p>
                <p><b>6. P/B</b></p>
                <p><b> Ý nghĩa: </b>Nếu chỉ số P/B nhỏ hơn 1 người ta “ nghĩ “ rằng giá thị trường đã nằm dưới giá trị sổ sách của doanh nghiệp (giá trị đích thực của doanh nghiệp).</p>
                <p><b>Định nghĩa/Cách xác định: </b>P/B= Giá thị trường của 1 cổ phiếu/ Giá trị sổ sách của 1 cổ phiếu (BVPS)</p>
                <p><b>7. Tỷ suất sinh lời trên tài sản (ROA)</b></p>
                <p><b> Ý nghĩa: </b>Chỉ tiêu đo lường hiệu quả hoạt động của doanh nghiệp mà không quan tâm đến cấu trúc tài chính.</p>
                <p>Chỉ số này cho biết công ty tạo ra bao nhiêu đồng lợi nhuận từ một đồng tài sản.</p>
                <p><b> Định nghĩa/Cách xác định: </b>ROA = (Tổng LN sau thuế) / (Tổng tài sản)</p>
                <p>Ví dụ: ROA của HPG năm 2016 là 19,87% tức là cứ 1 đồng tài sản của công ty sẽ tạo ra 0,1987 đồng lợi nhuận. ROA của HSG năm 2016 là 12,22%. Từ đó có thể đánh giá Hòa Phát hiệu quả hơn trong việc biến đầu tư thành lợi nhuận so với HSG năm 2016.</p>
                <p><b>8. Tỷ suất sinh lời trên vốn chủ sở hữu (ROE)</b></p>
                <p><b> Ý nghĩa: </b>Cho biết cứ 1 đồng vốn chủ sở thì tạo ra được bao nhiêu đồng lợi nhuận. Tỷ số này phụ thuộc vào thời vụ kinh doanh. Ngoài ra, nó còn phụ thuộc vào quy mô và mức độ rủi ro của công ty. Để so sánh chính xác, cần so sánh tỷ số này của một công ty cổ phần với tỷ số bình quân của toàn ngành, hoặc với tỷ số của công ty tương đương trong cùng ngành.</p>
                <p><b> Định nghĩa/Cách xác định: </b>ROE = (Lợi nhuận sau thuế)/(Vốn chủ sở hữu)</p>
                <p><b>9. Tỷ suất lợi nhuận thuần</b></p>
                <p><b> Ý nghĩa:</b>Chỉ tiêu này cho biết một đồng doanh thu thuần từ bán hàng hóa và cung cấp dịch vụ sẽ tạo ra bao nhiêu đồng lợi nhuận.</p>
                <p>Tỷ suất này càng cao thì hiệu quả hoạt động của doanh nghiệp càng cao.</p>
                <p><b> Định nghĩa/Cách xác định: </b>TSLN thuần = (LN sau thuế) / ( Doanh thu thuần)</p>
                <p><strong>10. Tỷ suất lợi nhuận gộp</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Chỉ tiêu này cho biết một đồng doanh thu thuần từ bán hàng hóa và cung cấp dịch vụ sẽ tạo ra bao nhiêu đồng lợi nhuận nếu không tính đến chi phí tài chính, chi phí bán hàng, chi phí quản lý doanh nghiệp. Chỉ tiêu này sẽ phụ thuộc lớn vào đặc điểm của từng ngành.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>TSLN gộp = (LN gộp) / (Doanh thu thuần) = (Doanh thu thuần – Chi phí vốn hàng bán) / (Doanh thu thuần)</p>
                <p><strong>11. Lợi nhuận biên từ hoạt động kinh doanh</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Chỉ số này cho biết mỗi đồng doanh thu tạo ra bao nhiêu lợi nhuận. Biên sẽ đóng vai trò một vùng đệm giữa doanh thu và chi phí. Về lý thuyết, những doanh nghiệp có biên lợi nhuận cao có thể tồn tại vững vàng trong bối cảnh chi phí leo thang.</p>
                <p>Ngược lại, những doanh nghiệp có biên lợi nhuận thấp chỉ có thể tăng lợi nhuận bằng cách đẩy mạnh doanh thu. Khi gặp đợt gia tăng chi phí, những doanh nghiệp này sẽ rất khó khăn. Như vậy, việc theo dõi biên lợi nhuận theo thời gian không chỉ giúp nhà quản lý chủ động ứng phó với cơ hội và nguy cơ từ thị trường, mà còn giúp nhà đầu tư tránh những nhận định cảm tính để nhận diện được những doanh nghiệp có tiềm lực trong cơn bão giá.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>LN biên từ hoạt đồng kinh doanh = (Lợi nhuận sau thuế)/(Doanh thu)</p>
                <p><strong>12. EPS cơ bản (Earning per share)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Là phần lợi nhuận mà công ty phân bổ cho mỗi cổ phần thông thường đang được lưu hành trên thị trường. EPS được sử dụng như một chỉ số thể hiện khả năng kiếm lợi nhuận của doanh nghiệp. EPS càng cao thì phản ánh năng lực kinh doanh của công ty càng mạnh, khả năng trả cổ tức càng cao và giá cổ phiêu sẽ có xu hướng tăng. Cần chú ý khi công ty thực hiện chia tách cổ phiếu. Ví dụ khi công ty thực hiện chia tách 2:1 thì EPS sẽ giảm 1 nửa.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>EPS = (Thu nhập ròng – Cổ tức của cổ phiếu ưu đãi)/(Số cổ phiếu lưu hành bình quân)</p>
                <p><strong>13. Hệ số nợ</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>– Tổng số nợ ở đây bao gồm nợ ngắn hạn và nợ dài hạn phải trả. Chủ nợ thường thích công ty có tỷ số nợ thấp vì như vậy công ty có khả năng trả nợ cao hơn. Ngược lại, cổ đông muốn có tỷ số nợ cao vì như vậy làm gia tăng khả năng sinh lợi cho cổ đông. Tuy nhiên muốn biết tỷ số này cao hay thấp cần phải so sánh với tỷ số nợ của bình quân ngành.</p>
                <p>– Tỷ số nợ càng thấp thì mức độ bảo vệ dành cho các chủ nợ càng cao trong trường hợp doanh nghiệp rơi vào tình trạng phá sản và phải thanh lý tài sản.</p>
                <p>– Tỷ số nợ phụ thuộc rất nhiều yếu tố: loại hình doanh nghiệp, quy mô của doanh nghiệp, lĩnh vực hoạt động, mục đích vay. Tuy nhiên thông thường, ở mức 60/40 là chấp nhận được. Có nghĩa Hệ số nợ là 60% (Tổng tài sản có 100 thì vốn vay là 60).</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Hệ số nợ = (Tổng nợ)/ (Tổng tài sản)</p>
                <p><strong>14. Tỷ số khả năng trả lãi</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>– Hệ số này cho biết một công ty có khả năng đáp ứng được nghĩa vụ trả nợ lãi của nó đến mức nào. Hệ số thu nhập trả lãi định kỳ càng cao thì khả năng thanh toán lãi của công ty cho các chủ nợ của mình càng lớn. Tỷ lệ trả lãi thấp cho thấy một tình trạng nguy hiểm, suy giảm trong hoạt động kinh tế có thể làm giảm EBIT xuống dưới mức nợ lãi mà công ty phải trả, do đó dẫn tới mất khả năng thanh toán và vỡ nợ.</p>
                <p>– Tỷ số trên nếu lớn hơn 1 thì công ty hoàn toàn có khả năng trả lãi vay. Nếu nhỏ hơn 1 thì chứng tỏ hoặc công ty đã vay quá nhiều so với khả năng của mình, hoặc công ty kinh doanh kém đến mức lợi nhuận thu được không đủ trả lãi vay.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Tỷ số khả năng trả lãi = (Lợi nhuận trước thuế và lãi vay)/ (Chi phí lãi vay)</p>
                <p><strong>15. Tỷ số khả năng trả nợ</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>– Tỷ số này cho biết để chuẩn bị cho mỗi đồng trả nợ gốc và lãi, doanh nghiệp có bao nhiêu đồng có thể sử dụng được.</p>
                <p>– Đây là chỉ tiêu mà các nhà đầu tư vào dự án của doanh nghiệp đặc biệt quan tâm. Nói chung đến thời điểm trả nợ, nếu K &gt; 1 thì có thể nói là khả năng trả nợ củacông ty là khá tốt, về mặt lý thuyết hệ số này càng cao cho thấy khả năng trả nợ của doanh nghiệp các tốt. Tuy nhiên nếu hệ số này cao quá có thể cho thấy thực trạng rằng việc quản lý và luân chuyển vốn lưu động của doanh nghiệp là chưa tốt.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Tỷ số khả năng trả nợ = (GVHB + Khấu hao + EBIT)/ (Nợ gốc + Chi phí lãi vay)</p>
                <p><strong>16. Tỷ suất tự tài trợ</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>– Hệ số này phản ánh tỷ trọng nguồn vốn chủ sở hữu trên tổng tài sản của doanh nghiệp. Để xác định mức độ phù hợp về tỷ lệ vốn chủ sở hữu trong trong nguồn vốn của doanh nghiệp sẽ phụ thuộc rất lớn vào hoạt động và chính sách của từng doanh nghiệp cũng như từng ngành.</p>
                <p>– Tỷ số này cao chứng tỏ khả năng tự chủ tài chính của doanh nghiệp, nhưng cũng cho thấy doanh nghiệp chưa tận dụng đòn bẩy tài chính nhiều.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Tỷ suất tự tài trợ = (Nguồn vốn chủ sở hữu) / (Tổng tài sản)</p>
                <p><strong>17. Tỷ suất tự tài trợ TSCĐ</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>– Tỷ suất tự tài trợ TSCĐ phản ánh tỷ lệ tài sản cố định được đầu tư.</p>
                <p>– Tỷ suất này sẽ cung cấp dòng thông tin cho biết số vốn chủ sở hữu của doanh nghiệp dùng để trang bị TSCĐ và đầu tư dài hạn là bao nhiêu. Tỷ suất này nếu &gt;1 thì chứng tỏ khả năng tài chính vững vàng, lành mạnh. Khi tỷ suất &lt; 1 thì một bộ phận của TSCĐ được tài trợ bằng vốn vay, và đặc biệt mạo hiểm khi đó là vốn vay ngắn hạn.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Tỷ suất tự tài trợ TSCĐ = (Nguồn vốn chủ sở hữu) / (Tổng tài sản cố định)</p>
                <p><strong>18. Hệ số vòng quay hàng tồn kho (Inventory turnover)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Hệ số vòng quay hàng tồn kho thể hiện khả năng quản trị hàng tồn kho. Vòng quay hàng tồn kho là số lần mà hàng hóa tồn kho bình quân luân chuyển trong kỳ.</p>
                <p>Hệ số vòng quay hàng tồn kho thường được so sánh qua các năm để đánh giá năng lực quản trị hàng tồn kho là tốt hay xấu qua từng năm. Hệ số này lớn cho thấy tốc độ quay vòng của hàng hóa trong kho là nhanh và ngược lại, nếu hệ số này nhỏ thì tốc độ quay vòng hàng tồn kho thấp. Cần lưu ý, hàng tồn kho mang đậm tính chất ngành nghề kinh doanh nên không phải cứ mức tồn kho thấp là tốt, mức tồn kho cao là xấu.</p>
                <p>Hệ số vòng quay hàng tồn kho càng cao càng cho thấy doanh nghiệp bán hàng nhanh và hàng tồn kho không bị ứ đọng nhiều. Có nghĩa là doanh nghiệp sẽ ít rủi ro hơn nếu khoản mục hàng tồn kho trong báo cáo tài chính có giá trị giảm qua các năm.</p>
                <p>Tuy nhiên, hệ số này quá cao cũng không tốt, vì như vậy có nghĩa là lượng hàng dự trữ trong kho không nhiều, nếu nhu cầu thị trường tăng đột ngột thì rất có khả năng doanh nghiệp bị mất khách hàng và bị đối thủ cạnh tranh giành thị phần. Hơn nữa, dự trữ nguyên liệu vật liệu đầu vào cho các khâu sản xuất không đủ có thể khiến dây chuyền sản xuất bị ngưng trệ. Vì vậy, hệ số vòng quay hàng tồn kho cần phải đủ lớn để đảm bảo mức độ sản xuất và đáp ứng được nhu cầu khách hàng.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Hệ số quay vòng hàng tồn kho = Doanh thu / Số dư hàng tồn kho cuối kì</p>
                <p>hoặc [=Giá vốn hàng bán/Trung bình hàng tồn kho trong kì]</p>
                <p><strong>19. Hệ số vòng quay các khoản phải thu (Receivable turnover)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>  
                <p>Vòng quay khoản phải thu phản ánh khả năng quản lý các khoản công nợ phải thu của công ty và khả năng thu hồi vốn trên các khoản công nợ đó.</p>
                <p>Chỉ số vòng quay phải thu lớn cho thấy khả năng thu hồi công nợ từ các khách hàng là tốt, và cho thấy công ty có những đối tác làm ăn chất lượng, có khả năng trả nợ nhanh chóng. Tuy nhiên, chỉ số cao cũng phản ánh chính sách bán hàng quá chặt chẽ, có thể gây ảnh hưởng xấu tới doanh số.</p>
                <p>Chỉ số vòng quay phải thu thấp cho thấy khả năng thu hồi tiền từ khách hàng khá kém, chính sách bán hàng lỏng lẻo, hoặc đối tác của công ty đang gặp khó khăn về tài chính.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Vòng quay các khoản phải thu = Doanh thu / bình quân các khoản phải thu</p>
                <p><strong>20. Hệ số vòng quay các khoản phải trả (Payable turnover)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Chỉ số vòng quay các khoản phải trả phản ánh khả năng chiếm dụng vốn của doanh nghiệp đối với nhà cung cấp. Chỉ số vòng quay các khoản phải trả quá thấp có thể ảnh hưởng không tốt đến xếp hạng tín dụng của doanh nghiệp.</p>
                <p>Chỉ số vòng quay các khoản phải trả năm nay nhỏ hơn năm trước chứng tỏ doanh nghiệp chiếm dụng vốn và thanh toán chậm hơn năm trước. Ngược lại, nếu Chỉ số Vòng quay các khoản phải trả năm nay lớn hơn năm trước chứng tỏ doanh nghiệp chiếm dụng vốn và thanh toán nhanh hơn năm trước.</p>
                <p>Nếu chỉ số Vòng quay các khoản phải trả quá nhỏ (các khoản phải trả lớn), sẽ tiềm ẩn rủi ro về khả năng thanh khoản. Tuy nhiên, cũng cần lưu ý việc chiếm dụng khoản vốn này có thể sẽ giúp doanh nghiệp giảm được chi phí về vốn, đồng thời thể hiện uy tín về quan hệ thanh toán đối với nhà cung cấp và chất lượng sản phẩm đối với khách hàng.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Vòng quay các khoản phải trả = Doanh số mua hàng thường niên / Bình quân các khoản phải trả</p>
                <p><strong>21. Kỳ thu tiền bình quân (Days of sales outstanding)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Kỳ thu tiền bình quân cho thấy khoảng thời gian trung bình cần thiết để một công ty thu hồi các khoản nợ từ khách hàng.</p>
                <p>Xem xét xu hướng của kỳ thu tiền bình quân qua các thời kỳ của một công ty là có hiệu quả nhất. Nếu vòng quay các khoản phải thu tăng từ năm này qua năm khác cho thấy khả năng yếu kém trong việc quản lý công nợ ở một công ty.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Kỳ thu tiền bình quân = Phải thu khách hàng x 365 ngày/ Doanh thu bán chịu</p>
                <p>hay =[365/Hệ số vòng quay các khoản phải thu]</p>
                <p><strong>22. Hệ số vòng quay tài sản cố định (Fixed asset turnover)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Chỉ số này giúp đánh giá hiệu quả sử dụng Tài sản cố định(TSCĐ) của doanh nghiệp, cho thấy 1 đồng TSCĐ tham gia vào quá trình sản xuất kinh doanh sẽ tạo ra bao nhiêu đồng doanh thu.</p>
                <p>Chỉ số này càng cao cho thấy hiệu quả sử dụng TSCĐ của doanh nghiệp càng cao và ngược lại.</p>
                <p>TSCĐ trong công thức là số bình quân, tức lấy tổng số dư đầu kỳ cộng với số dư cuối kỳ sau đó chia 2.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Vòng quay Tài sản cố định = Doanh thu thuần/Tài sản cố định bình quân</p>
                <p><strong>23. Hệ số vòng quay tổng tài sản (Asset Turnover Ratio)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Hệ số vòng quay tổng tài sản dùng để đánh giá hiệu quả của việc sử dụng tài sản của công ty. Thông qua hệ số này chúng ta có thể biết được với mỗi một đồng tài sản có bao nhiêu đồng doanh thu được tạo ra.</p>
                <p>Hệ số vòng quay tổng tài sản càng cao đồng nghĩa với việc sử dụng tài sản của công ty vào các hoạt động sản xuất kinh doanh càng hiệu quả.</p>
                <p>Tuy nhiên muốn có kết luận chính xác về mức độ hiệu quả của việc sử dụng tài sản của một công ty chúng ta cần so sánh hệ số vòng quay tài sản của công ty đó với hệ số vòng quay tài sản bình quân của ngành.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Vòng quay tài sản = Doanh thu thuần / Tổng tài sản bình quân</p>
                <p><strong>24. Kỳ chuyển đổi hàng tồn kho (Days of inventory on hand)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Đây là thước đo thể hiện khả năng về mặt tài chính của công ty. Chỉ số này cho các nhà đầu tư biết về khoảng thời gian cần thiết để công ty có thể thanh lý được hết số lượng hàng tồn kho của mình (bao gồm cả hàng hoá còn đang trong quá trình sản xuất). Thông thường nếu chỉ số này ở mức thấp thì có nghĩa là công ty hoạt động khá tốt, tuy nhiên cũng cần phải chú ý rằng chỉ số DSI bình quân là rất khác nhau giữa các ngành. Đôi khi chỉ số này còn được gọi là số ngày lưu thông hàng tồn kho DIO (Days inventory outstanding)</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Kỳ chuyển đổi hàng tồn kho = 365 x Trung bình hàng tồn kho trong kì / Giá vốn hàng bán</p>
                <p>hay = [365 / Vòng quay hàng tồn kho]</p>
                <p><strong>25. Kỳ chuyển đổi các khoản phải thu (Days of Sales Outstanding – DSO)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Đây là một chỉ số được tính bằng số ngày trung bình mà một công ty cần để thu hồi lại tiền bán hàng sau khi đã bán được hàng. Nếu như kỳ chuyển đổi các khoản phải thu ở mức thấp thì có nghĩa là công ty chỉ cần ít ngày để thu hồi được tiền khách còn nợ. Nếu tỉ lệ này cao thì có nghĩa là công ty chủ yếu là bán chịu cho khách hàng, thời gian nợ dài hơn.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Thời gian thu tiền khách hàng bình quân = 365 x Bình quân các khoản phải thu / Doanh thu</p>
                <p>hay = [365/Vòng quay phải thu khách hàng]</p>
                <p><strong>26. Kỳ chuyển đổi các khoản phải trả (Days of Payables Outstanding – DPO)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Là chỉ số thể hiện số ngày trung bình mà công ty cần để trả tiền cho nhà cung cấp. Hệ số này thế hiện mối quan hệ giữa doanh nghiệp và người bán. Hệ số kỳ chuyển đổi các khoản phải trả cao nghĩa là công ty có quan hệ tốt với nhà cung cấp và có khả năng kéo giãn thời gian trả tiền cho người bán. Ngược lại hệ số DPO thấp nghĩa là công ty phải trả tiền cho người bán trong thời gian ngắn sau khi nhận hàng.</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Kỳ chuyển đối các khoản phải trả = 365 x Bình quân các khoản phải trả / Chi phí bán hàng</p>
                <p>hay = [365/Vòng quay các khoản phải trả]</p>
                <p><strong>27. Kỳ chuyển tiền mặt (Cash Conversion Cycle – CCC)</strong></p>
                <p><strong><em> Ý nghĩa:</em></strong></p>
                <p>Con số này càng cao, thì lượng tiền mặt của doanh nghiệp càng khan hiếm cho hoạt động sản xuất kinh doanh và cho các hoạt động khác như đầu tư. Chu kỳ tiền mặt được tính từ khi chi trả cho các nguyên liệu thô tới khi nhận được tiền mặt trong bán hàng.</p>
                <p>Nếu con số này nhỏ sẽ được coi là khả năng quản lý vốn lưu động tốt. Ngược lại, con số này lớn có thể được giải thích là: doanh nghiệp phải thuê thêm vốn trong khi vẫn phải chờ khách hàng trả nợ tiền hàng cho mình.</p>
                <p>Quá trình sản xuất càng dài, lượng tiền mặt mà doanh nghiệp phải thuê thêm để đầu tư càng lớn. Tương tự, thời gian khách hàng thanh toán các hóa đơn càng lâu, thì giá trị của các hóa đơn càng giảm. Hay nói cách khác, tài khoản có thể thu hồi về được làm giảm vốn lưu động của doanh nghiệp</p>
                <p><strong><em> Định nghĩa/Cách xác định:</em></strong></p>
                <p>Kỳ chuyển đổi tiền mặt = Kỳ chuyển đổi hàng tồn kho + Kỳ phải thu khách hàng – Kỳ phải trả khách hàng.</p>
                <p>Trên đây, mình đã tổng hợp lại các chỉ số tài chính quan trọng trong phân tích cơ bản khi đầu tư cổ phiếu. Hy vọng những thông tin mình cung cấp có thể giúp ích cho các bạn. Chúc các bạn thành công!</p>
                
            </div>
        )
    }
}
