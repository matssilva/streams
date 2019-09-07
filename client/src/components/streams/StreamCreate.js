import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{meta.error}</div>
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Save</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
