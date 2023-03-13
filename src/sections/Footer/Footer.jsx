import React from 'react';
import { Wrap__1200 } from '../../Styles/Styles.style';
import { FooterStyle } from './Footer.style';

const Footer = () => {
   return (
      <>
         <FooterStyle>
            <Wrap__1200>
               <div className="logo"></div>
               <div className="link-footer">
                  <a href="">FAQs</a>
                  <a href="">Privacy Policy</a>
                  <a href="">Install Guide</a>
                  <a href="">Contact Us</a>
                  <a href="">Press Kit</a>
               </div>
               <div className="social-media"></div>
            </Wrap__1200>
         </FooterStyle>
      </>
   );
};

export default Footer;
