import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import { Field, reduxForm } from "redux-form"; // Field is the component we'll be rendering onto the screen and reduxForm is a function that acts like connect.

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(formProps) to view all the events that can be called in the component. { input } will add all the properties of the object as props to the input component. input is being destructured from formProps.
    // meta object contains the error property. Since the keys match it will be automatically mapped by redux-form
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // console.log(formValues); // gives all the form values of our form.
    this.props.createStream(formValues);
  };

  render() {
    // label is an unknown prop to the field component. since, it is unknown it is passed to the function this.renderInput where it is used to render the label for the field.
    // form's onSubmit is called using the handleSubmit event handler and the function this.onSubmit is passed to it to e called. event and prevent default is called automatically by redux-form and only form value is passed to the function which holds all the values so that they can be used to perform any kind of validations and stuff.
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  // function is used to validate the formValues values. // redux expects an error object to be returned insted of just the string.
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter the title.";
  }

  if (!formValues.description) {
    errors.description = "You must enter the description.";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapped);
