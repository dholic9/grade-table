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
    }
  }

  render() {
    return (
      <div className="container col-sm">
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
