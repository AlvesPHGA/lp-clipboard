import React from 'react';
import { Wrap__1200 } from '../../Styles/Styles.style';
import {
   BoxFunctionalities,
   BoxImg,
   Functionalities,
   Functionality,
   SnippetsStyle,
} from './Snippets.style';

const Snippets = () => {
   return (
      <SnippetsStyle>
         <Wrap__1200 className="show-top">
            <h2>Keep track of your snippets</h2>
            <p>
               Clipboard instantly stores any item you copy in the cloud,
               meaning you can access your snippets immediately on all your
               devices. Our Mac and iOS apps will help you organize everything.
            </p>
         </Wrap__1200>
         <Functionalities>
            <BoxImg className="show-right"></BoxImg>
            <BoxFunctionalities className="show-left">
               <Functionality>
                  <h3>Quick Search</h3>
                  <p>
                     Easily search your snippets by content, category, web
                     address, application, and more.
                  </p>
               </Functionality>
               <Functionality>
                  <h3>iCloud Sync</h3>
                  <p>
                     Instantly saves and syncs snippets across all your devices.
                  </p>
               </Functionality>
               <Functionality>
                  <h3>Complete History</h3>
                  <p>
                     Retrieve any snippets from the first moment you started
                     using the app.
                  </p>
               </Functionality>
            </BoxFunctionalities>
         </Functionalities>
      </SnippetsStyle>
   );
};

export default Snippets;
