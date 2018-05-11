import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col } from "antd";
import IsoWidgetsWrapper from "../../../containers/Widgets/widgets-wrapper";
import StickerWidget from "../../../containers/Widgets/sticker/sticker-widget";
import { StickerWidgetWrapper } from '../../../containers/Widgets/sticker/style';
import Button from "../../uielements/button";
import IntlMessages from "../../utility/intlMessages";
import Modals from "../../feedback/modal";
import ContentHolder from '../../utility/contentHolder';

import ModalStyle, { ModalContent } from "./modal.style";
import WithDirection from "../../../settings/withDirection";
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../uielements/input';

import {
  addNewCategory
} from '../../../redux/filetracker/actions';

const isoModal = ModalStyle(Modals);
const Modal = WithDirection(isoModal);

const confirm = Modals.confirm;

class CategoryDashboard extends Component {
  state = {
    loading: false,
    visible: false,
    modalTitle: '',
    modalGroup: ''
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    // submitnew category in array
    this.props.addNewCategory(this.state.modalTitle, this.state.modalGroup);
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 2000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleModalTitleChange = (event) => {
    this.setState({modalTitle: event.target.value});
  };
  handleModalGroupChange = (event) => {
    this.setState({modalGroup: event.target.value});
  };
  render() {
    return (
      <div>
          <Row gutter={32} type="flex" justify="end">

              <Col span={4}>
                <Button type="primary" onClick={this.showModal}>
                  {<IntlMessages id="category.addCategory" />}
                </Button>
                <Modal
                  visible={this.state.visible}
                  title="Add a New Category"
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  footer={[
                    <Button key="back" size="large" onClick={this.handleCancel}>
                      dismiss
                    </Button>,
                    <Button
                      key="submit"
                      type="primary"
                      size="large"
                      loading={this.state.loading}
                      onClick={this.handleOk}
                    >
                      submit
                    </Button>
                  ]}
                >
                <ContentHolder>
                  <Input
                    placeholder="title"
                    style={{ marginBottom: '15px' }}
                    value={this.state.modalTitle}
                    onChange={this.handleModalTitleChange}
                  />
                  <Input
                    placeholder="group"
                    style={{ marginBottom: '15px' }}
                    value={this.state.modalGroup}
                    onChange={this.handleModalGroupChange}
                  />
                </ContentHolder>
              </Modal>
              </Col>
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
    addNewCategory: (title, group) => {
      dispatch(addNewCategory(title, group))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDashboard)
