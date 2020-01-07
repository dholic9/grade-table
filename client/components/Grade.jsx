import React from 'react';

class Grade extends React.Component {

  render() {

    return (
      <tr scope="row">
        <td>{this.props.name}</td>
        <td>{this.props.course}</td>
        <td>{this.props.grade}</td>
        <td><button type="submit" className="btn btn-danger">Delete</button></td>
      </tr>
    );
  }
}

export default Grade;
