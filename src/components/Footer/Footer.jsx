import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-container'>
                {/* Cột 1 - Thông tin công ty */}
                <div className='footer-content'>
                    <h2>HKD MI BÁNH BAO</h2>
                    <div className='company-info'>
                        <p>MST: 8552771447</p>
                        <p>68 Tân Sơn, phường 15, quận Tân Bình, HCM</p>
                        <p>hotro@mibanhbao.vn</p>
                        <p>Hotline: 0942 553 342</p>
                    </div>
                </div>

                {/* Cột 2 - Chính sách */}
                <div className='footer-content'>
                    <h2>CHÍNH SÁCH</h2>
                    <ul>
                        <li>Chính sách vận chuyển</li>
                        <li>Chính sách đổi trả hàng</li>
                        <li>Chính sách bảo mật</li>
                    </ul>
                </div>

                {/* Cột 3 - Hỗ trợ khách hàng */}
                <div className='footer-content'>
                    <h2>HỖ TRỢ KHÁCH HÀNG</h2>
                    <ul>
                        <li>Hướng dẫn mua hàng</li>
                        <li>Hướng dẫn thanh toán</li>
                        <li>Hướng dẫn giao nhận</li>
                        <li>Điều khoản dịch vụ</li>
                    </ul>
                </div>

                {/* Cột 4 - Đăng ký nhận khuyến mãi */}
                <div className='footer-content'>
                    <h2>ĐĂNG KÝ NHẬN KHUYẾN MÃI</h2>
                    <div className='newsletter'>
                        <input 
                            type="email" 
                            placeholder="Nhập địa chỉ email"
                            className='newsletter-input'
                        />
                        <button className='newsletter-btn'>Đăng ký</button>
                    </div>
                    <div className='social-section'>
                        <h3>Theo dõi chúng tôi</h3>
                        <div className="footer-social-icon">
                            <img src={assets.twitter_icon} alt="Twitter" />
                            <img src={assets.facebook_icon} alt="Facebook" />
                            <img src={assets.linkedin_icon} alt="YouTube" />
                        </div>
                    </div>
                </div>
            </div>
            
            <hr />
            
            {/* Copyright */}
            <div className='footer-copyright'>
                <p>Copyright © Mi Bánh Bao</p>
            </div>
        </div>
    )
}

export default Footer
