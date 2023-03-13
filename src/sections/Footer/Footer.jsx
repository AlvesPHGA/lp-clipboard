import React from 'react';
import { Wrap__1200 } from '../../Styles/Styles.style';
import { BoxContentFooter, FooterStyle } from './Footer.style';

import logoSub from '../../assets/logo.svg';

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
                     <a href="">FAQs</a>
                     <a href="">Privacy Policy</a>
                     <a href="">Install Guide</a>
                     <a href="">Contact Us</a>
                     <a href="">Press Kit</a>
                  </div>
                  <div className="social-media"></div>
               </BoxContentFooter>
            </Wrap__1200>
         </FooterStyle>
      </>
   );
};

export default Footer;
