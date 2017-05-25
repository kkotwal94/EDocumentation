import React, { Component } from 'react';
import Page from '../pages/Page';
import DocumentContainer from '../containers/Document';

class Document extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Document | E-Docs';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A List of documentation' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <DocumentContainer {...this.props} />
      </Page>
    );
  }
}

export default Document;
