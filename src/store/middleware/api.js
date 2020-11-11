import { gql } from 'apollo-boost';

export const queryLang = gql`
  query {
    allLanguages {
      name
    }
  }
`;

export const createLang = gql`
  mutation createLanguage {
    createLanguage(
      input: { name: "English", audioUrl: "www.test.url", published: true }
    ) {
      ok
      language {
        id
      }
    }
  }
`;

export const updateLang = gql`
  mutation updateLanguage {
    updateLanguage(id: 1, published: false) {
      ok
      language {
        published
      }
    }
  }
`;

export const deleteLang = gql`
  mutation deleteLanguage {
    deleteLanguage(id: 1) {
      ok
    }
  }
`;

export const queryTrack = gql`
  query {
    allTracks {
      id
      title
      index
      audioUrl
      transcript
      duration
      active
      published
    }
  }
`;

export const createTrack = gql`
  mutation createTrack {
    createTrack(
      input: {
        title: "How are germs mostly spread?"
        index: 0
        audioUrl: "www.test.url"
        transcript: "Germs are spread through X,Y, and Z."
        duration: 33
        active: true
        published: true
      }
    ) {
      ok
      track {
        index
      }
    }
  }
`;

export const updateTrack = gql`
  mutation updateTrack {
    updateTrack(id: 1, active: false) {
      ok
      track {
        active
      }
    }
  }
`;

export const deleteTrack = gql`
  mutation deleteTrack {
    deleteTrack(id: 1) {
      ok
    }
  }
`;

export const createPlaylist = gql`
  mutation createPlaylist {
    createPlaylist(
      input: {
        index: 0
        title: "Cleanliness"
        audioUrl: "www.test.url"
        active: true
        published: true
        tracks: [1]
      }
    ) {
      ok
      playlist {
        id
      }
    }
  }
`;

export const queryPlaylist = gql`
  query {
    allPlaylists {
      title
      index
      audioUrl
      active
      published
      tracks {
        title
        index
        audioUrl
        transcript
        duration
        active
        published
      }
    }
  }
`;

export const updatePlaylist = gql`
  mutation updatePlaylist {
    updatePlaylist(id: 1, active: false) {
      ok
      playlist {
        active
      }
    }
  }
`;

export const deletePlaylist = gql`
  mutation deletePlaylist {
    deletePlaylist(id: 1) {
      ok
    }
  }
`;

export const createTopic = gql`
  mutation createTopic {
    createTopic(
      input: {
        index: 0
        title: "Health"
        audioUrl: "www.test.url"
        active: true
        published: true
        playlists: [1]
      }
    ) {
      ok
      topic {
        id
      }
    }
  }
`;

export const queryTopic = gql`
  query {
    allTopics {
      title
      index
      audioUrl
      active
      published
      playlists {
        title
        index
        audioUrl
        active
        published
        tracks {
          title
          index
          audioUrl
          transcript
          duration
          active
          published
        }
      }
    }
  }
`;

export const updateTopic = gql`
  mutation updateTopic {
    updateTopic(id: 1, active: false) {
      ok
      topic {
        active
      }
    }
  }
`;

export const deleteTopic = gql`
  mutation deleteTopic {
    deleteTopic(id: 1) {
      ok
    }
  }
`;

export const querySelectedTopic = gql`
  {
    selectedTopic: topic(id: 1) {
      title
      index
      audioUrl
      active
      published
      topicPlaylists: playlists {
        title
        index
        audioUrl
        active
        published
        playlistTracks: tracks {
          title
          index
          audioUrl
          transcript
          duration
          active
          published
        }
      }
    }
  }
`;
