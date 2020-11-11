import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// Redux

// Style

// Custom Components
import ShowTopic from '../../components/Show/ShowTopic';
import LanguageListContainer from '../../containers/LanguageListContainer';
import Footer from '../../components/Footer/Footer';
import TopicListContainer from '../../containers/TopicListContainer';

function TopicView(props) {
  return (
    <>
      <Row>
        <Col>
          <LanguageListContainer />
        </Col>
        <Col>
          <TopicListContainer />
        </Col>
        <Col>
          <ShowTopic />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default TopicView;
