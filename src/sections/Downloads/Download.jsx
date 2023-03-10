import React from 'react';
import BoxBtns from '../../components/BoxBtns/BoxBtns';
import CTA from '../../components/CTA/CTA';
import { Wrap__1200 } from '../../Styles/Styles.style';
import { DownloadStyle } from './Download.style';

const Download = () => {
   return (
      <DownloadStyle>
         <Wrap__1200>
            <h2>Clipboard for iOS and Mac OS</h2>
            <p>
               Available for free on the App Store. Download for Mac or iOS,
               sync with iCloud and you're ready to start adding to your
               clipboard.
            </p>

            <BoxBtns />
         </Wrap__1200>
      </DownloadStyle>
   );
};

export default Download;
