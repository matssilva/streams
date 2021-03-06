import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import AppBar from './AppBar';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamView from './streams/StreamView';
import StreamEdit from './streams/StreamEdit';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <AppBar />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamView} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
