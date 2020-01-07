import React from 'react';
import PageTitle from './page-title';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
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
    this.average = Math.round(sum / this.state.grades.length);
  }

  render() {
    this.getAverageGrade();
    return (
      <div className="container">
        <PageTitle avg={this.average}text="Student Grade Table" />
        <div className="row">
          <div className="col-sm">
            <GradeTable grades={this.state.grades} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
