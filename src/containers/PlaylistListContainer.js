import React, { useEffect, useState } from 'react';

// Apollo
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// Custom Components
import PlaylistList from '../components/PlaylistList/PlaylistList';
import { querySelectedTopic } from '../store/middleware/api';

const QUERY = querySelectedTopic;

function PlaylistListContainer() {
  return (
    <Query query={QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return <PlaylistList data={data.selectedTopic.topicPlaylists} />;
      }}
    </Query>
  );
}

export default PlaylistListContainer;
