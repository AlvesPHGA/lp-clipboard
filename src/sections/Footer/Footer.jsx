import React from 'react';
import { Wrap__1200 } from '../../Styles/Styles.style';
import { BoxContentFooter, FooterStyle } from './Footer.style';

import logoSub from '../../assets/logo.svg';
import iconFace from '../../assets/icon-facebook.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconInstagram from '../../assets/icon-instagram.svg';

const Footer = () => {
   return (
      <>
         <FooterStyle>
            <Wrap__1200>
               <BoxContentFooter>
                  <div className="logo">
                     <img src={logoSub} alt="Logo Clipboard" />
                  </div>
                  <div className="link-footer">
                     <a className="faq" href="">
                        FAQs
                     </a>
                     <a className="privacy" href="">
                        Privacy Policy
                     </a>
                     <a className="guide" href="">
                        Install Guide
                     </a>
                     <a className="contact" href="">
                        Contact Us
                     </a>
                     <a className="kit" href="">
                        Press Kit
                     </a>
                  </div>
                  <div className="social-media">
                     <img src={iconFace} alt="" />
                     <img src={iconTwitter} alt="" />
                     <img src={iconInstagram} alt="" />
                  </div>
               </BoxContentFooter>
            </Wrap__1200>
         </FooterStyle>
      </>
   );
};

export default Footer;
