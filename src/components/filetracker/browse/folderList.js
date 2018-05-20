import React from 'react';
import { timeDifference } from '../../../helpers/utility';
import { tags, tagColor } from './mailTags.js';
import FolderListWrapper from './folderList.style';
import { rtl } from '../../../config/withDirection';

export default function mailList(
  mails,
  selectMail,
  selectedMail,
  toggleListVisible
) {
  
  return (
    <FolderListWrapper className="isoMailListWrapper">
       <div className="isoMailList">
          <span className="isoLabelIndicator" />
          <div className="isoRecipentsImg">
            <i class="icon ion-folder" style={{fontSize: '50px'}}></i>
          </div>
          <div className="isoMailInfo">
            <div className="infoHead">
              <p className="isoRecipents">folder 1</p>
              <span className="isoReceiveDate">09/09/2018</span>
            </div>
            <p className="isoSubject">this folder is one</p>
          </div>
       </div>
    </FolderListWrapper>
  );
}
