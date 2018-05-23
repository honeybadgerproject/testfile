import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col } from "antd";
import IsoWidgetsWrapper from "../../../containers/Widgets/widgets-wrapper";
import StickerWidget from "../../../containers/Widgets/sticker/sticker-widget";
import { StickerWidgetWrapper } from '../../../containers/Widgets/sticker/style';

import {
  addNewCategory
} from '../../../redux/filetracker/actions';

class CategoryDashboard extends Component {
  render() {
    return (
      <div>
          <Row gutter={32}>
          
          </Row>

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
    addNewCategory: (newCategory) => {
      dispatch(addNewCategory(newCategory))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDashboard)
