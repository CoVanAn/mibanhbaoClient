
import React from "react";
import "./PaymentInstructions.css";

const PaymentInstructions = () => (
    <div className="paymentinstructions-container">
        <h1>Hướng Dẫn Thanh Toán</h1>
        <div className="payment-step">
            <h2>1. Chọn Phương Thức Thanh Toán</h2>
            <p>Trước tiên, khi bạn đặt hàng trực tuyến, bạn sẽ được yêu cầu chọn phương thức thanh toán. Phổ biến nhất là thẻ tín dụng/debit, ví điện tử (như Momo, ZaloPay, PayPal), hoặc chuyển khoản ngân hàng.</p>
        </div>
        <div className="payment-step">
            <h2>2. Nhập Thông Tin Thanh Toán</h2>
            <p>Nếu bạn chọn thanh toán bằng thẻ, hãy nhập thông tin thẻ của bạn, bao gồm số thẻ, ngày hết hạn và mã bảo mật (CVV).</p>
            <p>Nếu bạn chọn ví điện tử, bạn sẽ được chuyển đến trang đăng nhập hoặc yêu cầu nhập thông tin đăng nhập của tài khoản ví điện tử của bạn.</p>
            <p>Nếu bạn chọn chuyển khoản ngân hàng, bạn sẽ cần thông tin tài khoản người nhận và thực hiện chuyển khoản từ tài khoản của bạn đến tài khoản của cửa hàng.</p>
        </div>
        <div className="payment-step">
            <h2>3. Xác Nhận Thanh Toán</h2>
            <p>Sau khi bạn đã nhập thông tin thanh toán, hãy xem xét kỹ thông tin và đảm bảo chúng chính xác.</p>
            <p>Bạn có thể được yêu cầu nhập mã xác thực (nếu có) để hoàn thành thanh toán.</p>
        </div>
        <div className="payment-step">
            <h2>4. Nhận Xác Nhận Thanh Toán</h2>
            <p>Sau khi thanh toán thành công, bạn sẽ nhận được một email xác nhận đơn hàng hoặc giao dịch, cùng với thông tin chi tiết về đơn hàng và số tiền đã thanh toán.</p>
        </div>
        <div className="payment-step">
            <h2>5. Lưu Ý An Toàn</h2>
            <p>Đảm bảo bạn chỉ cung cấp thông tin thanh toán trên các trang web được bảo vệ và an toàn.</p>
            <p>Luôn kiểm tra URL để đảm bảo bạn đang giao dịch trên trang web chính thức của cửa hàng.</p>
        </div>
        <div className="payment-step">
            <h2>6. Theo Dõi Giao Dịch</h2>
            <p>Theo dõi tình trạng đơn hàng hoặc giao dịch của bạn thông qua email xác nhận và tài khoản của bạn trên trang web cửa hàng.</p>
        </div>
        <div className="payment-step">
            <h2>7. Liên Hệ Hỗ Trợ</h2>
            <p>Nếu có bất kỳ vấn đề nào liên quan đến thanh toán, hãy liên hệ với dịch vụ khách hàng của cửa hàng để được hỗ trợ.</p>
        </div>
        <p className="payment-note">Nhớ rằng việc thanh toán trực tuyến an toàn và dễ dàng hơn khi bạn tuân thủ các biện pháp bảo mật và sử dụng phương thức thanh toán đáng tin cậy.</p>
    </div>
);

export default PaymentInstructions;
