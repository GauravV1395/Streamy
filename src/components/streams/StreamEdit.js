import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    // initial props is a very special prop of redux forms that is used to pass any initial values to it. when we are passing props to the streamform component, we are initially passing it to the redux form and then to the component and hence we are able to use these special props.(because the component is wrapped inside redux form).
    console.log(this.props);
    if (!this.props.stream) {
      return <div>loading</div>;
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // ownProps is the props object that belongs exclusively to mapStateToProps function. It is similiar to the original props of the functional component. Basically it is just a version of it.
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
