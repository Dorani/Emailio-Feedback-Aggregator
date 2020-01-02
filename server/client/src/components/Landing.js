import React, { Component } from 'react';


const jumbotronStyle = {
  paddingBottom: '150px',
  backgroundColor: "#80d8ff",
  textAlign: "center"
}

class Landing extends Component {
  render() {
    return (
      <div className="card-panel" style={jumbotronStyle}>
        <div className="container">
          <h1>Welcome to Emaily</h1>
          <p>Here you can send your users surveys to help better your business...</p>
        </div>
       </div>
    );
  }
}

export default Landing;
