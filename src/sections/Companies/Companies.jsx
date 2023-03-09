import React from 'react';
import { Wrap__1200 } from '../../Styles/Styles.style';
import { CompaniesStyle, Company } from './Companies.style';

import Google from '../../assets/logo-google.png';
import IBM from '../../assets/logo-ibm.png';
import Microsoft from '../../assets/logo-microsoft.png';
import Hewlett from '../../assets/logo-hp.png';
import Vector from '../../assets/logo-vector-graphics.png';

const Companies = () => {
   return (
      <CompaniesStyle>
         <Wrap__1200>
            <div className="companies">
               <Company>
                  <img src={Google} alt="" />
               </Company>
               <Company>
                  <img src={IBM} alt="" />
               </Company>
               <Company>
                  <img src={Microsoft} alt="" />
               </Company>
               <Company>
                  <img src={Hewlett} alt="" />
               </Company>
               <Company>
                  <img src={Vector} alt="" />
               </Company>
            </div>
         </Wrap__1200>
      </CompaniesStyle>
   );
};

export default Companies;
