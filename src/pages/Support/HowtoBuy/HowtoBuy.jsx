import React from "react";
import "./HowtoBuy.css";

const HowtoBuy = () => (
    <div className="howtobuy-container">
        <h1>Hướng Dẫn Mua Hàng</h1>
        {/* <ol> */}
            <li><b>Bước 1:</b> Truy cập website và lựa chọn sản phẩm cần mua để mua hàng</li>
            <li>Click vào sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn:
                <ul>
                    <li>Tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng</li>
                    <li>Xem giỏ hàng để cập nhật sản phẩm</li>
                    <li>Đặt hàng và thanh toán cho sản phẩm này</li>
                </ul>
            </li>
            <li><b>Bước 2:</b> Lựa chọn thông tin tài khoản thanh toán:
                <ul>
                    <li>Đã có tài khoản: nhập email và mật khẩu</li>
                    <li>Chưa có tài khoản: điền thông tin cá nhân để đăng ký tài khoản</li>
                    <li>Mua hàng không cần tài khoản: chọn đặt hàng không cần tài khoản</li>
                </ul>
            </li>
            <li> <b>Bước 3:</b> Điền thông tin nhận hàng, chọn hình thức thanh toán và vận chuyển</li>
            <li><b>Bước 4:</b> Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng</li>
            <li><b>Bước 5:</b> Sau khi nhận được đơn hàng, chúng tôi sẽ liên hệ xác nhận lại đơn hàng và địa chỉ của bạn</li>
        {/* </ol> */}
        <p>Trân trọng cảm ơn.</p>
    </div>
);

export default HowtoBuy;
