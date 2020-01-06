import React from 'react';
import Grade from './Grade';

class GradeTable extends React.Component {

  createStudent() {
    if (this.props.grades.length > 0) {
      return this.props.grades.map(student => {
        return (
          <Grade key={student.id} name={student.name} course={student.course} grade={student.grade} />
        );
      });
    }
  }

  render() {
    return (
      <table className="table">
        <thead>
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
    );
  }

}

export default GradeTable;
