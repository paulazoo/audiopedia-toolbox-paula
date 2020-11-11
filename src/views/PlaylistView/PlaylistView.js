import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// Redux

// Style

// Custom Components
import Footer from '../../components/Footer/Footer';
import ShowPlaylist from '../../components/Show/ShowPlaylist';
import LanguageListContainer from '../../containers/LanguageListContainer';
import PlaylistListContainer from '../../containers/PlaylistListContainer';

function PlaylistView(props) {
  const { id } = useParams();

  return (
    <>
      <Row>
        <Col>
          <LanguageListContainer />
        </Col>
        <Col>
          <PlaylistListContainer />
        </Col>
        <Col>
          <ShowPlaylist />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default PlaylistView;
