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
       <h1>bucket</h1>
       <div className="isoMailList">
          <span className="isoLabelIndicator" />
          <div className="isoRecipentsImg">
            image
          </div>
          <div className="isoMailInfo">
            <div className="infoHead">
              <p className="isoRecipents">name</p>
              <span className="isoReceiveDate">date</span>
            </div>
            <p className="isoSubject">subject</p>
          </div>
       </div>
    </FolderListWrapper>
  );
}
