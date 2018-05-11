import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';

import CategoryDashboard from '../components/filetracker/category/CategoryDashboard';

import ModalStyle, { ModalContent } from "../components/modal/modal.style";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>

          <CategoryDashboard/>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
