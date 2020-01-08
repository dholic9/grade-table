import React from 'react';
import Grade from './Grade';

class GradeTable extends React.Component {

  createStudent() {
    if (this.props.grades.length > 0) {
      return this.props.grades.map(student => {
        return (
          <Grade
            onSubmit={this.props.onSubmit}
            key={student.id}
            id={student.id}
            name={student.name}
            course={student.course}
            grade={student.grade}
          />
        );
      });
    } else {
      return (
        <tr scope="row">
          <td>No grades recorded</td>
        </tr>
      );
    }
  }

  render() {
    return (
      <div className="container col-sm-12 float-none">
        <table className="table table-striped table-bordered table-hover ">
          <thead className="thead-dark">
            <tr>
              <th >Student Name</th>
              <th >Course</th>
              <th >Grade</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {this.createStudent()}
          </tbody>
        </table>
      </div>
    );
  }

}

export default GradeTable;
