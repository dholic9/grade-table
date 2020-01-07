import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  handleDeleteSubmit(event) {
    event.preventDefault();
    const targetId = this.props.id;
    this.props.onSubmit(targetId);
  }

  render() {

    return (
      <tr scope="row">
        <td>{this.props.name}</td>
        <td>{this.props.course}</td>
        <td>{this.props.grade}</td>
        <td><button onClick={this.handleDeleteSubmit} type="submit" className="btn btn-danger">Delete</button></td>
      </tr>
    );
  }
}

export default Grade;
