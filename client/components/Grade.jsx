import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.state = {
      name: this.props.name,
      course: this.props.course,
      grade: this.props.grade,
      id: this.props.id
    };
  }

  handleDeleteSubmit(event) {
    event.preventDefault();
    const targetId = this.props.id;
    this.props.onSubmit(targetId);
  }

  handleUpdateSubmit(event) {
    const updateStudent = this.state;
    this.props.onUpdate(updateStudent.id, updateStudent);
  }

  render() {

    return (
      <tr scope="row">
        <td>{this.props.name}</td>
        <td>{this.props.course}</td>
        <td>{this.props.grade}</td>
        <td>
          <button
            onClick={this.handleDeleteSubmit}
            type="submit"
            className="btn btn-danger"
          >Delete</button>
          <button
            onClick={this.handleUpdateSubmit}
            type="submit"
            className="btn btn-outline-secondary"
          >Update</button>
        </td>
      </tr>
    );
  }
}

export default Grade;
