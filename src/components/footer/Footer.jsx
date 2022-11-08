import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
            <div className="box">
                <h1>Come 'N' Buy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum aliquid eligendi tempore hic voluptas et fugiat sunt. Quia placeat dolore maiores veniam culpa mollitia animi exercitationem tempora sit nihil?</p>
            <div className="icon d_flex">
                <div className="img d_flex">
                    <i className="fa-brands fa-google-play"></i>
                    <span>Google Play</span>
                </div>
                <div className="img d_flex">
                    <i className="fa-brands fa-app-store-ios"></i>
                    <span>App Store</span>
                </div>
            </div>
            </div>

            <div className="box">
                <h2>About Us</h2>
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Customer Service</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="box">
                <h2>Customer Care</h2>
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk purchases</li>
                    <li>Returns & Refund</li>
                </ul>
            </div>

            <div className="box">
                <h2>Contact Us</h2>
                <ul>
                    <li>Address: Abuja, Nigeria.</li>
                    <li>Email: chinonsochibuzor5@gmail.com</li>
                    <li>Phone: +2347069981779</li>
                </ul>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
