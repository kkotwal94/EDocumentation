import React, { Component } from 'react';
import Page from '../pages/Page';
import CreateDocumentContainer from '../containers/CreateDocument';

class CreateDocument extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Create Document | E-Docs';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'Create a documention on this page' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <CreateDocumentContainer {...this.props} />
      </Page>
    );
  }
}

export default CreateDocument;
