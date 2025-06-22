import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>At Foodinose, we believe that great food should be just a tap away. Whether you're craving street-style snacks, a hearty meal, or gourmet delicacies, we bring your favorite restaurants right to your doorstep—fresh, fast, and hassle-free .</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook" />
                    <img src={assets.twitter_icon} alt="twitter" />
                    <img src={assets.linkedin_icon} alt="linkdn" />

                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivary</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-827-689-7846</li>
                    <li>contact@Foodinose.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © Foodinose.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer