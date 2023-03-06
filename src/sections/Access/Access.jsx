import React from 'react';
import { Wrap__1200 } from '../../Styles/Styles.style';
import { AccessStyle } from './Access.style';

import ImgDevices from '../../assets/image-devices.png';

const Access = () => {
   return (
      <AccessStyle>
         <Wrap__1200>
            <h2>Access Clipboard Anywhere</h2>
            <p>
               Whether you're on the go, or at your computer, you can access all
               your Clipboard snippets in a few simple clicks.'
            </p>
            <img src={`${ImgDevices}`} alt="Devices image" />
         </Wrap__1200>
      </AccessStyle>
   );
};

export default Access;
