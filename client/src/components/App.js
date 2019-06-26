import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AppBar from './AppBar';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamView from './streams/StreamView';
import StreamEdit from './streams/StreamEdit';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <AppBar />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamView} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
