import React, { Component } from "react";
import { connect } from "react-redux";

import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

const mapStateToProps = state => {
  return {
    error: state.badWord
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.error && <p>error!</p>}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
