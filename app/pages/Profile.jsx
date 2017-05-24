import React, { Component } from 'react';
import Page from '../pages/Page';
import ProfileContainer from '../containers/Profile';

class Profile extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Profile Page | E-Docs';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'Profile Page' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <ProfileContainer {...this.props} />
      </Page>
    );
  }
}

export default Profile;
