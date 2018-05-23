import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';

import FilesDashboard from '../components/filetracker/files/FilesDashboard';
//import RaiseNewCategory from '../components/filetracker/category/RaiseNewCategory';

import ModalStyle, { ModalContent } from "../components/modal/modal.style";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <br /><br />
          <FilesDashboard/>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
