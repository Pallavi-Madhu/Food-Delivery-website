import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-text'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''/>
                <p>Enjoy delicious meals delivered straight to your doorstep with just a few clicks!
                We prioritize quality, freshness, and customer satisfaction in every order.
                Connect with us on social media for the latest updates, offers, and more!
                Have questions or feedback? Contact our 24/7 support team anytime.</p>
                <div className='footer-social-icons' alt=''>
                    <img src ={assets.facebook_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                </div>
            </div>
       
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul className='List'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <p>+1-212-456-7890</p>
                <p>contact@tomato.com</p>
            </div>
        </div>
      <hr/>
      <p className='copy-right'>Copyright 2025 @ Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
