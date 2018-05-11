import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';

import CategoryDashboard from '../components/filetracker/category/CategoryDashboard';
import RaiseNewCategory from '../components/filetracker/category/RaiseNewCategory';

import ModalStyle, { ModalContent } from "../components/modal/modal.style";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <RaiseNewCategory/>
          <br /><br />
          <CategoryDashboard/>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
