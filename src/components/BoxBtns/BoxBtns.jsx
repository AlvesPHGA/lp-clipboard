import React from 'react';
import CTA from '../CTA/CTA';
import { BoxBtnsStyle } from './BoxBtns.style';

const BoxBtns = () => {
   return (
      <BoxBtnsStyle>
         <CTA datalegend="green">Dowload for iOS</CTA>
         <CTA datalegend="blue">Dowload for Mac</CTA>
      </BoxBtnsStyle>
   );
};

export default BoxBtns;
