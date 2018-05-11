import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import CategoryDashboard from '../components/filetracker/category/CategoryDashboard';

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>ISOMORPHIC DASHBOARD HOME</h1>
          <CategoryDashboard />
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
