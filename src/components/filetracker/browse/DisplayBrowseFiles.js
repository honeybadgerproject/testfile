import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col } from "antd";
import IsoWidgetsWrapper from "../../../containers/Widgets/widgets-wrapper";
import StickerWidget from "../../../containers/Widgets/sticker/sticker-widget";
import { StickerWidgetWrapper } from '../../../containers/Widgets/sticker/style';
import folderList from './folderList';
import Scrollbars from '../../utility/customScrollBar.js';

import {
  printBrowseFiles
} from '../../../redux/filetracker/actions';

class DisplayBrowseFiles extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
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
      </div>
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
