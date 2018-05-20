import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col } from "antd";
import IsoWidgetsWrapper from "../../../containers/Widgets/widgets-wrapper";
import StickerWidget from "../../../containers/Widgets/sticker/sticker-widget";
import { StickerWidgetWrapper } from '../../../containers/Widgets/sticker/style';
import folderList from './folderList';
import Scrollbars from '../../utility/customScrollBar.js';
import MailBox from './mailBox.style';
import singleMail from '../../mail/singleMail';

import {
  printBrowseFiles
} from '../../../redux/filetracker/actions';


class DisplayBrowseFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.searchString,
    };
  }
  componentDidMount() {

  }
  render() {
    const {
      allMails,
      filterAttr,
      filterMails,
      selectedMail,
      composeMail,
      replyMail,
      selectMail,
      filterAction,
      changeComposeMail,
      changeReplyMail,
      changeSearchString,
    } = this.props;
    const { search } = this.state;
    let singleMailComponent = (
      <p className="isoNoMailMsg">

      </p>
    );
    const index = -1; 
    if (index !== -1) {
      singleMailComponent = singleMail(
        allMails,
        filterMails,
        index,
        replyMail,
        changeReplyMail,
        selectMail
      );
    }
    return (
      <MailBox className="isomorphicMailBox">
        <div className="isoMiddleWrapper">
          <div className="isoBucketLabel">
            <h3>folder browser</h3>
          </div>
          <Scrollbars>
            {folderList()}
          </Scrollbars>
        </div>
        <div className="isoSingleMailWrapper">
          <Scrollbars style={{ height: this.props.height - 70 }}>
            <i class="icon ion-document" style={{fontSize: '50px'}}></i>
          </Scrollbars>
        </div>
      </MailBox>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filetracker: state.FileTracker
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    printBrowseFiles: () => {
      dispatch(printBrowseFiles())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBrowseFiles)
