import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// Redux

// Style
import '../../App.css';

// Custom Components
import reorder from '../Shared/reorder';
import PlaylistItem from './PlaylistItem';
import CreatePlaylist from '../Create/CreatePlaylist';

const PlaylistListMemo = React.memo(function PlaylistListMemo({ playlists }) {
  return playlists.map((playlist, index) => (
    // TODO: change back to id
    <PlaylistItem
      playlist={playlist}
      index={index}
      key={`id${playlist.index}`}
    />
  ));
});

function PlaylistList({ data }) {
  const [playlists, setPlaylists] = useState(data.allPlaylists);
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderedPlaylists = reorder(
      playlists,
      result.source.index,
      result.destination.index
    );

    setPlaylists(reorderedPlaylists);
    console.log(reorderedPlaylists);
  }

  const handleCreate = () => {
    setShowCreatePlaylist(true);
  };

  const handleCloseCreatePlaylist = () => {
    setShowCreatePlaylist(false);
  };

  return (
    <Card className='layout-card'>
      <Card.Title>Playlists</Card.Title>
      <Card.Body>
        <Card>
          <Button onClick={handleCreate} block>
            Create New Playlist
          </Button>
        </Card>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='list'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <PlaylistListMemo playlists={playlists} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <CreatePlaylist
          show={showCreatePlaylist}
          handleClose={handleCloseCreatePlaylist}
        />
      </Card.Body>
    </Card>
  );
}

export default PlaylistList;
