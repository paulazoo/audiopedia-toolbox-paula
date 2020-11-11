import React, { useEffect, useState } from 'react';

// Apollo
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// Custom Components
import { queryTopic } from '../store/middleware/api';
import TopicList from '../components/TopicList/TopicList';

const QUERY = queryTopic;

function TopicListContainer() {
  return (
    <Query query={QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return <TopicList data={data} />;
      }}
    </Query>
  );
}

export default TopicListContainer;
