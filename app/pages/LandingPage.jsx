import React, { Component } from 'react';
import Page from '../pages/Page';
import LandingPageContainer from '../containers/LandingPage';

class LandingPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Home Page | E-Docs';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'Landing Page' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <LandingPageContainer {...this.props} />
      </Page>
    );
  }
}

export default LandingPage;
