import React from 'react';
import PageTitle from './page-title';
import GradeTable from './GradeTable';
import GradeForm from './GradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addStudent = this.addStudent.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getAverageGrade() {
    let sum = 0;
    this.state.grades.map(user => {
      sum += user.grade;
    });
    return Math.round(sum / this.state.grades.length);
  }

  addStudent(newStudent) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStudent)
    })
      .then(res => res.json())
      .then(data => {
        const createdStudent = data;
        const arr = [...this.state.grades];
        arr.push(createdStudent);
        this.setState({ grades: arr });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <PageTitle avg={this.getAverageGrade()} text="Student Grade Table" />
          <div className="col-8">
            <GradeTable grades={this.state.grades} />
          </div>
          <div className="col-2">
            <GradeForm onSubmit={this.addStudent} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
