import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileDropdown && !event.target.closest('.navbar-profile')) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileDropdown]);

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-left'>
          <span>Hotline: 0942 5533 42</span>
          <span>Email: hotro@mibanhbao.vn</span>
        </div>
        <div className='navbar-right'>
          {!token ? (
            <>
              <span onClick={() => setShowLogin(true)} className='login-btn'>Đăng nhập</span>
              <span className='login-btn' onClick={() => setShowLogin(true)}>Đăng ký</span>
              <span>Liên hệ</span>
            </>
          ) : (
            <>
              {/* <div className='navbar-profile' onClick={() => setShowProfileDropdown(!showProfileDropdown)}> */}
              <span className='login-btn'>Tài khoản</span>
              {/* {showProfileDropdown && (
                    <ul className='nav-profile-dropdown'>
                      <li onClick={() => {navigate('/myorders'); setShowProfileDropdown(false)}}>
                        <img src={assets.bag_icon} alt="" />
                        <p>Đơn hàng của tôi</p>
                      </li>
                      <hr />
                      <li onClick={() => {logout(); setShowProfileDropdown(false)}}>
                        <img src={assets.logout_icon} alt="" />
                        <p>Đăng xuất</p>
                      </li>
                    </ul>
                  )} */}
              {/* </div> */}
              <span className='login-btn' onClick={logout}>Đăng xuất</span>
              <span className='login-btn'>Liên hệ</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

