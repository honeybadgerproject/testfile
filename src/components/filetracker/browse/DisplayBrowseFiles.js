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
    const index = allMails.findIndex(mail => mail.id === selectedMail);
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
        <div className="isoLeftWrapper">

        </div>
        <div className="isoMiddleWrapper">
          <div className="isoBucketLabel">
            <h3>bucket 1</h3>

          </div>
          <div className="isoSearchMailWrapper">
            <h3>bucket 2</h3>
          </div>
          <Scrollbars>
            <h3>bucket 3</h3>
            {folderList()}
          </Scrollbars>
        </div>
        <div className="isoSingleMailWrapper">
          <Scrollbars style={{ height: this.props.height - 70 }}>

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
