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

  render() {
    return (
      <div className="container">
        <PageTitle text="Student Grade Table" />
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
