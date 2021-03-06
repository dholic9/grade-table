import React from 'react';
import PageTitle from './page-title';
import GradeTable from './GradeTable';
import GradeForm from './GradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      isUpdating: false,
      updateStudent: null
    };
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.grabUpdateStudentId = this.grabUpdateStudentId.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
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
    if (this.state.grades.length > 0) {
      let sum = 0;
      this.state.grades.map(user => {
        sum += parseInt(user.grade);
      });
      return Math.round(sum / parseInt(this.state.grades.length));
    } else {
      return 'N/A';
    }
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

  deleteStudent(id) {
    const tempArr = [...this.state.grades];
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].id === id) {
        tempArr.splice(i, 1);
      }
    }

    fetch('/api/grades/' + id, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: tempArr });
      });
  }

  updateStudent(id, newUpdatingStudent) {
    const tempUpdatingArr = [...this.state.grades];
    for (let i = 0; i < tempUpdatingArr.length; i++) {
      if (tempUpdatingArr[i].id === id) {
        tempUpdatingArr.splice(i, 1, newUpdatingStudent);
      }
    }
    fetch('/api/grades/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUpdatingStudent)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          grades: tempUpdatingArr,
          isUpdating: false
        });
      });
  }

  grabUpdateStudentId(id, updateStudent) {
    const targetUpdateStudent = updateStudent;
    const updatingStudentId = id;
    this.setState({
      updateStudent: targetUpdateStudent,
      isUpdating: true
    });
  }

  render() {
    return (
      <div className="container-fluid justify-content-center align-items-center">
        <div className="row">
          <PageTitle
            avg={this.getAverageGrade()}
            text="Student Grade Table"
          />
          <div className=" col-sm-9 col-md-9">
            <GradeTable
              grades={this.state.grades}
              onSubmit={this.deleteStudent}
              onUpdate={this.grabUpdateStudentId}
            />
          </div>
          <div className="col-sm-8 col-md-3">
            <GradeForm
              onSubmit={this.addStudent}
              onUpdateSubmitClick={this.updateStudent}
              isUpdating={this.state.isUpdating}
              updateStudent={this.state.updateStudent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
