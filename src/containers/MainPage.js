import React from 'react';

import Project from '../components/Project';

class MainPage extends React.Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    this.setState({
      projects:[
        {
          id: 1,
          name: "p1",
          keywords: ['k11', 'k12'],
          isFinished: false
        },
        {
          id: 2,
          name: "p2",
          keywords: ['k21', 'k22', 'k23'],
          isFinished: true
        }
      ]
    });
  }

  render() {
    const Projects = this.state.projects.map(
      each =>
        <Project
          id={each.id}
          name={each.name}
          keywords={each.keywords}
          isFinished={each.isFinished}
        />
    );

    return (
      <div>
        <h2>This is the Main Page</h2>
        {Projects}
        <div id="main-form">
          <label htmlFor="fname">First Name: </label>
          <input type="text" id="fname" name="firstName"/>
          <br />
          <label htmlFor="lname">Last Name: </label>
          <input type="text" id="lname" name="lastName"/>
          <br /><br />
        </div>
        <hr />
      </div>
    );
  }
}

export default MainPage;
