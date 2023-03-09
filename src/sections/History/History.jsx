import React from 'react';
import BoxBtns from '../../components/BoxBtns/BoxBtns';
import { Wrap__1200 } from '../../Styles/Styles.style';
import { HistoryStyle } from './History.style';

const History = () => {
   return (
      <HistoryStyle>
         <Wrap__1200>
            <h1>A history of everything you copy</h1>
            <p>
               Clipboard allows you to track and organize everything you compy.
               Instantly access your clipboard on all your devices.
            </p>

            <BoxBtns />
         </Wrap__1200>
      </HistoryStyle>
   );
};

export default History;
