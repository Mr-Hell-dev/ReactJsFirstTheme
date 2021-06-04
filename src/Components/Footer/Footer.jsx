import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <>
            {true ?
                <div class="footer">
                    <div class="logoinfo">
                        <div class="imgdiv">
                            <img class="img" src="logo.png" alt="logo" />
                        </div>
                        <br />
		Made by Coedify. All right reserved
		</div>
                    <div class="sociallinks ">
                        <div className="fullwidth" >
                            <div class="socialicons">
                                <i class="fab fa-facebook scaleabit"></i>
                                <i class="fab fa-instagram scaleabit"></i>
                                <i class="fab fa-twitter scaleabit"></i>
                            </div>
                        </div>
                        <br />
                        <div class="pagelinks">
                            <ul class="footerlinks">
                                <li>
                                    Contact Us
					</li>
                                <li>
                                    About Us
					</li>
                                <li>
                                    FAQs
					</li>
                                <li>
                                    Support
					</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <h2>
                    Loading.....
                    </h2>
            }
        </>
    )
}

export default Footer;


