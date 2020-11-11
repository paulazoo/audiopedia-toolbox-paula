import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// Style

// Redux

// Custom Components
import Landing from './views/Landing/Landing';
import PlaylistView from './views/PlaylistView/PlaylistView';
import TopicView from './views/TopicView/TopicView';
import Testing from './components/Testing/Testing';

function App(props) {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/testing' component={Testing} />
      <Route exact path='/all-topics' component={TopicView} />
      <Route exact path='/topic/:id' component={PlaylistView} />

      {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
