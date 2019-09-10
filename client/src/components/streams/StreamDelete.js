import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
  const backToList = () => {
    history.push('/');
  };

  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      Stream StreamDelete
      <Modal
        title="Stream delete"
        content="Are um sure you want to delete this stream?"
        actions={actions}
        onDismissCallback={backToList}
      />
    </div>
  );
};

export default StreamDelete;
