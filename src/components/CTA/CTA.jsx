import React from 'react';
import { CTAStyle } from './CTA.style';

const CTA = ({ children, datalegend }) => {
   return <CTAStyle data-cta={datalegend}>{children}</CTAStyle>;
};

export default CTA;
