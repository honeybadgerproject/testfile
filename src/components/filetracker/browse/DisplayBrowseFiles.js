import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col } from "antd";
import IsoWidgetsWrapper from "../../../containers/Widgets/widgets-wrapper";
import StickerWidget from "../../../containers/Widgets/sticker/sticker-widget";
import { StickerWidgetWrapper } from '../../../containers/Widgets/sticker/style';
import folderList from './folderList';

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
            <h3>bucket</h3>
            <PaginationControl />
          </div>
          <div className="isoSearchMailWrapper">
            <InputSearch
              placeholder="Search Email"
              value={search}
              className="isoSearchEmail"
            />
          </div>
          <Scrollbars>
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
