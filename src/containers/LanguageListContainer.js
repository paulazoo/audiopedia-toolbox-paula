import React, { useEffect, useState } from 'react';

// Apollo
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// Custom Components
import LanguageList from '../components/LanguageList/LanguageList';
import { queryLang } from '../store/middleware/api';

const QUERY = queryLang;

const initial = [
  {
    id: 9,
    name: 'English',
  },
  {
    id: 6,
    name: 'Mandarin',
  },
  {
    id: 53,
    name: 'French',
  },
  {
    id: 5,
    name: 'Cantonese',
  },
  {
    id: 8,
    name: 'Spanish',
  },
];

function LanguageListContainer() {
  return (
    <Query query={QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return <LanguageList data={initial} />;
      }}
    </Query>
  );
}

export default LanguageListContainer;
