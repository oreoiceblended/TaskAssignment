import React from "react";
import "../css/FooterStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaGoogle, FaSnapchat, FaPhone, FaMapMarkerAlt, FaMailBulk } from 'react-icons/fa';
const Footer = () =>{
    return (
        <footer>
        <div class="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-widget">
                        <h4>Đôi lời giới thiệu</h4>
                            <ul>
                                <li><a href="https://www.facebook.com/phuc.phanhoang.1694/"><FaFacebook /></a></li>
                                <li><a href="#"><FaYoutube/></a></li>
                                <li><a href="#"><FaInstagram/></a></li>
                                <li><a href="#"><FaTwitter/></a></li>
                                <li><a href="#"><FaGoogle/></a></li>
                                <li><a href="#"><FaSnapchat/></a></li>
                            </ul>
                        </div>
                    </div>
                  
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="footer-link">
                            <h4>Thông tin</h4>
                            <ul>
                                <li><a href="#">Details</a></li>
                                <li><a href="#">Details</a></li>
                                <li><a href="#">Details</a></li>
                                <li><a href="#">Details</a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="footer-link-contact">
                            <h4>Liên hệ</h4>
                            <ul>
                            <li><FaMapMarkerAlt/> Địa chỉ: <a href="#">Đại học Bách Khoa TPHCM</a></li>
                            <li><FaPhone/> Số điện thoại: <a href="tel:0999999999">0999999999</a></li>
                            <li><FaMailBulk/> Email: <a href="#">hcmut@hcmut.edu.vn</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="footer-copyright">
        <p class="footer-company">All Rights Reserved. &copy; 2022 <a href="#" style={{}}>UWC version 2.0</a> Design By: 
            <a href="https://www.facebook.com/phuc.phanhoang.1694/"> Phan Hoàng Phúc</a></p>
        </div>
        </footer>
    );
};
export default Footer;