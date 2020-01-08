import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: '',
      updateName: '',
      updateCourse: '',
      updateGrade: '',
      updateId: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdateNameChange = this.handleUpdateNameChange.bind(this);
    this.handleUpdateCourseChange = this.handleUpdateCourseChange.bind(this);
    this.handleUpdateGradeChange = this.handleUpdateGradeChange.bind(this);

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
    if (!this.props.isUpdating) {
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
    } else if (this.props.isUpdating) {
      const updatingStudent = {
        name: this.state.updateName,
        course: this.state.updateCourse,
        grade: this.state.updateGrade,
        id: this.props.updateStudent.id
      };
      event.preventDefault();
      this.props.onUpdateSubmitClick(
        this.props.updateStudent.id,
        updatingStudent
      );
    }
  }

  handleCancel(event) {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      if (this.props.isUpdating) {
        this.setState({
          updateName: this.props.updateStudent.name,
          updateCourse: this.props.updateStudent.course,
          updateGrade: this.props.updateStudent.grade,
          updateId: this.props.updateStudent.id
        });
      }
    }
  }

  handleUpdateNameChange(event) {
    this.setState({
      updateName: event.target.value
    });
  }

  handleUpdateCourseChange(event) {
    this.setState({
      updateCourse: event.target.value
    });
  }

  handleUpdateGradeChange(event) {
    this.setState({
      updateGrade: event.target.value
    });
  }

  render() {

    const nameValue = this.props.isUpdating
      ? this.state.updateName
      : this.state.name;
    const courseValue = this.props.isUpdating
      ? this.state.updateCourse
      : this.state.course;
    const gradeValue = this.props.isUpdating
      ? this.state.updateGrade
      : this.state.grade;

    return (
      <form className="input-group mb-4 flex-column float-sm-left float-md-right" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            required
            autoFocus
            value={nameValue}
            onChange={this.props.isUpdating
              ? this.handleUpdateNameChange
              : this.handleNameChange}
            type="text" className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            required
            autoFocus
            value={courseValue}
            onChange={this.props.isUpdating
              ? this.handleUpdateCourseChange
              : this.handleCourseChange}
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
            onChange={this.props.isUpdating
              ? this.handleUpdateGradeChange
              : this.handleGradeChange}
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
            type="button"
            onClick={this.handleCancel}
            className="btn btn-outline-secondary m-1 rounded"
          >Cancel</button>
        </div>
      </form>
    );
  }

}

export default GradeForm;
