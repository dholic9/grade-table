import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGradeChange(event) {
    this.setState({
      grade: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newStudent = {
      name: this.state.name,
      grade: this.state.grade,
      course: this.state.course
    };
    this.props.onSubmit(newStudent);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    const nameValue = this.state.name;
    const courseValue = this.state.course;
    const gradeValue = this.state.grade;
    return (
      <form className="input-group mb-4 flex-column float-sm-left float-md-right" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            required
            autoFocus
            value={nameValue}
            onChange={this.handleNameChange}
            type="text" className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            required
            autoFocus
            value={courseValue}
            onChange={this.handleCourseChange}
            type="text"
            className="form-control"
            placeholder="Course"
          />
        </div>
        <div className="form-group">
          <input
            required
            autoFocus
            value={gradeValue}
            onChange={this.handleGradeChange}
            type="text"
            className="form-control"
            placeholder="Grade"
          />
        </div>
        <div className="input-group-append">
          <button
            type="submit"
            className="btn btn-primary rounded m-1"
          >Submit</button>
          <button
            type="submit"
            className="btn btn-outline-secondary m-1 rounded"
          >Cancel</button>
        </div>
      </form>
    );
  }

}

export default GradeForm;
