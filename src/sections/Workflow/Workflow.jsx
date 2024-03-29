import React from 'react';
import { Wrap__1200 } from '../../Styles/Styles.style';
import { BoxWork, Work, WorkflowStyle } from './Workflow.style';

import iconBlacklist from '../../assets/icon-blacklist.svg';
import iconText from '../../assets/icon-text.svg';
import iconPreview from '../../assets/icon-preview.svg';

const Workflow = () => {
   return (
      <WorkflowStyle>
         <Wrap__1200>
            <div className="show-top">
               <h2>Supercharge your workflow</h2>
               <p>We've got the tools to boost your productivity.</p>
            </div>

            <BoxWork>
               <Work className="show-right">
                  <div className="image">
                     <img src={iconBlacklist} alt="" />
                  </div>
                  <h3>Create blacklists</h3>
                  <p>
                     Ensure sensitive information never makes its way to your
                     clipboard by excluding certain sources.
                  </p>
               </Work>
               <Work>
                  <div className="image">
                     <img src={iconText} alt="" />
                  </div>
                  <h3>Plain text snippets</h3>
                  <p>
                     Remove unwanted formatting from copied text for a
                     consistent look
                  </p>
               </Work>
               <Work className="show-left">
                  <div className="image">
                     <img src={iconPreview} alt="" />
                  </div>
                  <h3>Sneak preview</h3>
                  <p>
                     Quick preview of all snippets on your Clipboard for easy
                     access.
                  </p>
               </Work>
            </BoxWork>
         </Wrap__1200>
      </WorkflowStyle>
   );
};

export default Workflow;
